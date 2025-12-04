import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";
import { motion } from "framer-motion";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Derecho Civil",
    description:
      "Asesoría y representación en contratos, responsabilidad civil, sucesiones y herencias. Protegemos tus intereses patrimoniales con estrategias legales efectivas.",
    image: image4,
  },
  {
    title: "Derecho Penal",
    description:
      "Defensa penal especializada en todas las instancias. Protegemos tus derechos fundamentales con un equipo experimentado en litigios penales.",
    image: image3,
  },
  {
    title: "Derecho Laboral",
    description:
      "Asesoramiento integral en relaciones laborales, despidos, indemnizaciones y conflictos entre empleadores y trabajadores.",
    image: image,
  },
];

const featureList: string[] = [
  "Derecho Civil",
  "Derecho Penal",
  "Derecho Laboral",
  "Derecho Familiar",
  "Derecho Corporativo",
  "Derecho Inmobiliario",
  "Derecho Tributario",
  "Mediación y Arbitraje",
  "Consultoría Legal",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl lg:text-4xl font-bold md:text-center"
      >
        Nuestras{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Áreas de Práctica
        </span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap md:justify-center gap-4"
      >
        {featureList.map((feature: string) => (
          <motion.div
            key={feature}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Badge
              variant="secondary"
              className="text-sm cursor-default"
            >
              {feature}
            </Badge>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>

                <CardContent>{description}</CardContent>

                <CardFooter>
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={image}
                    alt={`Área de ${title}`}
                    className="w-[200px] lg:w-[300px] mx-auto"
                  />
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
