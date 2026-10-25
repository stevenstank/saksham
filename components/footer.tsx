import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

const socialLinks = [
  { name: "GitHub", href: "https://github.com/stevenstank", icon: FaGithub },
  { name: "LinkedIn", href: "https://linkedin.com/in/stevenstank", icon: FaLinkedin },
  { name: "X", href: "https://x.com/stevenstank775", icon: FaXTwitter },
  { name: "Mail", href: "mailto:stevenstank775@gmail.com", icon: Mail },
];

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("border-t border-zinc-900 py-8 sm:py-12", className)}>
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <p className="text-sm text-foreground-secondary">
            © {new Date().getFullYear()} Saksham. All rights reserved.
          </p>
          <div className="flex items-center gap-2 sm:gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              // A mailto: is handed to the mail client, so it must not open a tab.
              const isMail = link.href.startsWith('mailto:');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={isMail ? undefined : "_blank"}
                  rel={isMail ? undefined : "noopener noreferrer"}
                  className="p-2.5 rounded text-foreground-secondary hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
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
