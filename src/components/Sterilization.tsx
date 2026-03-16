import { useTranslation } from 'react-i18next'
import { DogIllustration, CatIllustration } from './illustrations'

export default function Sterilization() {
  const { t } = useTranslation()
  const requirements = ['req1', 'req2', 'req3', 'req4'] as const

  return (
    <section id="sterilization" className="py-20 bg-primary text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          {t('sterilization.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center">
            <DogIllustration className="w-24 h-24 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">{t('sterilization.dogs')}</h3>
            <div className="text-5xl font-extrabold text-accent">$65<span className="text-2xl">.00</span></div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center">
            <CatIllustration className="w-24 h-24 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">{t('sterilization.cats')}</h3>
            <div className="text-5xl font-extrabold text-accent">$45<span className="text-2xl">.00</span></div>
          </div>
        </div>

        <div className="bg-beige/20 rounded-2xl p-8 max-w-md mx-auto">
          <h4 className="text-xl font-bold mb-4 text-center">{t('sterilization.requirements')}</h4>
          <ul className="space-y-2">
            {requirements.map((req) => (
              <li key={req} className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full shrink-0" />
                {t(`sterilization.${req}`)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
