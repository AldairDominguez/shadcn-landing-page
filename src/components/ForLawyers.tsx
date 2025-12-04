import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Check, Zap, ShieldCheck, Users } from "lucide-react";
import { motion } from "framer-motion";

export const ForLawyers = () => {
    return (
        <section id="for-lawyers" className="container py-24 sm:py-32 bg-primary/5 rounded-3xl my-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl font-bold">
                        ¿Eres Abogado?
                        <span className="block text-primary">Únete a Rutalegal</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Destaca tu perfil profesional, recibe clientes verificados y gestiona tu reputación online en la plataforma legal más confiable del Perú.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-primary/10 p-2 rounded-full">
                                <Users className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold">Clientes Potenciales</h4>
                                <p className="text-sm text-muted-foreground">Recibe consultas de personas que buscan tu especialidad.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-primary/10 p-2 rounded-full">
                                <ShieldCheck className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold">Perfil Verificado</h4>
                                <p className="text-sm text-muted-foreground">Gana la confianza de tus clientes con el sello de verificación.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-primary/10 p-2 rounded-full">
                                <Zap className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold">Mayor Visibilidad</h4>
                                <p className="text-sm text-muted-foreground">Aparece en los primeros resultados de búsqueda.</p>
                            </div>
                        </div>
                    </div>

                    <Button size="lg" className="w-full sm:w-auto">
                        Crear Perfil Profesional
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <Card className="border-2 border-primary shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg font-bold text-sm">
                            RECOMENDADO
                        </div>
                        <CardHeader>
                            <CardTitle className="text-2xl">Plan Profesional</CardTitle>
                            <CardDescription>Para abogados independientes y estudios</CardDescription>
                            <div className="mt-4">
                                <span className="text-4xl font-bold">S/ 99</span>
                                <span className="text-muted-foreground">/mes</span>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>Perfil destacado en el directorio</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>Sello de "Abogado Verificado"</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>Recepción ilimitada de consultas</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>Panel de gestión de clientes</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>Soporte prioritario</span>
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" variant="default">
                                Empezar Prueba Gratis
                            </Button>
                        </CardFooter>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};
