import { motion } from "framer-motion";
import { Zap, TrendingUp, Users, DollarSign, ArrowLeft, MessageCircle, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import igreenLogo from "@/assets/igreen-logo.png";

const benefits = [
  {
    icon: DollarSign,
    title: "Comissões Recorrentes",
    description: "Ganhe comissões mensais sobre cada cliente que você indicar. Renda passiva de verdade.",
  },
  {
    icon: TrendingUp,
    title: "Mercado em Expansão",
    description: "O mercado de energia solar cresce exponencialmente no Brasil. Entre agora e saia na frente.",
  },
  {
    icon: Users,
    title: "Rede de Licenciados",
    description: "Faça parte de uma rede nacional de empreendedores que estão transformando o setor energético.",
  },
  {
    icon: Zap,
    title: "Treinamento Completo",
    description: "Receba todo o suporte e treinamento necessário para começar a faturar rapidamente.",
  },
];

const Licenciado = () => {
  const whatsappLink = "https://wa.me/63984507923";

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Voltar</span>
          </Link>
          <img src={igreenLogo} alt="iGreen Energy" className="h-10" />
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 gradient-solar" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-foreground mb-6">
              Seja um <span className="text-primary">Licenciado iGreen</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 font-body">
              Empreenda no mercado que mais cresce no Brasil. Ganhe comissões recorrentes
              ajudando pessoas a economizar na conta de energia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
          >
            Por que ser um <span className="text-primary">licenciado?</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vídeo - Como funciona a empresa */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como funciona a <span className="text-primary">iGreen Energy</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Entenda o modelo de negócio e como você pode fazer parte
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="rounded-2xl overflow-hidden shadow-card-hover border border-border aspect-video">
              <iframe
                src="https://www.youtube.com/embed/W5u-OOsu5EA?start=97"
                title="Como funciona a iGreen Energy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vídeo - Comissões */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como funcionam as <span className="text-primary">Comissões</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Veja na prática como você ganha dinheiro com a iGreen
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="rounded-2xl overflow-hidden shadow-card-hover border border-border aspect-video">
              <iframe
                src="https://www.youtube.com/embed/JOyQ0bljHuU"
                title="Como funcionam as comissões iGreen"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTAs de Conversão */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 gradient-solar" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pronto para <span className="text-primary">começar?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Escolha como deseja dar o próximo passo na sua jornada como licenciado iGreen
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://expansao.igreenenergy.com.br/?id=125765"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-3 gradient-hero text-primary-foreground font-display font-bold text-lg px-8 py-4 rounded-xl shadow-card-hover transition-shadow hover:shadow-lg"
              >
                <Rocket className="h-5 w-5" />
                Quero entrar agora
              </motion.a>

              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-3 bg-[hsl(142,70%,45%)] text-primary-foreground font-display font-bold text-lg px-8 py-4 rounded-xl shadow-card-hover transition-shadow hover:shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer simples */}
      <footer className="py-6 px-6 border-t border-border bg-background">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} iGreen Energy — Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Licenciado;
