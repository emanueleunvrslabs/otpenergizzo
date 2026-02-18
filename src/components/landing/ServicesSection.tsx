import { motion } from "framer-motion";
import { CreditCard, Code2, Users } from "lucide-react";

const services = [
  {
    icon: CreditCard,
    title: "Nessun abbonamento",
    description: "Servizio a consumo senza vincoli di abbonamento o rinnovi automatici. Prezzi chiari e trasparenti.",
  },
  {
    icon: Code2,
    title: "Accesso API gratuito",
    description: "Se vuoi integrare la nostra soluzione di firma nel tuo gestionale, rendiamo disponibile gratuitamente l'accesso alle nostre API.",
  },
  {
    icon: Users,
    title: "Utenti illimitati",
    description: "Nessun costo per attivare utenze aggiuntive e credito centralizzato tra tutti i tuoi utenti.",
  },
];

export const ServicesSection = () => {
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
            I <span className="gradient-text">servizi</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Firma Elettronica Semplice (FES) con verifica OTP, perfetta per il mercato energetico.
            Ideale per far firmare contratti di energia e gas in modo semplice, veloce e con valore legale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="liquid-glass-card p-8 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-5">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
