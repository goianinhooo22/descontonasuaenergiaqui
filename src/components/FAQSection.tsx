import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o desconto na conta de luz com a iGreen?",
    answer:
      "A iGreen Energy conecta você a usinas de energia solar através do modelo de geração distribuída compartilhada. A energia gerada é injetada na rede da sua concessionária, gerando créditos que são aplicados na sua fatura. Você não precisa instalar nada — é 100% digital.",
  },
  {
    question: "Preciso instalar placas solares na minha casa?",
    answer:
      "Não! Esse é o grande diferencial. Você não precisa comprar nem instalar nenhum equipamento. A energia é produzida em usinas solares remotas e os créditos chegam automaticamente na sua conta de luz.",
  },
  {
    question: "Qual o percentual de desconto que vou receber?",
    answer:
      "O desconto varia de no mínimo 10% a até 20%, dependendo do seu estado e da sua concessionária. É uma economia garantida todos os meses, sem custo adicional.",
  },
  {
    question: "Existe algum custo ou taxa para aderir?",
    answer:
      "Não há nenhum custo de adesão, taxa de instalação ou investimento inicial. O processo é totalmente gratuito. Você só paga a sua conta de luz normalmente, porém com o desconto aplicado.",
  },
  {
    question: "Tem fidelidade ou multa para cancelar?",
    answer:
      "Não existe fidelidade. Você pode cancelar a qualquer momento sem multas ou penalidades. A iGreen preza pela transparência e liberdade do consumidor.",
  },
  {
    question: "Quanto tempo demora para começar a receber o desconto?",
    answer:
      "Após a adesão, o prazo para o primeiro boleto iGreen e aplicação dos créditos na sua fatura varia entre 90 e 180 dias, conforme a distribuidora da sua região. Esse prazo é regulamentado pela ANEEL.",
  },
  {
    question: "A iGreen é uma empresa confiável e legalizada?",
    answer:
      "Sim! A iGreen Energy atua de acordo com a Lei 14.300/2022 (Marco Legal da Geração Distribuída) e é regulamentada pela ANEEL. Mais de 170 mil brasileiros já economizam com a iGreen.",
  },
  {
    question: "Funciona para qualquer tipo de imóvel?",
    answer:
      "Funciona para residências, comércios e pequenas empresas que utilizam energia em baixa tensão (grupo B). Para consumidores de alta tensão, entre em contato conosco para verificar condições especiais.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="h-8 w-8 text-primary" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Perguntas <span className="text-primary">Frequentes</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Tire suas dúvidas sobre o desconto na conta de energia
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
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

export default FAQSection;
