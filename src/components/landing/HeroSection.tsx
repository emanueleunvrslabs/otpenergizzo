import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, BarChart3, Clock, TrendingDown, Zap, ChevronRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen pt-32 pb-24 md:py-24">
          {/* Left Side - Text Content */}
          <div className="text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6"
            >
              <span className="text-foreground">IL DISPACCIAMENTO</span>
              <br />
              <span className="gradient-text">INTELLIGENTE</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-muted-foreground text-lg md:text-xl max-w-xl mb-6 leading-relaxed"
            >
              Il dispacciamento è il servizio che garantisce l'equilibrio tra domanda e offerta 
              di energia elettrica sulla rete nazionale. Gestito da Terna, coordina in tempo reale 
              la produzione, il trasporto e la distribuzione dell'energia, assicurando che ogni kilowattora 
              acquistato arrivi dove serve, quando serve.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-muted-foreground text-base max-w-xl mb-8 leading-relaxed"
            >
              Ottimizzare i costi di dispacciamento significa ridurre gli oneri in bolletta 
              legati a sbilanciamenti, uplift e corrispettivi di sistema — voci spesso trascurate 
              che incidono significativamente sul costo finale dell'energia per gli operatori.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-8"
            >
              <Link to="/dispacciamento">
                <motion.span
                  className="px-8 py-4 bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground font-semibold rounded-full transition-all duration-300 shadow-lg shadow-primary/30 flex items-center gap-2 inline-flex"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Scopri di più
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="flex items-center gap-2 px-4 py-2 rounded-full liquid-glass text-sm text-muted-foreground">
                <BarChart3 className="w-4 h-4 text-primary" />
                Analisi Sbilanciamenti
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-full liquid-glass text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                Monitoraggio Real-time
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-full liquid-glass text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                ARERA Compliant
              </span>
            </motion.div>
          </div>

          {/* Right Side - Liquid Glass Card */}
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
                {/* Animated border glow */}
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

                {/* Glass shine */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-[2rem]"
                  style={{
                    background: 'linear-gradient(135deg, hsl(0 0% 100% / 0.08) 0%, transparent 60%)',
                  }}
                />

                {/* Logo */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-center mb-4 relative z-10"
                >
                  <span className="text-lg font-semibold text-foreground/90">Dispacciamento</span>
                </motion.div>

                {/* Main stat */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center mb-8 relative z-10"
                >
                  <div className="relative inline-block">
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-primary/20 blur-2xl"
                      animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.9, 1.1, 0.9] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <p className="relative text-5xl md:text-6xl font-extrabold text-foreground tracking-tight">
                      -18%
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Riduzione costi medi di dispacciamento</p>
                </motion.div>

                {/* Info rows */}
                <div className="space-y-3 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="flex items-center gap-4 p-4 rounded-2xl"
                    style={{
                      background: 'linear-gradient(135deg, hsl(0 0% 100% / 0.95) 0%, hsl(0 0% 100% / 0.9) 100%)',
                      boxShadow: '0 4px 24px -4px hsl(220 30% 10% / 0.15)',
                      border: '1px solid hsl(0 0% 90% / 0.8)',
                    }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                      <TrendingDown className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-900 text-sm">Sbilanciamenti</p>
                      <p className="text-sm text-slate-500">
                        Ottimizzazione <span className="text-emerald-600 font-semibold">automatica</span>
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.15 }}
                    className="flex items-center gap-4 p-4 rounded-2xl"
                    style={{
                      background: 'linear-gradient(135deg, hsl(0 0% 100% / 0.95) 0%, hsl(0 0% 100% / 0.9) 100%)',
                      boxShadow: '0 4px 24px -4px hsl(220 30% 10% / 0.15)',
                      border: '1px solid hsl(0 0% 90% / 0.8)',
                    }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-900 text-sm">Uplift & Corrispettivi</p>
                      <p className="text-sm text-slate-500">
                        Monitoraggio <span className="font-semibold text-slate-900">real-time</span>
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  </motion.div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
