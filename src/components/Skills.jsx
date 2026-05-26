const skillCategories = [
  {
    title: 'Languages',
    icon: '{ }',
    span: 'col-span-6 sm:col-span-3 lg:col-span-2',
    border: 'border-sky-200 hover:border-sky-400',
    header: 'text-sky-600',
    iconBg: 'bg-sky-50 text-sky-600',
    tag: 'bg-sky-50 text-sky-700 border border-sky-200',
    skills: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'PHP', 'HTML/CSS'],
  },
  {
    title: 'Frameworks',
    icon: '⚡',
    span: 'col-span-6 sm:col-span-3 lg:col-span-2',
    border: 'border-violet-200 hover:border-violet-400',
    header: 'text-violet-600',
    iconBg: 'bg-violet-50 text-violet-600',
    tag: 'bg-violet-50 text-violet-700 border border-violet-200',
    skills: ['Node.js', 'NestJS', 'Express.js', 'React.js', 'React Native', 'Socket.io', 'Tailwind CSS'],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    span: 'col-span-6 sm:col-span-6 lg:col-span-2',
    border: 'border-emerald-200 hover:border-emerald-400',
    header: 'text-emerald-600',
    iconBg: 'bg-emerald-50 text-emerald-600',
    tag: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    skills: ['MySQL', 'MariaDB', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    span: 'col-span-6 sm:col-span-3 lg:col-span-3',
    border: 'border-orange-200 hover:border-orange-400',
    header: 'text-orange-600',
    iconBg: 'bg-orange-50 text-orange-600',
    tag: 'bg-orange-50 text-orange-700 border border-orange-200',
    skills: ['GCP', 'Nginx', 'PM2', 'n8n', 'EC2', 'CI/CD'],
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    span: 'col-span-6 sm:col-span-3 lg:col-span-3',
    border: 'border-pink-200 hover:border-pink-400',
    header: 'text-pink-600',
    iconBg: 'bg-pink-50 text-pink-600',
    tag: 'bg-pink-50 text-pink-700 border border-pink-200',
    skills: ['Git / GitHub / GitLab', 'Retool', 'JIRA', 'Looker Studio', 'Postman', 'Line Developer'],
  },
]


export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-50 scroll-mt-32">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="font-mono text-sky-500 text-sm tracking-widest uppercase">What I Know</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-2">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="accent-line w-24 mx-auto mt-6" />
        </div>

        {/* Categories — 6-col grid fills all 5 cards cleanly */}
        <div className="grid grid-cols-6 gap-5 mb-10">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className={`reveal card card-hover rounded-2xl p-6 border ${cat.border} ${cat.span}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-base font-mono font-bold ${cat.iconBg}`}>
                  {cat.icon}
                </div>
                <h3 className={`font-semibold text-base ${cat.header}`}>{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className={`px-2.5 py-1 rounded-lg text-xs font-medium ${cat.tag}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="grid sm:grid-cols-2 gap-4 mt-10 reveal">
          {[
            { title: 'SQL Advanced', org: 'HackerRank', icon: '🏅', label: 'Advanced', accent: 'border-l-sky-400', badge: 'bg-sky-50 text-sky-700 border-sky-200' },
            { title: 'SQL Intermediate', org: 'HackerRank', icon: '🏅', label: 'Intermediate', accent: 'border-l-violet-400', badge: 'bg-violet-50 text-violet-700 border-violet-200' },
          ].map((cert) => (
            <div
              key={cert.title}
              className={`card card-hover rounded-xl p-5 flex items-center gap-4 border border-slate-200 border-l-4 ${cert.accent}`}
            >
              <div className="text-3xl">{cert.icon}</div>
              <div className="flex-1">
                <div className="text-slate-800 font-semibold text-sm">{cert.title}</div>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-slate-400 text-xs">{cert.org}</span>
                  <span className={`px-2 py-0.5 text-xs font-medium rounded-full border ${cert.badge}`}>Certified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
