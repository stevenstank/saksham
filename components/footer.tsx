import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

const socialLinks = [
  { name: "GitHub", href: "https://github.com/stevenstank", icon: FaGithub },
  { name: "LinkedIn", href: "https://linkedin.com/in/stevenstank775", icon: FaLinkedin },
  { name: "X", href: "https://x.com/stevenstank", icon: FaXTwitter },
  { name: "Mail", href: "mailto:stevenstank775@gmail.com", icon: Mail },
];

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("border-t border-zinc-900 py-12", className)}>
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-foreground-secondary">
            © {new Date().getFullYear()} Saksham. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-secondary hover:text-foreground transition-colors"
                  aria-label={link.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
