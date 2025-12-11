import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useState, FormEvent, ChangeEvent } from "react";
import { Check, MessageSquare, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Suggestions = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (message.trim().length < 10) {
            setError("Por favor, escribe un mensaje más detallado (mínimo 10 caracteres).");
            return;
        }
        setError("");
        setIsSubmitted(true);
    };

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
        if (error) {
            setError("");
        }
    };

    return (
        <section id="suggestions" className="container py-24 sm:py-32">
            <hr className="w-11/12 mx-auto mb-16" />

            <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                        Ética y Transparencia
                    </span>
                </h3>
                <p className="text-xl text-muted-foreground mb-8">
                    Tu opinión es importante para nosotros. Ayúdanos a mejorar nuestros servicios.
                </p>

                {isSubmitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center gap-4 py-8 bg-muted/30 rounded-lg border border-green-200 dark:border-green-900"
                    >
                        <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                            <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                        </div>
                        <h4 className="text-2xl font-semibold text-green-600 dark:text-green-400">
                            ¡Gracias por tu sugerencia!
                        </h4>
                        <p className="text-muted-foreground max-w-md">
                            Apreciamos tus comentarios. Los revisaremos cuidadosamente para seguir mejorando.
                        </p>
                        <Button
                            variant="outline"
                            className="mt-4"
                            onClick={() => {
                                setIsSubmitted(false);
                                setMessage("");
                            }}
                        >
                            Enviar otra sugerencia
                        </Button>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-muted/50 p-8 rounded-lg border shadow-sm"
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2 text-left">
                                <label htmlFor="suggestion" className="text-sm font-medium flex items-center gap-2">
                                    <MessageSquare className="h-4 w-4" />
                                    Tu mensaje
                                </label>
                                <Textarea
                                    id="suggestion"
                                    placeholder="Escribe aquí tus comentarios, quejas o sugerencias..."
                                    className={cn(
                                        "min-h-[150px] bg-background resize-none transition-colors",
                                        error && "border-red-500 focus-visible:ring-red-500"
                                    )}
                                    value={message}
                                    onChange={handleChange}
                                    required
                                />
                                {error && (
                                    <motion.span
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-sm text-red-500 flex items-center gap-1 font-medium"
                                    >
                                        <AlertCircle className="h-3 w-3" />
                                        {error}
                                    </motion.span>
                                )}
                            </div>
                            <Button type="submit" size="lg" className="w-full sm:w-auto self-end">
                                Enviar Sugerencia
                            </Button>
                        </form>
                    </motion.div>
                )}
            </div>
        </section>
    );
};
