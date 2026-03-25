import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  ArrowRight,
  Verified,
  Briefcase,
  GraduationCap,
  Languages,
  Menu,
  CheckCircle2,
  Bot,
  Search,
  Wrench,
  Brain,
  Zap,
  Layers,
  Users,
  Download,
  Award,
  Terminal as TerminalIcon,
  Activity,
  ShieldCheck
} from "lucide-react";
import portfolioData from "./data/portfolio.json";
import { PortfolioData, LanguageContent } from "./types";
import { Terminal } from "./components/Terminal";
import { StatusBadge } from "./components/StatusBadge";
import { ProjectVisual } from "./components/ProjectVisual";

const data = portfolioData as PortfolioData;

export default function App() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const content: LanguageContent = data[lang];

  const toggleLang = () => {
    setLang(prev => prev === 'pt' ? 'en' : 'pt');
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-background-dark text-[#1e0a3c]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[#ddd6fe] bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-[#faf5ff] font-bold">
                {content.profile.initials}
              </div>
              <span className="text-xl font-bold tracking-tight">{content.profile.name}</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">{content.nav.about}</a>
              <a href="#value" className="text-sm font-medium hover:text-primary transition-colors">{content.nav.value}</a>
              <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors">{content.nav.experience}</a>
              <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">{content.nav.skills}</a>
              <a href="#certs" className="text-sm font-medium hover:text-primary transition-colors">{content.nav.certs}</a>
              <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">{content.nav.projects}</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">{content.nav.contact}</a>
            </nav>
            <div className="flex items-center gap-3">
              <button
                onClick={toggleLang}
                className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-bold text-white hover:bg-secondary/90 transition-all cursor-pointer"
              >
                <span>{lang === 'pt' ? 'PT-BR' : 'EN-US'}</span>
                <Languages className="w-4 h-4" />
              </button>
              <button className="md:hidden p-2 rounded-lg hover:bg-[#ddd6fe]">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden qa-grid" id="about">
          <div className="scanline opacity-20"></div>
          <div className="hero-orb-1"></div>
          <div className="hero-orb-2"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-8"
              >
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary font-mono text-xs font-bold uppercase tracking-widest">
                    <Activity className="w-3 h-3" />
                    <span>Status: Stable</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1]">
                    {content.hero.title} <br />
                    <span className="text-primary text-glow-primary">{content.hero.highlight}</span>
                  </h1>
                  <div className="space-y-4">
                    <p className="text-xl text-[#6b4fa0] font-medium">
                      {content.profile.subtitle}
                    </p>
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 font-mono text-sm inline-block shadow-lg shadow-primary/5">
                      <span className="text-secondary">expect</span>(quality).<span className="text-primary">toBe</span>(<span className="text-amber-600">assured</span>);
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-bold text-background-dark shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
                  >
                    <TerminalIcon className="w-5 h-5" />
                    {content.hero.viewProjects}
                  </a>
                  <a
                    href={content.profile.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-[#c4b5fd] px-8 py-4 font-bold hover:bg-[#ddd6fe] transition-colors hover:border-secondary"
                  >
                    <Download className="w-5 h-5 text-secondary" />
                    {content.hero.downloadResume}
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative lg:ml-auto w-full max-w-md pt-8"
              >
                <Terminal
                  lines={[
                    "npm run test:prod",
                    "> Running all suites...",
                    "✓ smoke-test.spec.ts (2.4s)",
                    "✓ inventory.spec.ts (1.8s)",
                    "✓ checkout.spec.ts (3.2s)",
                    "✓ api-contract.spec.ts (0.9s)",
                    "PASS: 100% Assurance Gained"
                  ]}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Stats / Pipeline Metrics */}
        <section className="py-12 bg-[#f3e8ff] border-y border-[#ddd6fe]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-8">
              <Activity className="w-5 h-5 text-primary" />
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#9068b8]">Pipeline Metrics</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {content.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group flex flex-col gap-2 rounded-xl p-6 border border-[#ddd6fe] bg-background-dark shadow-sm hover:border-primary/50 transition-colors"
                >
                  <div className="absolute top-3 right-3">
                    <CheckCircle2 className="w-3 h-3 text-primary opacity-50" />
                  </div>
                  <span className={`${stat.type === 'primary' ? 'text-primary' : 'text-secondary'} font-mono text-[10px] font-bold uppercase tracking-widest`}>
                    {stat.label}
                  </span>
                  <span className="text-2xl font-black">{stat.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition / Quality Pillars */}
        <section className="py-24 relative overflow-hidden" id="value">
          {/* section bg */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#f3e8ff] via-background-dark to-background-dark pointer-events-none"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/8 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* header */}
            <div className="text-center mb-16">
              <StatusBadge type="success" label="Core Philosophy" />
              <h2 className="text-4xl lg:text-5xl font-black mt-4">{content.valueProposition.title}</h2>
              <p className="text-[#9068b8] mt-3 max-w-lg mx-auto text-sm">
                {lang === 'pt'
                  ? 'Valores que guiam meu trabalho em cada projeto e entrega'
                  : 'Values that guide my work in every project and delivery'}
              </p>
              <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-5"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.valueProposition.items.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group relative rounded-3xl overflow-hidden border border-[#ddd6fe] hover:border-primary/40 transition-all shadow-sm hover:shadow-xl hover:shadow-primary/10 flex flex-col"
                  >
                    {/* top accent bar */}
                    <div className={`h-1 w-full flex-shrink-0 bg-gradient-to-r ${isEven ? 'from-primary via-primary/60 to-transparent' : 'from-secondary via-secondary/60 to-transparent'}`}></div>

                    <div className="p-8 bg-gradient-to-br from-[#faf5ff] to-[#f3e8ff] group-hover:to-[#ede9fe] transition-colors flex flex-col flex-1 relative">
                      {/* large faded number */}
                      <span className="absolute bottom-3 right-4 font-mono text-8xl font-black text-[#e9d5ff] select-none leading-none pointer-events-none">
                        0{idx + 1}
                      </span>

                      {/* icon */}
                      <div className={`h-16 w-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-md ${isEven ? 'bg-primary/10 text-primary shadow-primary/15' : 'bg-secondary/10 text-secondary shadow-secondary/15'}`}>
                        {item.icon === 'Verified' && <ShieldCheck className="w-8 h-8" />}
                        {item.icon === 'Zap' && <Zap className="w-8 h-8" />}
                        {item.icon === 'Layers' && <Layers className="w-8 h-8" />}
                        {item.icon === 'Users' && <Users className="w-8 h-8" />}
                      </div>

                      <h3 className="text-xl font-bold mb-3 relative z-10">{item.title}</h3>
                      <p className="text-[#9068b8] text-sm leading-relaxed mb-6 relative z-10 flex-1">
                        {item.description}
                      </p>

                      {/* metric proof point */}
                      <div className={`relative z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold font-mono border ${isEven ? 'bg-primary/8 text-primary border-primary/20' : 'bg-secondary/8 text-secondary border-secondary/20'}`}>
                        <CheckCircle2 className="w-3 h-3 shrink-0" />
                        {item.metric}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>


        {/* Experience as Test Suites */}
        <section className="py-24 relative overflow-hidden" id="experience">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center mb-16">
              <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                <Briefcase className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-black">{content.nav.experience}</h2>
              <p className="text-[#9068b8] font-mono text-xs mt-2">Source: quality_report_v2.0.json</p>
            </div>
            <div className="space-y-12">
              {content.experience.map((exp, idx) => (
                <div key={idx} className="relative pl-10 before:absolute before:left-[11px] before:top-2 before:h-full before:w-[2px] before:bg-[#e9d5ff] last:before:hidden">
                  <div className={`absolute left-0 top-1 h-6 w-6 rounded-full border-4 border-background-dark ${exp.current ? 'bg-primary animate-pulse' : 'bg-[#c4b5fd]'}`}></div>
                  <div className="space-y-4 p-6 rounded-2xl bg-[#f0e8fb] border border-[#ddd6fe] hover:border-primary/30 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                          <span className="text-[#9068b8] font-mono text-sm leading-none">{idx + 1}.</span>
                          {exp.role}
                        </h3>
                        <p className="text-primary font-bold text-sm">@ {exp.company}</p>
                      </div>
                      <StatusBadge type={exp.current ? 'success' : 'info'} label={exp.period} />
                    </div>
                    <p className="text-[#6b4fa0] leading-relaxed text-sm">
                      {exp.description}
                    </p>
                    <div className="pt-4 border-t border-[#ddd6fe]">
                      <p className="text-[10px] font-black uppercase tracking-wider text-[#6b4fa0] mb-3 flex items-center gap-2">
                        <ShieldCheck className="w-3 h-3" />
                        Key Deliverables / Assertions
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {exp.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-3 group">
                            <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 transition-colors ${exp.current ? 'text-primary' : 'text-[#9068b8]'}`} />
                            <span className="text-sm text-[#9068b8] group-hover:text-[#4a2d80] transition-colors leading-tight">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills as Toolkits */}
        <section className="py-24 bg-background-dark border-y border-[#ddd6fe]" id="skills">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <StatusBadge type="info" label="Technology Stack" />
              <h2 className="text-4xl font-black mt-4">{content.nav.skills}</h2>
              <p className="text-[#9068b8] mt-4 max-w-xl mx-auto">{content.skillsHeader.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8 }}
                  className="rounded-3xl bg-[#ede9fe] p-8 shadow-sm border border-[#ddd6fe] transition-all hover:border-primary/50 relative group"
                >
                  <div className={`h-14 w-14 rounded-2xl ${skill.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'} flex items-center justify-center mb-8 shadow-inner`}>
                    {skill.icon === 'Bot' && <Bot className="w-8 h-8" />}
                    {skill.icon === 'Search' && <Search className="w-8 h-8" />}
                    {skill.icon === 'Wrench' && <Wrench className="w-8 h-8" />}
                    {skill.icon === 'Brain' && <Brain className="w-8 h-8" />}
                  </div>
                  <h3 className="text-2xl font-bold mb-6">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {skill.items.map((item, iIdx) => (
                      <span
                        key={iIdx}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold tracking-tight ${skill.special ? 'bg-primary/5 text-primary border border-primary/20' : 'bg-[#e9d5ff] text-[#6b4fa0] border border-[#c4b5fd]'}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-bold">{content.education.title}</h2>
                <div className="space-y-4">
                  {content.education.items.map((edu, idx) => (
                    <div key={idx} className="p-6 rounded-xl border border-[#ddd6fe] hover:border-primary/50 transition-colors group">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{edu.title}</h4>
                          <p className="text-[#9068b8]">{edu.institution}</p>
                        </div>
                        <span className="text-sm font-medium opacity-60">{edu.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full max-w-md">
                <div className="relative rounded-3xl bg-gradient-to-br from-[#ede9fe] to-background-dark border border-primary/25 p-8 overflow-hidden">
                  {/* bg glows */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/10 blur-3xl rounded-full pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-36 h-36 bg-primary/10 blur-3xl rounded-full pointer-events-none"></div>

                  {/* header */}
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="h-12 w-12 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center">
                      <GraduationCap className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-lg leading-tight">{content.education.badge.title}</p>
                      <p className="text-[#9068b8] text-xs">{content.education.badge.subtitle}</p>
                    </div>
                  </div>

                  {/* stats row */}
                  <div className="grid grid-cols-3 gap-3 mb-6 relative z-10">
                    <div className="rounded-xl bg-primary/8 border border-primary/15 p-3 text-center">
                      <p className="text-2xl font-black text-primary">{content.certifications.items.length}+</p>
                      <p className="text-[10px] text-[#9068b8] uppercase tracking-wide mt-0.5">Certs</p>
                    </div>
                    <div className="rounded-xl bg-secondary/10 border border-secondary/20 p-3 text-center">
                      <p className="text-2xl font-black text-secondary">3+</p>
                      <p className="text-[10px] text-[#9068b8] uppercase tracking-wide mt-0.5">Anos QA</p>
                    </div>
                    <div className="rounded-xl bg-primary/8 border border-primary/15 p-3 text-center">
                      <p className="text-2xl font-black text-primary">5+</p>
                      <p className="text-[10px] text-[#9068b8] uppercase tracking-wide mt-0.5">Stacks</p>
                    </div>
                  </div>

                  {/* tech chips */}
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {["Playwright", "Appium", "Postman", "Docker", "Jest", "GitHub Actions", "SQL", "Jira"].map(tech => (
                      <span key={tech} className="px-3 py-1.5 rounded-lg bg-[#e9d5ff]/60 text-xs font-mono font-bold text-[#6b4fa0] border border-[#c4b5fd]/50">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* live status */}
                  <div className="flex items-center gap-2 mt-5 pt-4 border-t border-primary/10 relative z-10">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="text-xs font-mono text-primary/70">Aprendendo ativamente</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 relative overflow-hidden" id="certs">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center shadow-lg shadow-primary/10">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">{content.certifications.title}</h2>
            </div>
            <div className="h-[2px] w-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.certifications.items.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07 }}
                  whileHover={{ y: -4 }}
                  className="cert-card-glow relative p-6 rounded-2xl bg-gradient-to-br from-[#ede9fe] to-background-dark border border-primary/20 hover:border-primary/50 transition-all group overflow-hidden"
                >
                  {/* top shimmer bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* corner badge */}
                  <div className="absolute top-4 right-4 opacity-15 group-hover:opacity-40 transition-opacity">
                    <Verified className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex flex-col h-full justify-between gap-5">
                    <div className="space-y-2">
                      <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors mb-3">
                        <Award className="w-4 h-4 text-primary" />
                      </div>
                      <h4 className="font-bold text-base leading-snug group-hover:text-primary transition-colors pr-6">
                        {cert.title}
                      </h4>
                      <p className="text-[#9068b8] text-sm">{cert.issuer}</p>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-primary/10">
                      <span className="text-[11px] font-mono font-semibold text-primary/60 uppercase tracking-wider">{cert.date}</span>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-bold text-primary/70 hover:text-primary transition-colors"
                        >
                          Ver
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects as Automated Scenarios */}
        <section className="py-24 relative overflow-hidden qa-grid" id="projects">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f3e8ff] via-background-dark to-[#fdf4ff] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
              <div className="space-y-2">
                <StatusBadge type="info" label="Project Suite" />
                <h2 className="text-4xl font-black">{content.projects.title}</h2>
                <p className="text-[#9068b8] max-w-lg">{content.projects.subtitle}</p>
              </div>
              <a href={content.profile.github} className="group px-6 py-3 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 text-primary font-bold flex items-center gap-2 hover:from-primary/20 hover:to-secondary/20 hover:border-primary/50 transition-all">
                <Github className="w-5 h-5" />
                {content.projects.githubLink}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.projects.items.map((project, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -8 }}
                    className="group rounded-2xl overflow-hidden border border-[#ddd6fe] shadow-md hover:shadow-xl hover:shadow-primary/15 hover:border-primary/40 transition-all relative"
                  >
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-30"
                        aria-label={`View ${project.title} on GitHub`}
                      />
                    )}
                    {/* thumbnail */}
                    <div className="aspect-video overflow-hidden relative border-b border-[#ddd6fe]">
                      <div className="absolute inset-0 bg-primary/25 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center backdrop-blur-[2px]">
                        <div className="bg-primary text-[#faf5ff] px-6 py-3 rounded-full font-bold shadow-2xl scale-90 group-hover:scale-100 transition-transform flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          <span>Inspect Scenario</span>
                        </div>
                      </div>
                      <ProjectVisual title={project.title} image={project.image} />
                      <div className="absolute top-4 right-4 z-20">
                        <StatusBadge type="success" label="Passed" />
                      </div>
                    </div>

                    {/* card body */}
                    <div className={`p-8 bg-gradient-to-br ${isEven ? 'from-[#faf5ff] to-[#f3e8ff]' : 'from-[#fdf4ff] to-[#fce7f3]'} group-hover:to-[#ede9fe] transition-colors`}>
                      {/* scenario label */}
                      <div className="flex items-center gap-2 mb-5">
                        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border ${isEven ? 'bg-primary/8 border-primary/20' : 'bg-secondary/8 border-secondary/20'}`}>
                          <TerminalIcon className={`w-3.5 h-3.5 ${isEven ? 'text-primary' : 'text-secondary'}`} />
                          <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${isEven ? 'text-primary' : 'text-secondary'}`}>
                            Scenario _{idx + 1}
                          </span>
                        </div>
                      </div>

                      <h3 className={`text-2xl font-bold mb-3 transition-colors ${isEven ? 'group-hover:text-primary' : 'group-hover:text-secondary'}`}>
                        {project.title}
                      </h3>
                      <p className="text-[#6b4fa0] text-sm mb-7 leading-relaxed">
                        {project.description}
                      </p>

                      {/* tags */}
                      <div className="flex flex-wrap items-center gap-2">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                              tIdx % 2 === 0
                                ? 'bg-primary/8 text-primary border-primary/25'
                                : 'bg-secondary/8 text-secondary border-secondary/25'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-24" id="contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-black mb-6">{content.contact.title}</h2>
            <p className="text-[#9068b8] max-w-2xl mx-auto mb-12 text-lg">
              {content.contact.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href={`mailto:${content.profile.email}`}
                className="flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-[#faf5ff] font-bold hover:scale-105 transition-transform"
              >
                <Mail className="w-5 h-5" />
                {content.contact.emailBtn}
              </a>
              <a
                href={content.profile.linkedin}
                className="flex items-center gap-3 px-8 py-4 rounded-xl bg-[#e9d5ff] font-bold hover:bg-[#c4b5fd] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href={content.profile.github}
                className="flex items-center gap-3 px-8 py-4 rounded-xl bg-[#e9d5ff] font-bold hover:bg-[#c4b5fd] transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#ddd6fe] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-[#faf5ff] text-[10px] font-bold">
                {content.profile.initials}
              </div>
              <span className="text-sm font-semibold">© 2025 {content.profile.name}</span>
            </div>
            <div className="flex gap-8">
              <a href={content.profile.twitter} className="text-xs font-medium text-[#9068b8] hover:text-primary">Twitter</a>
              <a href={content.profile.behance} className="text-xs font-medium text-[#9068b8] hover:text-primary">Behance</a>
              <a href={content.profile.medium} className="text-xs font-medium text-[#9068b8] hover:text-primary">Medium</a>
            </div>
            <p className="text-xs text-[#6b4fa0]">{content.footer.tagline}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
