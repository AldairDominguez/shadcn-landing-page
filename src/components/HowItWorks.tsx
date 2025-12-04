import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "1. Consulta Inicial",
    description:
      "Agenda una consulta gratuita donde analizaremos tu caso y te brindaremos una evaluación honesta de tus opciones legales.",
  },
  {
    icon: <MapIcon />,
    title: "2. Análisis del Caso",
    description:
      "Nuestro equipo realiza un estudio exhaustivo de tu situación, recopilando evidencias y documentación necesaria.",
  },
  {
    icon: <PlaneIcon />,
    title: "3. Estrategia Legal",
    description:
      "Desarrollamos una estrategia personalizada basada en tu caso específico, con objetivos claros y plazos definidos.",
  },
  {
    icon: <GiftIcon />,
    title: "4. Representación",
    description:
      "Te acompañamos en todo el proceso legal, representándote con profesionalismo hasta lograr la mejor resolución posible.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Nuestro{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Proceso Legal{" "}
        </span>
        Paso a Paso
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        En Rutalegal seguimos un proceso estructurado y transparente para
        garantizar los mejores resultados en tu caso.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
