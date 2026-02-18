import { motion } from "framer-motion";
import { Wallet, Gift, Users, Code2 } from "lucide-react";

const reasons = [
  {
    icon: Wallet,
    title: "Servizio a consumo",
    description: "Siamo gli unici ad offrire il servizio senza vincoli di abbonamento o rinnovi automatici. Paghi a consumo con credito prepagato che dura 3 anni.",
  },
  {
    icon: Gift,
    title: "Ricariche con credito omaggio",
    description: "Più ricarichi e più risparmi. Puoi arrivare ad ottenere uno sconto del 55% per le firme. Il primo taglio parte da soli 25€.",
  },
  {
    icon: Users,
    title: "Utenti illimitati e credito centralizzato",
    description: "Nessun costo extra per la condivisione in azienda. Ognuno può avere le proprie credenziali, tutti attingono da un'unica gestione del credito.",
  },
  {
    icon: Code2,
    title: "Accesso gratuito alle API",
    description: "Collega il tuo gestionale al nostro motore di firma senza costi aggiuntivi. Puoi usare le API insieme all'interfaccia web.",
  },
];

export const WhyChooseSection = () => {
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
            Perché scegliere <span className="gradient-text">OTP Service?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Crediamo nelle cose semplici, trasparenti e di facile utilizzo. Siamo un'azienda italiana che opera sul territorio da più di 20 anni.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="liquid-glass-card p-8 flex gap-5"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
