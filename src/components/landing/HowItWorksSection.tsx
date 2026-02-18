import { motion } from "framer-motion";

const senderSteps = [
  "Carica il file del contratto da firmare",
  "Inserisci i dati delle persone alle quali è richiesta la firma",
  "Inserisci i punti firma nel documento",
];

const signerSteps = [
  "Il firmatario riceve il link via email con il documento da firmare",
  "Accetta i punti firma apponendo una semplice spunta",
  "Conferma tramite OTP: un codice inviato su WhatsApp",
  "Riceve il PDF firmato e un codice per controllare i dettagli della firma",
];

export const HowItWorksSection = () => {
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
            Come <span className="gradient-text">funziona?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Paghi solo per il documento firmato, a prescindere dal numero di firme e firmatari.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="liquid-glass-card p-8"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">Per chi fa firmare</h3>
            <ol className="space-y-4">
              {senderSteps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary/20 text-primary font-bold text-sm flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-muted-foreground text-sm pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="liquid-glass-card p-8"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">Per chi firma</h3>
            <ol className="space-y-4">
              {signerSteps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary/20 text-primary font-bold text-sm flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-muted-foreground text-sm pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
