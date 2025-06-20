import { Footer } from "@/components/footer";
import { ZoomableImage } from "@/components/zoomable-image";

const SKILLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Supabase",
  "PostgreSQL",
  "Git",
  "Figma",
];

const SOCIALS = [
  {
    name: "GitHub",
    href: "https://github.com/your-github",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/your-linkedin",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/your-twitter",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.39 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.514 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
      </svg>
    ),
  },
];

const Page = () => {
  return (
    <main className="min-h-screen bg-[#181a20] flex flex-col font-sans">
      {/* Hero Section - Two columns */}
      <section className="flex-1 flex flex-col justify-center px-2 sm:px-4 md:px-8 py-12">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-0">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col items-start md:items-start text-left gap-6 md:pr-12">
            <span className="uppercase tracking-widest text-sm text-[#b3b8c5] font-semibold mb-2">
              Welcome to my world
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Hi, I&apos;m <span className="text-pink-500">Pranith</span>
              <br />
              <span className="text-white">
                a <span className="text-blue-400">Developer</span>.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#b3b8c5] max-w-xl">
              I use animation as a third dimension by which to simplify
              experiences and guiding through each and every interaction.
              I&apos;m not adding motion just to spruce things up, but doing it
              in ways that matter.
            </p>
            {/* Socials */}
            <div className="flex gap-4 mt-2">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#23262f] hover:bg-pink-500 p-3 text-[#b3b8c5] hover:text-white shadow transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center items-center">
            <ZoomableImage
              src="/pranith.jpg"
              alt="Pranith photo"
              width={288}
              height={288}
              className="w-72 h-72 rounded-2xl object-cover shadow-2xl border-4 border-[#23262f] bg-[#23262f]"
            />
          </div>
        </div>
      </section>
      {/* Skills Section (GitHub repo tags style) */}
      <section className="w-full flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 py-10">
        <div className="w-full max-w-2xl bg-[#161b22] border border-[#30363d] rounded-2xl shadow-lg flex flex-col items-center py-10 px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-mono">
            My Skills
          </h2>
          <p className="text-base sm:text-lg text-[#c9d1d9] mb-8 max-w-2xl text-center font-sans">
            Here are some of the technologies and tools I use to build modern,
            scalable web applications.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="px-4 py-1.5 rounded-full bg-[#21262d] border border-[#30363d] text-[#2f81f7] font-mono text-sm shadow-sm hover:bg-[#2f81f7] hover:text-white transition-all duration-150 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default Page;
