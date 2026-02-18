import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";

export const EnergizzoCard = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="liquid-glass-card-lg p-10 md:p-16 text-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, hsl(158 64% 42% / 0.15) 0%, hsl(0 0% 100% / 0.08) 50%, hsl(0 0% 100% / 0.04) 100%)',
            border: '1px solid hsl(158 64% 42% / 0.25)',
          }}
        >
          {/* Decorative glow */}
          <div
            className="absolute inset-0 opacity-60"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, hsl(158 64% 42% / 0.2) 0%, transparent 50%)',
            }}
          />

          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass text-sm text-primary font-medium mb-6"
            >
              <Zap className="w-4 h-4" />
              Powered by Energizzo
            </motion.div>

            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              Dispacciamento è un servizio offerto da{" "}
              <span className="gradient-text">Energizzo</span>
            </motion.h2>

            <motion.p
              className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              I clienti Energizzo hanno la gestione del dispacciamento già integrata nel software. 
              Analisi, ottimizzazione e monitoraggio, tutto in un'unica piattaforma.
            </motion.p>

            <motion.a
              href="https://www.energizzo.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground font-semibold rounded-full transition-all duration-300 shadow-lg shadow-primary/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Scopri Energizzo
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
