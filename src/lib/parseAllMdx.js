/*
The purpose of parseAllMdx.js is to parse MDX files in the given directory
It compiles the MDX code and processes the Frontmatter object for later use Additionally, it calculates and adds useful data to the Frontmatter object, making it easier to utilize them inside components
*/

import fs from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import { globby } from 'globby'
import sharp from 'sharp'
import matter from 'gray-matter'
import imageType from 'image-type'
import * as z from 'zod'

// Defines a schema for validating the frontmatter images field
export const frontmatterImagesFieldSchema = z.record(
  z.preprocess(
    (val) => (!Array.isArray(val) ? [val] : val),
    z.array(z.string()),
  ),
)

// Defines a schema for validating the augmented image object
export const augmentedImageSchema = z.object({
  url: z.string(),
  blurData: z.string(),
  metadata: z.object({
    width: z.union([z.number(), z.undefined()]),
    height: z.union([z.number(), z.undefined()]),
  }),
})

// Defines a schema for validating the entire frontmatter object
export const frontmatterSchema = z
  .object({
    images: frontmatterImagesFieldSchema.optional(),
    processedImages: z.record(z.array(augmentedImageSchema)).optional(),
  })
  .catchall(z.any())

// Function to convert an image to a blurred base64 string
const convertImageToBlurredBase64 = async (input) => {
  // Try to process the image
  try {
    // Reduces the image width
    const imageBuffer = await sharp(input).resize({ width: 50 }).toBuffer()

    // Get the mime type of the resized image
    const mime = await imageType(imageBuffer)

    // Return a base64 encoded string with the mime type prepended
    return `data:${mime?.mime};base64,${imageBuffer.toString('base64')}`
  } catch (err) {
    // Throw any errors
    throw new Error(err.message)
  }
}

// Augments an image object with additional data (blurred Base64 version, width, height)
const augmentImageObj = async (obj) => {
  // Loop through each key in the object
  try {
    const promises = Object.keys(obj).map(async (key) => {
      // Map over each image
      const frontmatter = obj[key].map(async (img) => {
        // Get image path
        const imgPath = `${process.cwd()}/public${img}`

        // Get image stats
        await sharp(imgPath).stats()

        // Check if image path exists
        fs.access(imgPath, fs.constants.F_OK, (err) => {
          if (err) {
            throw new Error(`${img} path does not exist.`)
          }
        })

        // Get image width and height
        const { width, height } = await sharp(imgPath).metadata()

        // Add augmented data to return object
        const augmentedField = {
          url: img,
          blurData: await convertImageToBlurredBase64(imgPath),
          metadata: {
            width,
            height,
          },
        }

        return augmentedField
      })

      // Return key with promise all
      return {
        [key]: await Promise.all(frontmatter),
      }
    })

    // Return promises
    return promises
  } catch (err) {
    // Throw error
    throw new Error(err.message)
  }
}

// Parses all MDX files in a directory and compiles them to be displayed on-demand using MdxRenderer
const parseAllMdx = async (dir) => {
  // Try block
  try {
    // Frontmatter builder function
    const frontmatterBuilder = (frontmatter) =>
      frontmatterSchema
        .passthrough()
        .transform(async (fm) => {
          // Check for images
          const fmProcessedImages = fm.images
            ? await Promise.all(await augmentImageObj(fm.images)).then(
                (results) =>
                  results.reduce((acc, result) => {
                    // Get key
                    const key = Object.keys(result)[0]

                    // Return accumulated result
                    return { ...acc, [key]: result[key] }
                  }, {}),
              )
            : undefined

          // Return frontmatter with processed images
          return {
            ...fm,
            processedImages: fmProcessedImages,
          }
        })
        .parseAsync(frontmatter)

    // Get file promises
    const filePromises = await globby(`./${dir}`).then((fileList) =>
      fileList.map(async (file) =>
        fs.promises
          .readFile(file, {
            encoding: 'utf8',
          })

          // Get content and frontmatter
          .then(async (content) => {
            const frontmatter = matter(content).data

            return {
              content,
              frontmatter: await frontmatterBuilder(frontmatter),
            }
          })

          // Serialize with frontmatter
          .then(({ content, frontmatter }) =>
            serialize(content, {
              parseFrontmatter: true,
              scope: {
                frontmatter,
              },
            }),
          ),
      ),
    )

    // Return promises
    return await Promise.all(filePromises)
  } catch (err) {
    // Throw error
    throw new Error(err.message)
  }
}

export default parseAllMdx
