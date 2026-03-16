import { useTranslation } from 'react-i18next'

const placeholders = [
  { bg: 'bg-primary/20', emoji: '🐕' },
  { bg: 'bg-accent/20', emoji: '🐈' },
  { bg: 'bg-green-200', emoji: '🐾' },
  { bg: 'bg-blue-200', emoji: '🏥' },
  { bg: 'bg-yellow-200', emoji: '✂️' },
  { bg: 'bg-purple-200', emoji: '🐶' },
]

export default function Gallery() {
  const { t } = useTranslation()

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-12">
          {t('gallery.title')}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholders.map((p, i) => (
            <div
              key={i}
              className={`${p.bg} rounded-2xl aspect-square flex items-center justify-center text-6xl`}
            >
              {p.emoji}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
