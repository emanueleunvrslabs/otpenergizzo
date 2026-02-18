import { motion } from "framer-motion";
import { ArrowRight, FileSignature, Shield, Users } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="hero" aria-label="Firma Elettronica Semplice OTP" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen pt-32 pb-24 md:py-24">
          {/* Left Side */}
          <div className="text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6"
            >
              <span className="text-foreground">Firma Elettronica</span>
              <br />
              <span className="text-foreground">per aziende, </span>
              <span className="gradient-text">senza abbonamento</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8 leading-relaxed"
            >
              Fai firmare i documenti della tua azienda in modo semplice, veloce e con valore legale.{" "}
              <span className="text-foreground font-semibold">Senza abbonamento e vincoli.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-4"
            >
              <a href="https://app.otpservice.io/sign-up?locale=it" target="_blank" rel="noopener noreferrer">
                <motion.span
                  className="px-8 py-4 bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground font-semibold rounded-full transition-all duration-300 shadow-lg shadow-primary/30 flex items-center gap-2 inline-flex"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Attiva la prova gratuita
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-muted-foreground text-sm italic mb-8"
            >
              Attivazione istantanea, non richiede carta di credito.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="flex items-center gap-2 px-4 py-2 rounded-full liquid-glass text-sm text-muted-foreground">
                <FileSignature className="w-4 h-4 text-primary" />
                Firma Elettronica Semplice
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-full liquid-glass text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-primary" />
                Mercato Energetico
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-full liquid-glass text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-primary" />
                Utenti Illimitati
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-full liquid-glass text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                Valore Legale
              </span>
            </motion.div>
          </div>

          {/* Right Side - Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div className="relative w-full max-w-md">
              <div
                className="relative rounded-[2rem] p-6 md:p-8 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, hsl(0 0% 100% / 0.12) 0%, hsl(0 0% 100% / 0.06) 100%)',
                  backdropFilter: 'blur(40px)',
                  WebkitBackdropFilter: 'blur(40px)',
                  border: '1px solid hsl(0 0% 100% / 0.25)',
                  boxShadow: '0 32px 64px -12px hsl(220 30% 10% / 0.4), inset 0 1px 0 0 hsl(0 0% 100% / 0.15)',
                }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-32 h-32 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at center, hsl(158 64% 50% / 0.6) 0%, hsl(158 64% 50% / 0.3) 30%, transparent 70%)',
                    filter: 'blur(8px)',
                  }}
                  animate={{
                    x: [-20, 80, -20],
                    y: [-20, 40, -20],
                    opacity: [0.4, 0.8, 0.4],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="relative z-10 space-y-6">
                  <div className="text-center">
                    <span className="text-lg font-semibold text-foreground/90">OTP by Energizzo</span>
                  </div>

                  {/* Pricing highlight */}
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Firma Elettronica Semplice da</p>
                    <div className="relative inline-block">
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-primary/20 blur-2xl"
                        animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.9, 1.1, 0.9] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <p className="relative text-5xl md:text-6xl font-extrabold text-foreground tracking-tight">
                        €1,00
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">per documento · firmatari illimitati</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {[
                      { label: "Nessun abbonamento", sub: "Paghi solo a consumo" },
                      { label: "API gratuite", sub: "Integra con i tuoi gestionali" },
                      { label: "Utenti illimitati", sub: "Credito centralizzato" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 + i * 0.15 }}
                        className="flex items-center gap-4 p-3 rounded-2xl"
                        style={{
                          background: 'linear-gradient(135deg, hsl(0 0% 100% / 0.95) 0%, hsl(0 0% 100% / 0.9) 100%)',
                          boxShadow: '0 4px 24px -4px hsl(220 30% 10% / 0.15)',
                          border: '1px solid hsl(0 0% 90% / 0.8)',
                        }}
                      >
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-slate-900 text-sm">{item.label}</p>
                          <p className="text-xs text-slate-500">{item.sub}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
