const experiences = [
  {
    role: 'Full-Stack Developer',
    company: 'Jamsai Publishing Co., Ltd.',
    period: 'Mar 2026 – Present',
    current: true,
    dot: 'bg-sky-500',
    border: 'border-sky-200 hover:border-sky-400',
    roleColor: 'text-slate-800',
    companyColor: 'text-sky-600',
    tagStyle: 'bg-sky-50 text-sky-700 border border-sky-200',
    highlights: [
      'Updated Image and Background for Kiosk Matching Game with Next.js',
      'Optimized Query performance for Kiosk Matching Game with Express.js',
      'Developed KPIs System via React.js and Express.js and deployed on EC2',
    ],
    tags: ['Next.js', 'React.js', 'Express.js', 'EC2'],
  },
  {
    role: 'Full-Stack Developer',
    company: 'CureConnect Co., Ltd. (Marketing Agency)',
    period: 'Jul 2025 – Feb 2026',
    dot: 'bg-violet-500',
    border: 'border-violet-200 hover:border-violet-400',
    roleColor: 'text-slate-800',
    companyColor: 'text-violet-600',
    tagStyle: 'bg-violet-50 text-violet-700 border border-violet-200',
    highlights: [
      'Developed CURE CAST Digital Signage application for Loop Ads and Video',
      'Developed Dental Clinic Membership Web Application',
      'Developed Leads Projects for internal company use',
    ],
    tags: ['React.js', 'Node.js', 'Digital Signage', 'Web Apps'],
  },
  {
    role: 'Back-end Developer',
    company: 'Touch Technologies Co., Ltd. (Health Tech)',
    period: 'May 2023 – May 2025',
    dot: 'bg-emerald-500',
    border: 'border-emerald-200 hover:border-emerald-400',
    roleColor: 'text-slate-800',
    companyColor: 'text-emerald-600',
    tagStyle: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    highlights: [
      'Collaborated with CTO to develop a Telemedicine platform, delivering core backend features on schedule',
      'Engineered middleware and RESTful APIs for the ICS Admin system',
      'Built 10+ Retool dashboards used daily by the Business Analyst team, eliminating manual SQL requests',
      'Installed and configured Nginx on GCP VMs across 5 projects, enabling HTTPS for all production services',
      'Developed and integrated APIs with QueQ for hospital queue management',
      'Designed an ETL pipeline to migrate records from MongoDB to MariaDB using n8n',
      'Built appointment scheduling API and optimized lab-result retrieval and vital-sign recording APIs',
    ],
    tags: ['NestJS', 'TypeScript', 'GCP', 'Nginx', 'Retool', 'MySQL', 'n8n', 'MongoDB'],
  },
  {
    role: 'Innovation Engineer (Robotics)',
    company: 'INET Managed Services Co., Ltd.',
    period: 'Feb 2022 – Apr 2023',
    dot: 'bg-orange-500',
    border: 'border-orange-200 hover:border-orange-400',
    roleColor: 'text-slate-800',
    companyColor: 'text-orange-600',
    tagStyle: 'bg-orange-50 text-orange-700 border border-orange-200',
    highlights: [
      'Developed a Line Chatbot for internal company use with Node.js',
      'Wrote email script templates using Python',
      'Created scripts to check attendees list in Zoom meetings',
    ],
    tags: ['Node.js', 'Python', 'Line Bot'],
  },
  {
    role: 'Software Engineer',
    company: 'Internet Thailand Public Co., Ltd. (INET)',
    period: 'May 2021 – Feb 2022',
    dot: 'bg-pink-500',
    border: 'border-pink-200 hover:border-pink-400',
    roleColor: 'text-slate-800',
    companyColor: 'text-pink-600',
    tagStyle: 'bg-pink-50 text-pink-700 border border-pink-200',
    highlights: [
      'Developed usage summary dashboard for Whizkidz customer website using Angular',
      'Built APIs for the dashboard to summarize all usage data using Golang',
      'Experimented with MERN Stack project development',
    ],
    tags: ['Angular', 'Golang', 'MERN Stack', 'REST API'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white scroll-mt-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="font-mono text-sky-500 text-sm tracking-widest uppercase">Career Path</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-2">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="accent-line w-24 mx-auto mt-6" />
        </div>

        <div className="relative pl-8 md:pl-12">
          {/* Vertical line */}
          <div className="absolute left-3 md:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-sky-300 via-violet-200 to-transparent" />

          <div className="space-y-7">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`reveal relative card card-hover rounded-2xl p-6 border ${exp.border}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[2.05rem] md:-left-[2.55rem] top-7">
                  {exp.current && (
                    <span className="absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75 animate-ping" />
                  )}
                  <span className={`relative inline-flex w-3 h-3 rounded-full shadow-md ${exp.dot}`} />
                </div>

                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className={`font-bold text-lg ${exp.roleColor}`}>{exp.role}</h3>
                      {exp.current && (
                        <span className="px-2 py-0.5 text-xs font-mono bg-green-50 text-green-600 border border-green-200 rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <p className={`font-medium text-sm mt-0.5 ${exp.companyColor}`}>{exp.company}</p>
                  </div>
                  <span className="font-mono text-xs text-slate-400 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-1.5 mb-4">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-500">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${exp.dot}`} />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className={`px-2.5 py-1 text-xs font-mono rounded-lg ${exp.tagStyle}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
