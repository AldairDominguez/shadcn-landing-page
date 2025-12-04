import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: string;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Consulta Básica",
    popular: 0,
    price: "Gratis",
    description:
      "Ideal para una primera evaluación de tu caso y conocer tus opciones legales.",
    buttonText: "Agendar Consulta",
    benefitList: [
      "Consulta inicial gratuita",
      "Evaluación del caso",
      "Orientación legal básica",
      "Sin compromiso",
      "30 minutos de asesoría",
    ],
  },
  {
    title: "Asesoría Integral",
    popular: 1,
    price: "Desde $500",
    description:
      "Servicio completo de asesoría y representación legal para casos de complejidad media.",
    buttonText: "Contratar Servicio",
    benefitList: [
      "Análisis exhaustivo del caso",
      "Estrategia legal personalizada",
      "Elaboración de documentos",
      "Seguimiento constante",
      "Representación en negociaciones",
    ],
  },
  {
    title: "Representación Premium",
    popular: 0,
    price: "Personalizado",
    description:
      "Servicio premium para casos complejos que requieren representación legal completa.",
    buttonText: "Solicitar Cotización",
    benefitList: [
      "Equipo legal dedicado",
      "Representación en tribunales",
      "Disponibilidad prioritaria",
      "Gestión integral del caso",
      "Asesoría ilimitada",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center"
      >
        Nuestros
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Servicios Legales{" "}
        </span>
        y Tarifas
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-center text-muted-foreground pt-4 pb-8"
      >
        Ofrecemos soluciones legales adaptadas a tus necesidades y presupuesto.
        Transparencia y calidad garantizada.
      </motion.h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps, index) => (
          <motion.div
            key={pricing.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                className={
                  pricing.popular === PopularPlanType.YES
                    ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-primary"
                    : ""
                }
              >
                <CardHeader>
                  <CardTitle className="flex item-center justify-between">
                    {pricing.title}
                    {pricing.popular === PopularPlanType.YES ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-sm text-primary"
                        >
                          Más popular
                        </Badge>
                      </motion.div>
                    ) : null}
                  </CardTitle>
                  <div>
                    <span className="text-3xl font-bold">{pricing.price}</span>
                  </div>

                  <CardDescription>{pricing.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="w-full">{pricing.buttonText}</Button>
                  </motion.div>
                </CardContent>

                <hr className="w-4/5 m-auto mb-4" />

                <CardFooter className="flex">
                  <div className="space-y-4">
                    {pricing.benefitList.map((benefit: string, benefitIndex) => (
                      <motion.span
                        key={benefit}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: benefitIndex * 0.1 }}
                        className="flex"
                      >
                        <Check className="text-green-500" />{" "}
                        <h3 className="ml-2">{benefit}</h3>
                      </motion.span>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
