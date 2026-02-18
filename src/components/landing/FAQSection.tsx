import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Che tipo di firma offrite?",
    answer: "Offriamo la Firma Elettronica Semplice (FES) con verifica OTP via WhatsApp. Perfetta per il mercato energetico, è ideale per far firmare contratti di energia e gas in modo semplice, veloce e con pieno valore legale.",
  },
  {
    question: "È possibile collegare il servizio via API?",
    answer: "Certamente! Se hai grandi volumi, puoi collegare il tuo software con il nostro per automatizzare l'intero processo di firma. Il risultato sarà che il tuo gestionale avrà indietro i documenti firmati, senza costi aggiuntivi.",
  },
  {
    question: "È un servizio in abbonamento?",
    answer: "No! Siamo gli unici ad offrire il servizio senza vincoli di abbonamento o rinnovi automatici. Paghi a consumo con credito prepagato che dura 3 anni e la scadenza si rinnova ad ogni ricarica.",
  },
  {
    question: "Esiste un piano gratuito per provare il servizio?",
    answer: "Sì, hai a disposizione 3 firme mensili completamente gratuite. Nel piano gratuito sono escluse le API e gli OTP via SMS.",
  },
  {
    question: "Cos'è la Firma Elettronica Semplice?",
    answer: "La FES è una modalità di firma da remoto semplice da utilizzare e legalmente riconosciuta in Italia e in Europa. Perfetta per il settore energetico, permette di far firmare contratti di energia e gas con autenticazione OTP per il massimo valore probatorio.",
  },
  {
    question: "Il costo varia in base al numero delle utenze?",
    answer: "No, nessun costo extra. Tutti possono avere le proprie credenziali di accesso e attingono da un'unica gestione del credito centralizzato.",
  },
  {
    question: "Ho una domanda che non è tra queste. Chi posso contattare?",
    answer: "Puoi scrivere una mail a support@otpservice.io, oppure prenotare una demo senza impegno.",
  },
];

export const FAQSection = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Domande <span className="gradient-text">frequenti</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Non trovi quello che cerchi? Scrivi a{" "}
            <a href="mailto:support@otpservice.io" className="text-primary hover:underline">
              support@otpservice.io
            </a>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="liquid-glass-card p-6 md:p-8"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-foreground text-left text-sm font-medium hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
