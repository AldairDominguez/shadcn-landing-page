import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "¿Cuánto cuesta una consulta legal?",
    answer: "La primera consulta es completamente gratuita. En ella evaluaremos tu caso y te proporcionaremos una cotización transparente de nuestros honorarios profesionales.",
    value: "item-1",
  },
  {
    question: "¿En qué áreas del derecho se especializa Rutalegal?",
    answer:
      "Nos especializamos en Derecho Civil, Penal, Laboral, Familiar, Corporativo, Inmobiliario y Tributario. Contamos con abogados expertos en cada una de estas áreas para brindarte la mejor asesoría.",
    value: "item-2",
  },
  {
    question:
      "¿Cuánto tiempo toma resolver un caso legal?",
    answer:
      "El tiempo varía según la complejidad del caso y el área del derecho. Durante la consulta inicial te proporcionaremos un estimado de tiempo basado en casos similares y las particularidades de tu situación.",
    value: "item-3",
  },
  {
    question: "¿Ofrecen planes de pago para sus servicios?",
    answer: "Sí, entendemos que los servicios legales pueden representar una inversión importante. Ofrecemos planes de pago flexibles adaptados a tu situación financiera.",
    value: "item-4",
  },
  {
    question:
      "¿Qué documentos necesito para la primera consulta?",
    answer:
      "Te recomendamos traer cualquier documento relacionado con tu caso: contratos, notificaciones, demandas, correos electrónicos relevantes, etc. Sin embargo, si no cuentas con documentación, igual podemos realizar una evaluación inicial.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Preguntas{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Frecuentes
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        ¿Aún tienes preguntas?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contáctanos
        </a>
      </h3>
    </section>
  );
};
