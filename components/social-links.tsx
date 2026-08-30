import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  showLabels?: boolean;
}

const socialLinks = [
  { name: "GitHub", href: "https://github.com/stevenstank", icon: FaGithub },
  { name: "LinkedIn", href: "https://linkedin.com/in/stevenstank/", icon: FaLinkedin },
  { name: "X", href: "https://x.com/stevenstank775", icon: FaXTwitter },
  { name: "Mail", href: "mailto:stevenstank775@gmail.com", icon: Mail },
];

export function SocialLinks({ className, showLabels = false }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-6", className)}>
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
            className="flex items-center gap-3 text-foreground-secondary hover:text-foreground transition-all duration-300 hover:-translate-y-1 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent rounded p-2"
            aria-label={link.name}
            style={{ textShadow: '0 0 8px rgba(250, 250, 250, 0.1)' }}
          >
            <Icon className="h-6 w-6" aria-hidden="true" />
            {showLabels && <span className="text-base">{link.name}</span>}
          </a>
        );
      })}
    </div>
  );
}
