import { motion } from "framer-motion";
import { useState } from "react";

interface Concessionaria {
  nome: string;
  link: string;
}

interface StateInfo {
  sigla: string;
  nome: string;
  concessionarias: Concessionaria[];
}

const estadosSimples: StateInfo[] = [
  { sigla: "TO", nome: "Tocantins", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" }] },
  { sigla: "AL", nome: "Alagoas", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" }] },
  { sigla: "BA", nome: "Bahia", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" }] },
  { sigla: "CE", nome: "Ceará", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=10" }] },
  { sigla: "ES", nome: "Espírito Santo", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=10" }] },
  { sigla: "GO", nome: "Goiás", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=10" }] },
  { sigla: "MA", nome: "Maranhão", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" }] },
  { sigla: "MT", nome: "Mato Grosso", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=10" }] },
  { sigla: "PB", nome: "Paraíba", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" }] },
  { sigla: "PE", nome: "Pernambuco", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" }] },
  { sigla: "PI", nome: "Piauí", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" }] },
  { sigla: "RN", nome: "Rio Grande do Norte", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" }] },
  { sigla: "SC", nome: "Santa Catarina", concessionarias: [{ nome: "", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" }] },
];

const estadosMultiplos: StateInfo[] = [
  {
    sigla: "MG", nome: "Minas Gerais", concessionarias: [
      { nome: "CEMIG-D", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=10" },
      { nome: "CPFL Santa Cruz", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
      { nome: "Energisa Minas Rio", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=10" },
      { nome: "Energisa Sul Sudeste", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
    ]
  },
  {
    sigla: "SP", nome: "São Paulo", concessionarias: [
      { nome: "CPFL", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
      { nome: "CPFL Piratininga", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
      { nome: "CPFL Santa Cruz", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
      { nome: "Elektro", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
      { nome: "Energisa Sul Sudeste", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
    ]
  },
  {
    sigla: "PR", nome: "Paraná", concessionarias: [
      { nome: "CELESC", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
      { nome: "COPEL", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
      { nome: "CPFL Santa Cruz", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
    ]
  },
  {
    sigla: "RJ", nome: "Rio de Janeiro", concessionarias: [
      { nome: "ENEL", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
      { nome: "Energisa Minas Rio", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=10" },
    ]
  },
  {
    sigla: "RS", nome: "Rio Grande do Sul", concessionarias: [
      { nome: "CEEE", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=10" },
      { nome: "RGE", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
    ]
  },
  {
    sigla: "MS", nome: "Mato Grosso do Sul", concessionarias: [
      { nome: "Elektro", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
      { nome: "Energisa", link: "https://digital.igreenenergy.com.br/?id=125765&sendcontract=true&desc=8" },
    ]
  },
];

const SimpleStateCard = ({ state, index }: { state: StateInfo; index: number }) => {
  return (
    <motion.a
      href={state.concessionarias[0].link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, duration: 0.4 }}
      className="group flex flex-col items-center rounded-xl bg-card p-4 shadow-card border border-border hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full gradient-hero mb-2 group-hover:scale-110 transition-transform">
        <span className="font-display font-black text-lg text-primary-foreground">
          {state.sigla}
        </span>
      </div>
      <span className="text-sm font-medium text-foreground text-center leading-tight mb-3">
        {state.nome}
      </span>
      <span className="w-full text-center text-xs font-bold gradient-hero text-primary-foreground px-3 py-2 rounded-lg">
        Desconto na sua energia aqui
      </span>
    </motion.a>
  );
};

const MultiStateCard = ({ state, index }: { state: StateInfo; index: number }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const currentLink = state.concessionarias[selectedTab].link;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group flex flex-col items-center rounded-xl bg-card p-5 shadow-card border border-border"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full gradient-hero mb-2 group-hover:scale-110 transition-transform">
        <span className="font-display font-black text-lg text-primary-foreground">
          {state.sigla}
        </span>
      </div>
      <span className="text-sm font-medium text-foreground text-center leading-tight mb-3">
        {state.nome}
      </span>

      <div className="w-full flex flex-wrap gap-1 justify-center mb-3">
        {state.concessionarias.map((c, i) => (
          <button
            key={i}
            onClick={() => setSelectedTab(i)}
            className={`text-[10px] font-semibold px-2 py-1 rounded-full border transition-all duration-200 ${
              selectedTab === i
                ? "gradient-hero text-primary-foreground border-transparent shadow-sm"
                : "bg-muted text-muted-foreground border-border hover:border-primary hover:text-primary"
            }`}
          >
            {c.nome}
          </button>
        ))}
      </div>

      <a
        href={currentLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full text-center text-xs font-bold gradient-hero text-primary-foreground px-3 py-2 rounded-lg hover:opacity-90 transition-opacity"
      >
        Desconto na sua energia aqui
      </a>
    </motion.div>
  );
};

const StateGrid = () => {
  return (
    <section id="estados" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 gradient-solar" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Selecione seu <span className="text-primary">Estado</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Escolha seu estado e sua concessionária para garantir seu desconto
          </p>
        </motion.div>

        {/* Estados com concessionária única */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
          {estadosSimples.map((state, i) => (
            <SimpleStateCard key={state.sigla} state={state} index={i} />
          ))}
        </div>

        {/* Separador */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Estados com múltiplas concessionárias
          </p>
          <div className="w-24 h-0.5 bg-primary/30 mx-auto mt-2" />
        </motion.div>

        {/* Estados com múltiplas concessionárias */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {estadosMultiplos.map((state, i) => (
            <MultiStateCard key={state.sigla} state={state} index={i} />
          ))}
        </div>

        {/* WhatsApp para dúvidas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-muted-foreground mb-3">
            Ficou com alguma dúvida sobre o desconto?
          </p>
          <a
            href="https://wa.link/mzv0mc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#1ebe5a] transition-colors shadow-md"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Fale conosco no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default StateGrid;
