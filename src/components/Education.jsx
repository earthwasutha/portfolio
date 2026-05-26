import { useState } from 'react'

const education = [
  {
    degree: 'Bachelor of Information Science',
    school: 'Suranaree University of Technology',
    period: '2018 – 2021',
    detail: 'School of Informatics',
    icon: '🎓',
    border: 'border-sky-200 hover:border-sky-400',
    periodColor: 'text-sky-600',
    schoolColor: 'text-sky-600',
    iconBg: 'bg-sky-50',
  },
  {
    degree: 'Art-Math Program',
    school: 'Saraburi Witthayakhom School',
    period: '2015 – 2017',
    detail: 'Secondary Education',
    icon: '📚',
    border: 'border-violet-200 hover:border-violet-400',
    periodColor: 'text-violet-600',
    schoolColor: 'text-violet-600',
    iconBg: 'bg-violet-50',
  },
]

const certificates = [
  {
    title: 'SQL (Advanced)',
    issuer: 'HackerRank',
    date: '17 Dec, 2024',
    id: '6A2E740ADF5E',
    image: '/images/sqladvance.jpg',
    badge: 'bg-sky-50 text-sky-700 border-sky-200',
    glow: 'hover:border-sky-400 hover:shadow-sky-100',
  },
  {
    title: 'SQL (Intermediate)',
    issuer: 'HackerRank',
    date: '16 Dec, 2024',
    id: 'BA0C40122F32',
    image: '/images/sqlintermediate.jpg',
    badge: 'bg-violet-50 text-violet-700 border-violet-200',
    glow: 'hover:border-violet-400 hover:shadow-violet-100',
  },
]

function CertModal({ cert, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Certificate image */}
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full object-contain"
        />

        {/* Info bar */}
        <div className="px-6 py-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-bold text-slate-800">{cert.title}</p>
            <p className="text-sm text-slate-400">{cert.issuer} · {cert.date}</p>
          </div>
          <span className="font-mono text-xs text-slate-400 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
            ID: {cert.id}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Education() {
  const [activeCert, setActiveCert] = useState(null)

  return (
    <>
      <section id="education" className="py-24 px-6 bg-slate-50 scroll-mt-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="font-mono text-sky-500 text-sm tracking-widest uppercase">Background</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-2">
              Education & <span className="text-gradient">Awards</span>
            </h2>
            <div className="accent-line w-24 mx-auto mt-6" />
          </div>

          {/* Education cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {education.map((edu, i) => (
              <div
                key={i}
                className={`reveal card card-hover rounded-2xl p-7 border ${edu.border}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`text-4xl p-3 rounded-2xl ${edu.iconBg}`}>{edu.icon}</div>
                  <div className="flex-1">
                    <div className={`font-mono text-xs mb-1 ${edu.periodColor}`}>{edu.period}</div>
                    <h3 className="text-slate-800 font-bold text-lg leading-tight">{edu.degree}</h3>
                    <p className={`text-sm font-medium mt-1 ${edu.schoolColor}`}>{edu.school}</p>
                    <p className="text-slate-400 text-sm mt-0.5">{edu.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Award */}
          <div className="reveal mb-12">
            <div className="bg-white border border-amber-200 hover:border-amber-400 rounded-2xl p-7 card-hover relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/50 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-5 relative z-10">
                <div className="text-5xl p-4 bg-amber-50 rounded-2xl">🏆</div>
                <div>
                  <div className="font-mono text-xs text-amber-600 mb-1 tracking-widest uppercase">Achievement</div>
                  <h3 className="text-slate-800 font-bold text-xl">Popular Vote Award</h3>
                  <p className="text-amber-600 font-medium mt-1">IT Show Case 2021</p>
                  <p className="text-slate-400 text-sm mt-0.5">Suranaree University of Technology</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certificates section */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-sky-500 text-sm tracking-widest uppercase">Certifications</span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {certificates.map((cert, i) => (
                <div
                  key={i}
                  className={`reveal card rounded-2xl overflow-hidden border border-slate-200 shadow-sm transition-all duration-300 cursor-pointer group ${cert.glow} hover:shadow-md hover:-translate-y-1`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                  onClick={() => setActiveCert(cert)}
                >
                  {/* Certificate thumbnail */}
                  <div className="relative overflow-hidden bg-slate-100 aspect-[4/3]">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-xl px-4 py-2 flex items-center gap-2 text-sm font-semibold text-slate-700 shadow">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                        View Certificate
                      </div>
                    </div>
                  </div>

                  {/* Card info */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${cert.badge}`}>
                            🏅 {cert.title}
                          </span>
                        </div>
                        <p className="text-slate-500 text-sm mt-2">{cert.issuer}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-xs font-mono text-slate-400">{cert.date}</p>
                        <p className="text-xs font-mono text-slate-300 mt-0.5">ID: {cert.id}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox modal */}
      {activeCert && (
        <CertModal cert={activeCert} onClose={() => setActiveCert(null)} />
      )}
    </>
  )
}
