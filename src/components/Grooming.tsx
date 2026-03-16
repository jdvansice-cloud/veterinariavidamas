import { useTranslation } from 'react-i18next'

const prices = [
  { key: 'bathCutRegular', small: '$20.00', medium: '$22.00', large: '$25.00' },
  { key: 'bathCutMedicated', small: '$22.00', medium: '$24.00', large: '$27.00' },
  { key: 'bathMedicated', small: '$17.00', medium: '$18.00', large: '$21.00' },
  { key: 'bathDeshedding', small: '—', medium: '—', large: '$30.00' },
  { key: 'bathChihuahua', small: '$13.00', medium: '—', large: '—' },
  { key: 'bathFeline', small: '$17.00', medium: '—', large: '—' },
] as const

export default function Grooming() {
  const { t } = useTranslation()

  return (
    <section id="grooming" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-12">
          {t('groomingSection.title')}
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl shadow-md overflow-hidden">
            <thead>
              <tr className="bg-primary text-white">
                <th className="text-left py-4 px-6 font-semibold">{t('groomingSection.service')}</th>
                <th className="py-4 px-4 font-semibold text-center">{t('groomingSection.small')}</th>
                <th className="py-4 px-4 font-semibold text-center">{t('groomingSection.medium')}</th>
                <th className="py-4 px-4 font-semibold text-center">{t('groomingSection.large')}</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((row, i) => (
                <tr key={row.key} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-4 px-6 font-medium text-gray-800">
                    {t(`groomingSection.${row.key}`)}
                  </td>
                  <td className="py-4 px-4 text-center text-gray-700">{row.small}</td>
                  <td className="py-4 px-4 text-center text-gray-700">{row.medium}</td>
                  <td className="py-4 px-4 text-center text-gray-700">{row.large}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
