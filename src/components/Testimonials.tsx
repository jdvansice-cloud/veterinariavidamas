import { useTranslation } from 'react-i18next'
import { FaStar } from 'react-icons/fa'

const testimonialKeys = ['t1', 't2', 't3'] as const

export default function Testimonials() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-beige-light">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-12">
          {t('testimonials.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialKeys.map((key) => (
            <div key={key} className="bg-white rounded-2xl shadow-md p-8">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"{t(`testimonials.${key}`)}"</p>
              <p className="font-bold text-gray-800">— {t(`testimonials.${key}Author`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
