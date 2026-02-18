import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const prices = [
  { label: "Firma elettronica semplice (FES)", price: "€ 1,00", note: "punti firma e firmatari illimitati" },
  { label: "OTP via WhatsApp", price: "Incluso", highlight: true },
  { label: "⚡️ Utenze aggiuntive", price: "Gratis", highlight: true },
  { label: "⚡️ Utilizzo API", price: "Gratis", highlight: true },
  { label: "⚡️ Disponibilità documento firmato per 1 anno", price: "Gratis", note: "in PROMOZIONE", highlight: true },
  { label: "Conservazione digitale a norma del file di prova", price: "€ 0,20", note: "opzionale, per FEA obbligatorio 20 anni" },
  { label: "Conservazione digitale a norma file di prova + documento", price: "€ 0,50", note: "opzionale" },
];


export const PricingSection = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="gradient-text">Tariffe</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Prezzi chiari e trasparenti. Per documento, con punti firma e firmatari illimitati.
            Sconti fino al 55% in base al taglio di ricarica.
          </p>
        </motion.div>

        {/* Price list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="liquid-glass-card p-6 md:p-8 mb-12"
        >
          <div className="space-y-0 divide-y divide-border">
            {prices.map((item) => (
              <div key={item.label} className="flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-1 sm:gap-4">
                <div className="min-w-0">
                  <p className="text-foreground font-medium text-xs sm:text-sm">{item.label}</p>
                  {item.note && <p className="text-muted-foreground text-xs mt-0.5">{item.note}</p>}
                </div>
                <span className={`text-sm font-bold whitespace-nowrap ${item.highlight ? "text-primary" : "text-foreground"}`}>
                  {item.price}
                </span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-xs mt-4 italic">Prezzi IVA esclusa, ricarica minima 25€.</p>
        </motion.div>

        {/* Tiers table removed */}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="https://app.otpservice.io/sign-up?locale=it" target="_blank" rel="noopener noreferrer">
            <motion.span
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground font-semibold rounded-full shadow-lg shadow-primary/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Attiva la prova gratuita
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
