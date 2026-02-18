export const Footer = () => {
  return (
    <footer className="relative py-8 px-4 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="liquid-glass rounded-2xl px-6 py-6 flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">energizzo</span>
            <span>|</span>
            <span>by <span className="font-semibold">UNVRS Labs</span></span>
          </div>
          <span>© {new Date().getFullYear()} UNVRS Labs S.r.l. — Tutti i diritti riservati</span>
        </div>
      </div>
    </footer>
  );
};
