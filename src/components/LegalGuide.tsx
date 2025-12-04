import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, FileText, ShieldCheck, Gavel, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

export const LegalGuide = () => {
    return (
        <section id="guide" className="container py-24 sm:py-32 bg-muted/30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                        Orientación Legal
                    </span>{" "}
                    Gratuita
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Información clara y transparente para que tomes las mejores decisiones.
                </p>
            </motion.div>

            <Tabs defaultValue="procedures" className="w-full max-w-4xl mx-auto">
                <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 h-auto">
                    <TabsTrigger value="procedures" className="py-3 text-md">Tu Caso Legal</TabsTrigger>
                    <TabsTrigger value="prevention" className="py-3 text-md">Evita Engaños</TabsTrigger>
                </TabsList>

                {/* Pestaña 1: Procedimientos */}
                <TabsContent value="procedures" className="mt-8 space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Gavel className="h-6 w-6 text-primary" />
                                ¿Qué procedimiento te corresponde?
                            </CardTitle>
                            <CardDescription>
                                Identifica la ruta legal adecuada según tu situación.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4 md:grid-cols-2">
                            <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                                <h3 className="font-bold mb-2">Conflictos Familiares</h3>
                                <p className="text-sm text-muted-foreground">Divorcios, alimentos, tenencia. Generalmente inician con una conciliación obligatoria.</p>
                            </div>
                            <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                                <h3 className="font-bold mb-2">Deudas y Contratos</h3>
                                <p className="text-sm text-muted-foreground">Incumplimientos de pago o desalojos. Requiere carta notarial previa y demanda civil.</p>
                            </div>
                            <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                                <h3 className="font-bold mb-2">Despidos Laborales</h3>
                                <p className="text-sm text-muted-foreground">Despido arbitrario o falta de pago. Se debe acudir a SUNAFIL o al Ministerio de Trabajo.</p>
                            </div>
                            <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                                <h3 className="font-bold mb-2">Delitos Penales</h3>
                                <p className="text-sm text-muted-foreground">Robos, agresiones o estafas. Se inicia con una denuncia policial o ante la Fiscalía.</p>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Pestaña 2: Prevención */}
                <TabsContent value="prevention" className="mt-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <ShieldCheck className="h-6 w-6 text-primary" />
                                Evita malas asesorías
                            </CardTitle>
                            <CardDescription>
                                Checklist de seguridad antes de contratar un abogado.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="h-5 w-5 text-yellow-500 mt-1" />
                                <div>
                                    <h4 className="font-bold">Verifica su Colegiatura</h4>
                                    <p className="text-sm text-muted-foreground">Exige siempre el número de colegiatura y verifícalo en la web del Colegio de Abogados correspondiente. Debe estar "Habilitado".</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <FileText className="h-5 w-5 text-blue-500 mt-1" />
                                <div>
                                    <h4 className="font-bold">Contrato de Servicios</h4>
                                    <p className="text-sm text-muted-foreground">Nunca pagues sin un contrato que detalle: honorarios, etapas del proceso y resultados esperados (sin promesas falsas).</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <DollarSign className="h-5 w-5 text-green-500 mt-1" />
                                <div>
                                    <h4 className="font-bold">Transparencia en Pagos</h4>
                                    <p className="text-sm text-muted-foreground">Evita depositar a cuentas personales de terceros. Pide recibos por honorarios profesionales.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>


            </Tabs>
        </section>
    );
};
