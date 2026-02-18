import { Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-8 px-2 sm:px-4 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="liquid-glass rounded-2xl px-6 py-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">OTP</span>
            <span className="text-muted-foreground">by</span>
            <span className="font-semibold">energizzo</span>
          </div>
          <span className="text-xs">© {new Date().getFullYear()} Tutti i diritti riservati</span>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/energizzo.it?igsh=MWduN3hrdDEzZTUwbQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram Energizzo" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/company/111630917/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Energizzo" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
