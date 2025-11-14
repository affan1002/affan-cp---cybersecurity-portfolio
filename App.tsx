import { DATA } from './constants';
import { GithubIcon, LinkedinIcon, MailIcon, LinkIcon, DownloadIcon } from './components/Icons';
import { Section } from './components/Section';

const TechBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
    {children}
  </div>
);

const App: React.FC = () => {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">

        {/* Left Sidebar */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">{DATA.profile.name}</h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">{DATA.profile.title}</h2>
            <p className="mt-4 max-w-xs leading-normal">{DATA.profile.summary}</p>

            <div className="mt-8 flex items-center" aria-label="Social media">
              <a href={`mailto:${DATA.profile.email}`} className="mr-4 text-slate-400 hover:text-teal-300 transition-colors" aria-label="Email"><MailIcon className="h-6 w-6" /></a>
              <a href={DATA.profile.socials.github} target="_blank" rel="noopener noreferrer" className="mr-4 text-slate-400 hover:text-teal-300 transition-colors" aria-label="GitHub"><GithubIcon className="h-6 w-6" /></a>
              <a href={DATA.profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="mr-4 text-slate-400 hover:text-teal-300 transition-colors" aria-label="LinkedIn"><LinkedinIcon className="h-6 w-6" /></a>
              <a href="/Affan_CP_CV.pdf" download="Affan_CP_CV.pdf" className="text-slate-400 hover:text-teal-300 transition-colors" aria-label="Download CV">
                <DownloadIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          <footer className="text-sm text-slate-500 mt-8">
            {new Date().getFullYear()} {DATA.profile.name}. All rights reserved.
          </footer>
        </header>

        {/* Right Content */}
        <main className="pt-24 lg:w-1/2 lg:py-24">

          <Section title="Experience">
            <div className="flex flex-col gap-8">
              {DATA.experience.map((exp, index) => (
                <article key={index} className="relative group transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 shrink-0 sm:w-28">{exp.period}</header>
                    <div className="z-10">
                      <h3 className="font-medium leading-snug text-slate-200">{exp.role} · <span className="inline-block">{exp.company}</span></h3>
                      <ul className="mt-2 list-disc list-inside text-sm space-y-1">
                        {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section title="Projects">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {DATA.projects.map((project, index) => (
                <article key={index} className="relative group transition-all">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 relative flex flex-col h-full p-4">
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-slate-200">{project.title}</h3>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors" aria-label="Project Link"><LinkIcon className="h-5 w-5" /></a>
                      </div>
                      <p className="text-sm text-slate-400 mb-4">{project.description}</p>
                    </div>
                    <ul className="flex flex-wrap gap-2 mt-auto">
                      {project.tools.map((tool, i) => <li key={i}><TechBadge>{tool}</TechBadge></li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section title="Skills">
            <div className="space-y-6">
              {DATA.skills.map((skillCategory) => (
                <div key={skillCategory.category}>
                  <h3 className="text-md font-medium text-slate-200 mb-2">{skillCategory.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((item, i) => <TechBadge key={i}>{item}</TechBadge>)}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Education">
            <article className="relative group transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 relative flex items-start gap-4 p-4">
                <div className="shrink-0">
                  <img src="/lpu-logo.svg" alt="Lovely Professional University Logo" className="h-16 w-16 object-contain rounded-full" />
                </div>
                <div>
                  <h3 className="font-medium text-slate-200">{DATA.education.institution}</h3>
                  <p className="text-teal-300">{DATA.education.degree}</p>
                  <p className="text-sm text-slate-500 mt-1">{DATA.education.period}</p>
                  {DATA.education.gpa && <p className="text-sm text-slate-400 mt-1">GPA: {DATA.education.gpa}</p>}
                </div>
              </div>
            </article>
          </Section>
        </main>
      </div>
    </div>
  );
};

export default App;