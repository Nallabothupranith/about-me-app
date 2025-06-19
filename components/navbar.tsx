import Link from "next/link";
import { AuthButton } from "@/components/auth-button";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/About" },
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 border-b bg-card/80 backdrop-blur sticky top-0 z-10">
      <div className="flex items-center gap-8">
        <span className="font-bold text-lg tracking-tight">AboutMe</span>
        <div className="flex gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <AuthButton />
      </div>
    </nav>
  );
}
