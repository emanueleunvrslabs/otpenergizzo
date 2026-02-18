import { Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-8 px-2 sm:px-4 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="liquid-glass rounded-2xl px-6 py-6 flex flex-col items-center justify-center gap-3 text-sm text-muted-foreground text-center">
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">energizzo</span>
            <span>|</span>
            <span>by <span className="font-semibold">UNVRS Labs</span></span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/energizzo.it?igsh=MWduN3hrdDEzZTUwbQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Energizzo"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/111630917/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Energizzo"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <span className="text-xs">© {new Date().getFullYear()} UNVRS Labs S.r.l. — Tutti i diritti riservati</span>
        </div>
      </div>
    </footer>
  );
};
