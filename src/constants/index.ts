import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

export const SOCIAL_LINKS = [
  { 
    icon: Github, 
    href: "https://github.com/Chandra-thanaya", 
    label: "GitHub" 
  },
  { 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/chandra-thanaya-82a184287/", 
    label: "LinkedIn" 
  },
  { 
    icon: Instagram, 
    href: "https://www.instagram.com/jagermario_/", 
    label: "Instagram" 
  },
  { 
    icon: Twitter, 
    href: "https://x.com/chandra_thanaya", 
    label: "Twitter" 
  },
] as const;

export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export const SECTIONS = ["hero", "about", "skills", "experience", "projects", "contact"] as const;

export const EMAIL = "chandrathanaya0@gmail.com";

export const MOBILE_BREAKPOINT = 768;
