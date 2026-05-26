import { useState, useEffect } from 'react'

const photos = ['/images/myself1.jpg', '/images/myself2.jpg']

export default function Summary() {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setPhotoIndex((i) => (i + 1) % photos.length)
        setFading(false)
      }, 500)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="summary" className="py-24 px-6 bg-white scroll-mt-32">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="font-mono text-sky-500 text-sm tracking-widest uppercase">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-2">
            Professional <span className="text-gradient">Summary</span>
          </h2>
          <div className="accent-line w-24 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar */}
          <div className="reveal-left flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 rounded-full border-2 border-sky-100 animate-spin-slow absolute inset-0 -m-4" />
              <div
                className="w-64 h-64 rounded-full border-2 border-indigo-100 absolute inset-0 -m-0"
                style={{ animationDirection: 'reverse', animationDuration: '6s', animation: 'spin 6s linear infinite reverse' }}
              />
              <div className="w-64 h-64 rounded-full border border-slate-200 shadow-lg relative z-10 overflow-hidden">
                <img
                  src={photos[photoIndex]}
                  alt="Profile"
                  className="w-full h-full object-cover object-top transition-opacity duration-500"
                  style={{ opacity: fading ? 0 : 1 }}
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="reveal-right space-y-5">
            <p className="text-slate-700 text-lg leading-relaxed">
              Full-Stack Developer with{' '}
              <span className="text-sky-600 font-semibold">5+ years of experience</span>{' '}
              designing, building, and maintaining production-grade backend systems and RESTful APIs.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Core expertise in <span className="text-sky-600 font-medium">Node.js, NestJS, and TypeScript</span> with
              hands-on experience in relational and non-relational databases. Proven track record in
              cloud infrastructure (GCP, Nginx), ETL pipeline design, and third-party integrations at scale.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                { icon: '📍', label: 'Location', value: 'Bangkok, Thailand' },
                { icon: '📧', label: 'Email', value: 'wasutha.ju@gmail.com' },
                { icon: '📱', label: 'Phone', value: '+66 92-557-9947' },
                { icon: '🔗', label: 'LinkedIn', value: 'wasutha-junpangam' },
              ].map((item) => (
                <div key={item.label} className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <div>
                    <div className="text-xs text-slate-400">{item.label}</div>
                    <div className="text-sm text-slate-700 font-medium truncate">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-2 px-4 py-2 bg-sky-50 border border-sky-200 rounded-lg text-sm text-sky-700 font-mono">
                🏆 HackerRank SQL Advanced
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-200 rounded-lg text-sm text-indigo-700 font-mono">
                ⭐ Popular Vote 2021
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
