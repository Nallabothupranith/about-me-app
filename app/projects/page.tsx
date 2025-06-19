const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A modern, responsive portfolio website to showcase my skills, experience, and blog articles. Built with Next.js, Tailwind CSS, and Supabase.",
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    link: "https://your-portfolio.com",
  },
  {
    title: "Task Manager App",
    description:
      "A full-featured task management app with real-time collaboration, drag-and-drop, and notifications.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "https://your-taskmanager.com",
  },
  {
    title: "E-commerce Store",
    description:
      "A scalable e-commerce platform with product search, cart, checkout, and admin dashboard.",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    link: "https://your-store.com",
  },
  {
    title: "Blog Platform",
    description:
      "A markdown-powered blog platform with authentication, comments, and tag-based search.",
    tech: ["Next.js", "Supabase", "MDX"],
    link: "https://your-blog.com",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900 p-2 sm:p-4 md:p-8">
      <section className="w-full max-w-6xl flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-blue-700 dark:text-blue-300 tracking-tight drop-shadow-lg font-sans">
          Projects
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl">
          Here are some of my featured projects. Explore the code, try the live
          demos, and see what I&apos;ve been building!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full px-1 sm:px-0">
          {projects.map((project, idx) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/90 dark:bg-white/10 backdrop-blur-lg border border-blue-100 dark:border-blue-800 rounded-2xl shadow-xl transition-all duration-150 p-5 sm:p-7 flex flex-col justify-between h-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-400 animate-fade-in hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-400 hover:ring-2 hover:ring-blue-200 dark:hover:ring-blue-500 hover:z-10"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-100/30 via-transparent to-blue-200/10 dark:from-blue-900/30 dark:to-blue-800/10 opacity-80 group-hover:opacity-100 transition-opacity duration-150" />
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-blue-700 dark:text-blue-200 mb-3 font-sans tracking-tight drop-shadow-sm">
                  {project.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-5 min-h-[60px] text-base leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-blue-100/80 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200 rounded px-2 py-0.5 text-xs sm:text-sm font-medium shadow-sm border border-blue-200 dark:border-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <span className="relative z-10 mt-auto inline-block text-center px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow-lg transition-all duration-150 group-hover:scale-110 group-hover:shadow-blue-400/40 group-hover:bg-blue-700 text-base sm:text-lg">
                View Project
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
