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

const tiers = [
  { ricarica: "€ 25", omaggio: "-", costo: "€ 1,00", sconto: "-" },
  { ricarica: "€ 50", omaggio: "€ 3", costo: "€ 0,86", sconto: "-6%" },
  { ricarica: "€ 100", omaggio: "€ 10", costo: "€ 0,82", sconto: "-10%" },
  { ricarica: "€ 250", omaggio: "€ 38", costo: "€ 0,78", sconto: "-15%" },
  { ricarica: "€ 500", omaggio: "€ 125", costo: "€ 0,72", sconto: "-25%" },
  { ricarica: "€ 1.000", omaggio: "€ 300", costo: "€ 0,69", sconto: "-30%" },
  { ricarica: "€ 2.500", omaggio: "€ 875", costo: "€ 0,67", sconto: "-35%" },
  { ricarica: "€ 5.000", omaggio: "€ 2.250", costo: "€ 0,62", sconto: "-45%" },
  { ricarica: "€ 10.000", omaggio: "€ 5.500", costo: "€ 0,58", sconto: "-55%" },
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

        {/* Tiers table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-2">Più ricarichi, più risparmi</h3>
          <p className="text-muted-foreground text-center text-sm mb-8">Il credito dura 3 anni e la scadenza si rinnova ad ogni ricarica.</p>

          {/* Desktop table */}
          <div className="liquid-glass-card overflow-hidden hidden md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-muted-foreground font-medium">Ricarica</th>
                  <th className="text-left p-4 text-muted-foreground font-medium">Credito omaggio</th>
                  <th className="text-left p-4 text-muted-foreground font-medium">Costo FES</th>
                  <th className="text-left p-4 text-muted-foreground font-medium">Sconto</th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((tier) => (
                  <tr key={tier.ricarica} className="border-b border-border/50 last:border-0">
                    <td className="p-4 text-foreground font-medium">{tier.ricarica}</td>
                    <td className="p-4 text-muted-foreground">{tier.omaggio}</td>
                    <td className="p-4 text-foreground">{tier.costo}/firma</td>
                    <td className="p-4 text-primary font-bold">{tier.sconto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {tiers.map((tier) => (
              <div key={tier.ricarica} className="liquid-glass-card-sm p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-foreground font-bold text-base">Ricarica {tier.ricarica}</span>
                  {tier.sconto !== "-" && (
                    <span className="text-primary font-bold text-sm bg-primary/10 px-2 py-0.5 rounded-full">{tier.sconto}</span>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-muted-foreground text-xs">Credito omaggio</p>
                    <p className="text-foreground font-medium">{tier.omaggio}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Costo FES</p>
                    <p className="text-foreground font-medium">{tier.costo}/firma</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

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
