/*
Represents the background video used in the Hero section
Library used (instead of HTML5 videos which suffer from Browser API Inconsistencies): https://videojs.com
*/

import { useState, useRef, useEffect } from 'react'
import { css } from '@emotion/react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import ImageVariant from './image'

export const Video = () => {
  // Ref to store video DOM element
  const videoRef = useRef(null)

  // Ref to store video.js player instance
  const playerRef = useRef(null)

  // State to track if the video has finished loading
  const [videoLoaded, setVideoLoaded] = useState(false)

  // Handle player initialization
  const handlePlayerReady = (player) => {
    playerRef.current = player

    // Set videoLoaded state to true when video can play
    player.on('canplay', () => {
      setVideoLoaded(true)
    })
  }

  useEffect(() => {
    const options = {
      autoplay: true,
      muted: true,
      preload: 'auto',
      disablePictureInPicture: true,
      controls: false,
      loop: true,
      responsive: false,
      fluid: false,
      sources: [
        {
          src: 'partials/hero/video.mp4',
          type: 'video/mp4',
        },
      ],
    }
    if (!playerRef.current) {
      // Create video element
      const videoElement = document.createElement('video-js')

      // Add class for styling
      videoElement.classList.add('vjs-big-play-centered')

      // Append to video ref
      videoRef.current.appendChild(videoElement)

      // Init video.js player
      playerRef.current = videojs(videoElement, options, () => {
        if (handlePlayerReady) handlePlayerReady(playerRef.current)
      })
    } else {
      const player = playerRef.current

      // Set autoplay
      player.autoplay(options.autoplay)

      // Set source
      player.src(options.sources)
    }
  }, [videoRef])

  useEffect(() => {
    const player = playerRef.current

    return () => {
      if (player && !player.isDisposed()) {
        // Dispose player on unmount
        player.dispose()
        playerRef.current = null
      }
    }
  }, [playerRef])

  return (
    <>
      <ImageVariant />

      <div
        css={css`
          // Show video when it can play
          visibility: ${videoLoaded ? 'visible' : 'hidden'};

          video {
            object-fit: cover;
            height: 100%;
            width: 100%;
            filter: brightness(40%);
            position: absolute;
            top: 0;
            left: 0;
          }

          video-js {
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
          }
        `}
        data-vjs-player
      >
        <div ref={videoRef} />
      </div>
    </>
  )
}

export default Video
