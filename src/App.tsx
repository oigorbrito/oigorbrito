import React from 'react';
import { ExternalLink, Github, Linkedin, LockKeyhole } from 'lucide-react';
import { FEATURED_PROJECTS, OTHER_PROJECTS } from './data/projects';
import { PHILOSOPHY_PRINCIPLES, STACK_DATA } from './data/stack';
import { Project } from './types';

const ProjectCard: React.FC<{ project: Project; compact?: boolean }> = ({ project, compact = false }) => {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-2xl" aria-hidden>{project.icon}</div>
          <h3 className="mt-2 text-xl font-bold text-white">{project.name}</h3>
          <p className="mt-1 font-mono text-xs text-cyan-400">{project.subtitle}</p>
        </div>
        <span className="rounded-full border border-slate-700 bg-slate-950 px-2.5 py-1 text-[11px] font-mono text-slate-400">
          {project.category}
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-300">{project.description}</p>

      {!compact && (
        <>
          <div className="mt-5">
            <p className="mb-2 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
              Engineering focus
            </p>
            <ul className="grid gap-1.5 text-sm text-slate-300 sm:grid-cols-2">
              {project.engineeringFocus.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-cyan-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 space-y-3">
            {project.architectureHighlights.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
                <div className="flex flex-wrap items-center gap-2">
                  <strong className="text-sm text-slate-100">{item.title}</strong>
                  {item.badge && (
                    <span className="rounded border border-cyan-900 bg-cyan-950/40 px-1.5 py-0.5 text-[10px] font-mono text-cyan-400">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-xs leading-5 text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <span key={tech} className="rounded-md border border-slate-800 bg-slate-950 px-2 py-1 text-[11px] font-mono text-slate-400">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-800 pt-4">
        <span className="text-xs text-slate-500">{project.status}</span>
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300"
          >
            Repository <ExternalLink className="h-3.5 w-3.5" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500">
            <LockKeyhole className="h-3.5 w-3.5" /> Private source
          </span>
        )}
      </div>
    </article>
  );
};

const App: React.FC = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-left">
            <div className="font-mono text-sm font-bold text-white">Igor Brito</div>
            <div className="text-xs text-slate-500">Backend & AI Systems Engineer</div>
          </button>

          <nav className="hidden items-center gap-4 text-xs font-mono text-slate-400 md:flex">
            <button onClick={() => scrollTo('projects')} className="hover:text-cyan-400">Work</button>
            <button onClick={() => scrollTo('approach')} className="hover:text-cyan-400">Approach</button>
            <button onClick={() => scrollTo('stack')} className="hover:text-cyan-400">Stack</button>
          </nav>

          <div className="flex items-center gap-2">
            <a href="https://github.com/oigorbrito" target="_blank" rel="noreferrer" className="rounded-md p-2 text-slate-400 hover:bg-slate-900 hover:text-white" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/euigorbrito/" target="_blank" rel="noreferrer" className="rounded-md p-2 text-slate-400 hover:bg-slate-900 hover:text-sky-400" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="border-b border-slate-800 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-400">Backend · AI Systems · Evidence-Driven Engineering</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Building reliable backend products and AI systems.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              My work spans .NET product systems, PostgreSQL concurrency, RAG, knowledge pipelines, AI-agent infrastructure, and empirical evaluation. I try to keep claims no stronger than the evidence that supports them.
            </p>
            <div className="mt-8 flex flex-wrap gap-2 font-mono text-xs">
              {['C# / .NET', 'Python', 'PostgreSQL', 'FastAPI', 'RAG', 'AI Systems', 'Evaluation'].map((item) => (
                <span key={item} className="rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-slate-300">{item}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => scrollTo('projects')} className="rounded-lg bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-400">
                View engineering work
              </button>
              <a href="https://github.com/oigorbrito" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-slate-200 hover:border-slate-600">
                GitHub profile
              </a>
            </div>
          </div>
        </section>

        <section id="projects" className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">Featured engineering</p>
              <h2 className="mt-2 text-3xl font-bold text-white">Projects with distinct technical signals</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                The portfolio is intentionally hierarchical: product/backend engineering, AI systems, RAG, and experimental agent infrastructure are shown as different kinds of evidence rather than one undifferentiated project list.
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {FEATURED_PROJECTS.map((project) => <ProjectCard key={project.id} project={project} />)}
            </div>

            <div className="mt-14">
              <h2 className="text-2xl font-bold text-white">Additional engineering</h2>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {OTHER_PROJECTS.map((project) => <ProjectCard key={project.id} project={project} compact />)}
              </div>
            </div>
          </div>
        </section>

        <section id="approach" className="border-y border-slate-800 bg-slate-900/30 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">Engineering approach</p>
            <h2 className="mt-2 text-3xl font-bold text-white">Architecture stays subordinate to evidence.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {PHILOSOPHY_PRINCIPLES.map((principle) => (
                <div key={principle.title} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">{principle.tag}</div>
                  <h3 className="mt-2 text-lg font-bold text-white">{principle.title}</h3>
                  <code className="mt-3 block rounded-lg border border-slate-800 bg-slate-900 p-3 text-xs text-slate-300">{principle.equation}</code>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">Stack</p>
            <h2 className="mt-2 text-3xl font-bold text-white">Tools backed by project evidence</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {STACK_DATA.map((category) => (
                <div key={category.title} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-bold text-white">{category.title}</h3>
                    <span className="rounded border border-slate-700 px-2 py-1 text-[10px] font-mono text-slate-500">{category.badge}</span>
                  </div>
                  <div className="mt-4 space-y-4">
                    {category.items.map((item) => (
                      <div key={item.name}>
                        <div className="flex items-baseline justify-between gap-3">
                          <strong className="text-sm text-slate-200">{item.name}</strong>
                          <span className="text-[10px] font-mono text-cyan-500">{item.level}</span>
                        </div>
                        <p className="mt-1 text-xs leading-5 text-slate-500">{item.details}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 px-4 py-8 text-center text-xs text-slate-500">
        <div className="mx-auto max-w-6xl">
          <p>Igor Brito · Backend & AI Systems Engineer</p>
          <p className="mt-1 font-mono">IMPLEMENTED != EXECUTED != VERIFIED != ACCEPTED != PROMOTED</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
