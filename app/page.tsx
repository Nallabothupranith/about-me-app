"use client";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SOCIALS = [
  {
    name: "GitHub",
    href: "https://github.com/Nallabothupranith",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pranith-kumar-4b72a92b8/",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
      </svg>
    ),
  },
];

const Page = () => {
  const router = useRouter();
  return (
    <main className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-white via-[#e6e9fa] to-[#bfc7f7]">
      {/* Navbar is handled separately */}
      <section className="flex-1 flex flex-col md:flex-row items-center justify-center px-4 py-16 gap-12">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-2">
            Passionate
            <br />
            <span className="text-blue-700"> Developer</span>
          </h1>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
            Building Modern Applications & Solving Problems.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            Iam a developer who loves creating applications and tackling
            challenging problems. I enjoy working with new technologies and
            building solutions that make a difference.
          </p>
          <button
            className="bg-blue-700 hover:bg-blue-800 focus:bg-blue-900 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition-all mb-10 outline-none ring-2 ring-transparent hover:ring-blue-400 focus:ring-blue-600 focus:scale-105 hover:scale-105"
            onClick={() => router.push("/contact")}
            tabIndex={0}
          >
            Hire me
          </button>
          <div className="flex gap-6 mt-2">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 hover:text-blue-700 transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="rounded-[2.5rem] border-8 border-blue-700 shadow-2xl p-2 bg-white/60 transition-transform duration-300 hover:scale-105 hover:shadow-blue-300/60">
            <Image
              src="/pranith.jpg"
              alt="Pranith photo"
              width={288}
              height={360}
              className="w-72 h-80 object-cover rounded-[2rem] transition-transform duration-300"
              priority
            />
          </div>
          <div className="mt-6 text-center text-lg font-semibold text-gray-800">
            Pranith Kumar Nallabothu
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default Page;
