import { useTranslation } from 'react-i18next'
import { FaStethoscope, FaFlask, FaPills, FaShoppingBag, FaCut, FaHeart } from 'react-icons/fa'

const serviceKeys = [
  { key: 'clinic', icon: FaStethoscope },
  { key: 'lab', icon: FaFlask },
  { key: 'pharmacy', icon: FaPills },
  { key: 'petshop', icon: FaShoppingBag },
  { key: 'grooming', icon: FaCut },
  { key: 'funeral', icon: FaHeart },
] as const

export default function Services() {
  const { t } = useTranslation()

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-12">
          {t('services.title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceKeys.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <Icon className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {t(`services.${key}`)}
              </h3>
              <p className="text-gray-600">{t(`services.${key}Desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
