import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Protege Tus
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Derechos e Intereses{" "}
            </span>
            Con Expertos
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            No dejes tu futuro al azar. Agenda hoy una consulta gratuita con nuestro
            equipo de abogados expertos y descubre cómo podemos ayudarte a resolver
            tu situación legal de manera efectiva.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto" asChild>
            <a href="https://wa.me/51924144408" target="_blank" rel="noopener noreferrer">
              Consulta Gratuita
            </a>
          </Button>
          <Button
            variant="outline"
            className="w-full md:w-auto"
            asChild
          >
            <a href="#free-consultation">
              Conoce Nuestros Servicios
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
