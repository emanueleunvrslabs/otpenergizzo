import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/landing/Footer";
import {
  BarChart3,
  FileText,
  Upload,
  Download,
  Eye,
  Trash2,
  Database,
  ArrowRight,
  HardDrive,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const demoReports = [
  {
    data: "31/12/2025, 09:56",
    nomeFile: "centro-nord-1-2026-17671...",
    zona: "centro-nord",
    meseAnno: "1/2026",
  },
  {
    data: "15/01/2026, 14:22",
    nomeFile: "sud-2-2026-18432...",
    zona: "sud",
    meseAnno: "2/2026",
  },
  {
    data: "02/02/2026, 10:05",
    nomeFile: "nord-1-2026-19201...",
    zona: "nord",
    meseAnno: "1/2026",
  },
];

const cardStyle = {
  background: 'linear-gradient(135deg, hsl(0 0% 100% / 0.10) 0%, hsl(0 0% 100% / 0.04) 100%)',
  backdropFilter: 'blur(40px) saturate(180%)',
  WebkitBackdropFilter: 'blur(40px) saturate(180%)',
  border: '1px solid hsl(0 0% 100% / 0.15)',
  boxShadow: '0 8px 32px hsl(0 0% 0% / 0.15), inset 0 1px 0 0 hsl(0 0% 100% / 0.1)',
};

const innerCardStyle = {
  background: 'linear-gradient(135deg, hsl(0 0% 100% / 0.06) 0%, hsl(0 0% 100% / 0.02) 100%)',
  border: '1px solid hsl(0 0% 100% / 0.08)',
};

const Dispacciamento = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <div className="fixed inset-0 mesh-gradient" />
      <div className="fixed inset-0 aurora-bg pointer-events-none" />
      <div className="grain-overlay" />

      <div className="relative z-10">
        <Navbar />

        <main className="container mx-auto px-4 pt-32 pb-24 max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Analisi <span className="gradient-text">Dispacciamento</span>
            </h1>
            <p className="text-muted-foreground">
              Genera report e monitora lo stato dei dati importati
            </p>
          </motion.div>

          {/* Dati Disponibili */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[2rem] p-6 md:p-8 mb-6"
            style={cardStyle}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center">
                <Database className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground/80 font-medium">
                Dati Disponibili
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                className="rounded-2xl p-5"
                style={innerCardStyle}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">File XML</span>
                </div>
                <p className="text-4xl md:text-5xl font-extrabold gradient-text tracking-tight">
                  25.153
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  file disponibili
                </p>
              </motion.div>
              <motion.div
                className="rounded-2xl p-5"
                style={innerCardStyle}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <HardDrive className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Storage</span>
                </div>
                <p className="text-4xl md:text-5xl font-extrabold gradient-text tracking-tight">
                  1.96 GB
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  dimensione totale
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Configura Analisi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[2rem] p-6 md:p-8 mb-6"
            style={cardStyle}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground/80 font-medium">
                Configura Analisi
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 ml-12">
              Carica un CSV con i POD da analizzare e genera il report
            </p>

            <p className="text-sm font-semibold text-foreground mb-3">
              File CSV con POD
            </p>
            <motion.div
              className="border-2 border-dashed border-primary/25 rounded-2xl flex flex-col items-center justify-center py-12 mb-6 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, hsl(158 64% 42% / 0.04) 0%, transparent 100%)',
              }}
              whileHover={{
                borderColor: 'hsl(158 64% 42% / 0.5)',
                background: 'linear-gradient(135deg, hsl(158 64% 42% / 0.08) 0%, transparent 100%)',
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-3">
                <Upload className="w-6 h-6 text-primary" />
              </div>
              <motion.button
                className="px-6 py-2.5 rounded-full font-medium text-sm transition-all"
                style={{
                  background: 'linear-gradient(135deg, hsl(0 0% 100% / 0.12) 0%, hsl(0 0% 100% / 0.06) 100%)',
                  border: '1px solid hsl(0 0% 100% / 0.18)',
                  color: 'hsl(0 0% 98%)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Scegli File
              </motion.button>
              <p className="text-xs text-muted-foreground mt-3">
                Nessun file selezionato
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { label: "Zona", placeholder: "Seleziona zona", items: ["Nord", "Centro-Nord", "Centro-Sud", "Sud", "Sicilia", "Sardegna"] },
                { label: "Mese", placeholder: "Seleziona mese", items: Array.from({ length: 12 }, (_, i) => new Date(2026, i).toLocaleString("it-IT", { month: "long" })) },
                { label: "Anno", placeholder: "Seleziona anno", items: ["2024", "2025", "2026"] },
              ].map((field) => (
                <div key={field.label}>
                  <p className="text-sm font-semibold text-foreground mb-2">
                    {field.label}
                  </p>
                  <Select>
                    <SelectTrigger
                      className="rounded-xl border-border/50 bg-transparent h-11"
                      style={innerCardStyle}
                    >
                      <SelectValue placeholder={field.placeholder} />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl" style={cardStyle}>
                      {field.items.map((item) => (
                        <SelectItem key={item} value={item.toLowerCase()}>
                          {item.charAt(0).toUpperCase() + item.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>

            <motion.button
              className="w-full py-3.5 rounded-xl font-semibold text-base flex items-center justify-center gap-2"
              style={{
                background: 'linear-gradient(135deg, hsl(158 64% 42%), hsl(160 70% 36%))',
                color: 'hsl(0 0% 100%)',
                boxShadow: '0 4px 20px hsl(158 64% 42% / 0.35)',
              }}
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.99 }}
            >
              Avvia Analisi
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Report Generati */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-[2rem] p-6 md:p-8"
            style={cardStyle}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center">
                <FileText className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground/80 font-medium">
                Report Generati
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl" style={innerCardStyle}>
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-border/30 hover:bg-transparent">
                    <TableHead className="text-muted-foreground text-xs uppercase tracking-wider font-medium">Data</TableHead>
                    <TableHead className="text-muted-foreground text-xs uppercase tracking-wider font-medium">Nome File</TableHead>
                    <TableHead className="text-muted-foreground text-xs uppercase tracking-wider font-medium">Zona</TableHead>
                    <TableHead className="text-muted-foreground text-xs uppercase tracking-wider font-medium">Mese/Anno</TableHead>
                    <TableHead className="text-muted-foreground text-xs uppercase tracking-wider font-medium">Azioni</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {demoReports.map((report, i) => (
                    <TableRow
                      key={i}
                      className="border-b border-border/20 hover:bg-primary/5 transition-colors"
                    >
                      <TableCell className="text-foreground/90 text-sm">
                        {report.data}
                      </TableCell>
                      <TableCell className="text-foreground/90 text-sm font-mono">
                        {report.nomeFile}
                      </TableCell>
                      <TableCell>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                          {report.zona}
                        </span>
                      </TableCell>
                      <TableCell className="text-foreground/90 text-sm">
                        {report.meseAnno}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          {[
                            { icon: Download, label: "Download" },
                            { icon: Eye, label: "View" },
                            { icon: Trash2, label: "Delete" },
                          ].map(({ icon: Icon, label }) => (
                            <motion.button
                              key={label}
                              className="p-2 rounded-xl transition-colors hover:bg-primary/10"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Icon className="w-4 h-4 text-muted-foreground" />
                            </motion.button>
                          ))}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </motion.div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Dispacciamento;
