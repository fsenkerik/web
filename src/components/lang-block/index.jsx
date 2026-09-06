import { useLanguage } from 'root/src/context/LanguageContext'

const LangBlock = ({ lang, children }) => {
  const { lang: currentLang } = useLanguage()
  if (lang !== currentLang) return null
  return <>{children}</>
}

export default LangBlock
