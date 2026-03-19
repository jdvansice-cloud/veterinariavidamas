import { useTranslation } from 'react-i18next'
import { FaWhatsapp } from 'react-icons/fa'
import { HeroPets } from './illustrations'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="home"
      className="bg-primary min-h-screen flex items-center justify-center text-white text-center px-4 pt-16"
    >
      <div className="max-w-3xl">
        <HeroPets className="w-48 h-48 md:w-72 md:h-72 mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8">
          {t('hero.subtitle')}
        </p>
        <a
          href="https://wa.me/50766386310"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105"
        >
          <FaWhatsapp className="text-2xl" />
          {t('hero.cta')}
        </a>
      </div>
    </section>
  )
}
