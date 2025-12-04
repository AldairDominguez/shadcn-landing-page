import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Asesoría Legal Personalizada",
    description:
      "Análisis detallado de tu caso con un enfoque personalizado. Desarrollamos estrategias legales adaptadas a tus necesidades específicas.",
    icon: <ChartIcon />,
  },
  {
    title: "Representación en Tribunales",
    description:
      "Defensa profesional en todas las instancias judiciales. Nuestros abogados litigantes cuentan con amplia experiencia en salas de audiencia.",
    icon: <WalletIcon />,
  },
  {
    title: "Gestión de Documentos Legales",
    description:
      "Elaboración y revisión de contratos, demandas, recursos y todo tipo de documentación legal con la máxima precisión y profesionalismo.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Servicios Legales{" "}
            </span>
            Integrales
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            En Rutalegal ofrecemos soluciones jurídicas completas con un
            enfoque centrado en resultados y satisfacción del cliente.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="Servicios legales"
        />
      </div>
    </section>
  );
};
