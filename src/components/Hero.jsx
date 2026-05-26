import { useEffect, useState, useMemo } from 'react'

const roles = ['Full-Stack Developer', 'Backend Developer', 'Software Engineer', 'Software Developer']

const techStack = [
  { name: 'TypeScript', color: 'text-blue-600 bg-blue-50 border-blue-200' },
  { name: 'Node.js',    color: 'text-green-700 bg-green-50 border-green-200' },
  { name: 'NestJS',     color: 'text-rose-600 bg-rose-50 border-rose-200' },
  { name: 'React.js',   color: 'text-sky-600 bg-sky-50 border-sky-200' },
  { name: 'PostgreSQL', color: 'text-indigo-600 bg-indigo-50 border-indigo-200' },
  { name: 'GCP',        color: 'text-orange-600 bg-orange-50 border-orange-200' },
]

const terminalLines = [
  { prompt: true,  text: 'whoami' },
  { prompt: false, text: 'wasutha_junpangam' },
  { prompt: true,  text: 'cat experience.txt' },
  { prompt: false, text: '5+ years · 4 companies' },
  { prompt: true,  text: 'echo $LOCATION' },
  { prompt: false, text: 'Bangkok, Thailand 🇹🇭' },
  { prompt: true,  text: 'echo $STATUS' },
  { prompt: false, text: '"Open to new opportunities" ✓', highlight: true },
  { prompt: true,  text: 'ls skills/' },
  { prompt: false, text: 'TypeScript  Node.js  NestJS  React' },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [terminalLine, setTerminalLine] = useState(0)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40)
    } else {
      setIsDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  useEffect(() => {
    if (terminalLine < terminalLines.length) {
      const t = setTimeout(() => setTerminalLine((l) => l + 1), 420)
      return () => clearTimeout(t)
    }
  }, [terminalLine])

  const particles = useMemo(() => Array.from({ length: 12 }, () => ({
    style: {
      width:  `${Math.random() * 5 + 2}px`,
      height: `${Math.random() * 5 + 2}px`,
      left:   `${Math.random() * 100}%`,
      top:    `${Math.random() * 100}%`,
      '--duration': `${Math.random() * 4 + 3}s`,
      '--delay':    `${Math.random() * 3}s`,
    },
  })), [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-50"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-sky-200/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[400px] h-[400px] bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-violet-100/20 rounded-full blur-3xl pointer-events-none" />

      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-sky-400/20 pointer-events-none"
          style={{
            ...p.style,
            animation: `particle-float ${p.style['--duration']} ease-in-out infinite`,
            animationDelay: p.style['--delay'],
          }}
        />
      ))}

      {/* Availability badge — top-right */}
      <div className="absolute top-36 right-6 md:right-10 z-20 animate-fade-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-green-200 rounded-full text-sm text-green-700 font-medium shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          Available for new opportunities
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-36 pb-24">
        <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] gap-12 xl:gap-20 items-center">

          {/* ── Left column ── */}
          <div>
            {/* Location label */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-50 border border-sky-200 rounded-full text-xs font-mono text-sky-600 mb-6 animate-fade-up"
              style={{ opacity: 0 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
              Bangkok, Thailand · Open to Remote
            </div>

            {/* Name */}
            <h1
              className="text-5xl md:text-7xl font-bold mb-4 tracking-tight animate-fade-up"
              style={{ animationDelay: '0.1s', opacity: 0 }}
            >
              <span className="text-slate-800">Wasutha</span>
              <br />
              <span className="text-gradient">Junpangam</span>
            </h1>

            {/* Typewriter */}
            <div
              className="h-9 flex items-center mb-5 animate-fade-up"
              style={{ animationDelay: '0.2s', opacity: 0 }}
            >
              <span className="font-mono text-lg md:text-xl text-sky-600 font-medium">
                {displayed}<span className="animate-pulse text-sky-400">|</span>
              </span>
            </div>

            {/* Description */}
            <p
              className="text-slate-500 text-base md:text-lg max-w-lg mb-7 leading-relaxed animate-fade-up"
              style={{ animationDelay: '0.3s', opacity: 0 }}
            >
              5+ years building production-grade systems with{' '}
              <span className="text-sky-600 font-semibold">Node.js</span>,{' '}
              <span className="text-sky-600 font-semibold">NestJS</span>, and{' '}
              <span className="text-sky-600 font-semibold">TypeScript</span>.
              Delivering end-to-end features from database to frontend.
            </p>

            {/* Tech stack badges */}
            <div
              className="flex flex-wrap gap-2 mb-8 animate-fade-up"
              style={{ animationDelay: '0.4s', opacity: 0 }}
            >
              {techStack.map((t) => (
                <span key={t.name} className={`px-3 py-1 text-xs font-medium rounded-lg border ${t.color}`}>
                  {t.name}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div
              className="flex flex-wrap items-center gap-3 mb-10 animate-fade-up"
              style={{ animationDelay: '0.5s', opacity: 0 }}
            >
              <button
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-sky-300/40 hover:-translate-y-0.5"
              >
                View Experience
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <a
                href="mailto:wasutha.ju@gmail.com"
                className="px-7 py-3 border border-slate-300 text-slate-600 font-semibold rounded-xl hover:bg-white hover:border-slate-400 hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </div>

            {/* Stats row */}
            <div
              className="flex items-center gap-8 pt-6 border-t border-slate-200 animate-fade-up"
              style={{ animationDelay: '0.6s', opacity: 0 }}
            >
              {[
                { value: '5+',  label: 'Years Exp.' },
                { value: '4',   label: 'Companies' },
                { value: '10+', label: 'Projects' },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8">
                  {i > 0 && <div className="w-px h-10 bg-slate-200" />}
                  <div>
                    <div className="text-2xl font-bold text-gradient-blue">{stat.value}</div>
                    <div className="text-xs text-slate-400 mt-0.5 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column — Terminal card ── */}
          <div
            className="hidden lg:block animate-fade-up"
            style={{ animationDelay: '0.5s', opacity: 0 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-indigo-400/20 rounded-3xl blur-2xl scale-105" />
              <div className="relative bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700/60">

                {/* Window bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700/60">
                  <div className="w-3 h-3 rounded-full bg-red-400/90" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/90" />
                  <div className="w-3 h-3 rounded-full bg-green-400/90" />
                  <span className="ml-2 text-xs font-mono text-slate-500">wasutha ~ portfolio</span>
                </div>

                {/* Terminal body */}
                <div className="p-5 font-mono text-sm space-y-1.5 min-h-[300px]">
                  {terminalLines.slice(0, terminalLine).map((line, i) => (
                    <div
                      key={i}
                      className={
                        line.prompt
                          ? 'text-slate-300'
                          : line.highlight
                          ? 'text-green-400'
                          : 'text-sky-300'
                      }
                    >
                      {line.prompt ? (
                        <>
                          <span className="text-violet-400">➜</span>{' '}
                          <span className="text-sky-500">~</span>{' '}
                          <span className="text-slate-500">$</span>{' '}
                          {line.text}
                        </>
                      ) : (
                        <span className="pl-4 text-opacity-90">{line.text}</span>
                      )}
                    </div>
                  ))}
                  {terminalLine < terminalLines.length && (
                    <div className="text-slate-300">
                      <span className="text-violet-400">➜</span>{' '}
                      <span className="text-sky-500">~</span>{' '}
                      <span className="text-slate-500">$</span>{' '}
                      <span className="animate-pulse">█</span>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-slate-400 text-xs font-mono tracking-widest">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-sky-400/60 to-transparent" />
      </div>
    </section>
  )
}
