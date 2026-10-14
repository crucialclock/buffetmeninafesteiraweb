import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { siteConfig } from "../config/site";
import festaMarioImg from "../assets/festa-mario.jpg";
import danceImg from "../assets/dance.jpg";
import brinquedosImg from "../assets/brinquedos.jpg";
import foosballImg from "../assets/foosball.jpg";
import comidasImg from "../assets/comidas.jpg";
import bebidasImg from "../assets/bebidas.jpg";
import mesasImg from "../assets/mesas.jpg";
import entradaImg from "../assets/entrada.jpg";
import robozaoImg from "../assets/robozao.jpg";
import mesasDecoradasImg from "../assets/mesas-decoradas.jpg";
import recepcaoImg from "../assets/recepcao.jpg";
import festaFutebolImg from "../assets/festa-futebol.jpg";
import basqueteBrincandoImg from "../assets/basquete-brincando.jpg";
import piscinaBolinhasImg from "../assets/piscina-de-bolinhas.jpg";
import baileMascarasImg from "../assets/baile-mascaras.jpg";
import poderosoChefinhoImg from "../assets/poderoso-chefinho.webp";
import miniPizzaImg from "../assets/mini-pizza.jpg";
import maquinaBasqueteImg from "../assets/maquina-basquete.jpg";
import ImageCarousel from "../components/ImageCarousel";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Home() {
    const handleWhatsAppClick = () => {
        const message = encodeURIComponent(siteConfig.whatsappMessage);
        window.open(`https://wa.me/${siteConfig.whatsapp}?text=${message}`, "_blank");
    };

    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    const galeriaImagens = [
        { src: poderosoChefinhoImg, alt: "Festa Poderoso Chefinho com decoração criativa" },
        { src: robozaoImg, alt: "Festa temática de robô com decoração criativa e divertida" },
        { src: festaMarioImg, alt: "Festa Super Mario com decoração personalizada" },
        { src: festaFutebolImg, alt: "Festa temática de futebol com decoração esportiva" },
        { src: baileMascarasImg, alt: "Baile de máscaras com decoração elegante" },
        { src: mesasDecoradasImg, alt: "Mesas decoradas com detalhes especiais para a festa" },
        { src: brinquedosImg, alt: "Amplo brinquedão com piscina de bolinhas e diversão para as crianças" },
        { src: piscinaBolinhasImg, alt: "Crianças se divertindo na piscina de bolinhas coloridas" },
        { src: basqueteBrincandoImg, alt: "Crianças brincando de basquete no espaço" },
        { src: maquinaBasqueteImg, alt: "Máquina de basquete para diversão dos convidados" },
        { src: danceImg, alt: "Crianças dançando e se divertindo na pista de dança" },
        { src: recepcaoImg, alt: "Área de recepção acolhedora e bem decorada" },
        { src: foosballImg, alt: "Diversão garantida para os adultos no Air Game" },
        { src: miniPizzaImg, alt: "Mini pizzas deliciosas servidas na festa" },
        { src: comidasImg, alt: "Variedade de salgadinhos fritos servidos na festa" },
        { src: bebidasImg, alt: "Entradas e caldinhos servidos com carinho" },
        { src: mesasImg, alt: "Amplo salão com mesas para convidados e área de jogos" },
        { src: entradaImg, alt: "Mesa temática com decoração personalizada" },
    ];

    const testimonials = [
        {
            name: "Maria Gizelle",
            avatar: "https://lh3.googleusercontent.com/a-/ALV-UjX-MAWbbnE4WC_hMW1pmtfDH5NyxG6iyqUJpYXoV7zmvRSmQ50=w41-h41-p-rp-mo-br100",
            rating: 5,
            text: "Fui uma festa nesse espaço e me surpreendi, tudo muito bem organizado e limpo, a decoração estava perfeita, a comida quentinha e bem saborosa, e eles foram super atenciosos, se eu pudesse dava nota mil. Amamos demais!",
        },
        {
            name: "Cleide Assunção",
            avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW-3vtbGL19XetzFSuMxbOVJamtQGvlMlqyWfat0FI63vVB-nCD=w41-h41-p-rp-mo-br100",
            rating: 5,
            text: "Buffet com espaço amplo, moderno, organizado. A qualidade da comida, super saborosa, salgados sequinhos, hambúrguer artesanal maravilhoso. O bolo e doces são espetacular. Todos super atenciosos. E a decoração personalizada para cada festa. Buffet excelente!! Transformando sonhos em realidade",
        },
        {
            name: "Cleber Santana",
            avatar: "https://lh3.googleusercontent.com/a/ACg8ocK8It1TqcNP9scPDUcT7kL31RAtTn8XQO-1C61y0pY1sWuKWA=w41-h41-p-rp-mo-br100",
            rating: 5,
            text: "Excelente experiência! O buffet está em uma localização de fácil acesso, com instalações amplas, limpas e muito bem cuidadas. A decoração é linda, feita com muito bom gosto e atenção aos detalhes, tornando o ambiente ainda mais especial. A comida é deliciosa, variada e de ótima qualidade. O atendimento merece destaque: toda a equipe foi extremamente atenciosa, educada e prestativa do início ao fim. Sem dúvida, um lugar que superou as expectativas. Recomendo de olhos fechados para quem procura um buffet de qualidade para celebrar momentos especiais!",
        },
        {
            name: "Daniel Rodrigues",
            avatar: "https://lh3.googleusercontent.com/a/ACg8ocJ5jeCZEEkdM0AucnGiJD3ju3faOQh3Xtxtqz1iXOg1wefnEg=w41-h41-p-rp-mo-br100",
            rating: 5,
            text: "Que experiência incrível! O buffet superou todas as nossas expectativas. O ambiente é muito bonito, organizado e impecavelmente limpo. A decoração personalizada faz toda a diferença e encanta todos os convidados. As crianças aproveitaram muito os brinquedos, que são seguros, e os monitores são muito atenciosos e animados. Gostei muito de ter ambiente separado. Com certeza faremos outra comemoração aqui.",
        },
        {
            name: "Karen Regina",
            avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWB2rkjoxR5qIBsj9IN14KhKx4fU4wr7WmH5JZwEGmiMWRqn50=w41-h41-p-rp-mo-br100",
            rating: 5,
            text: "Escolhemos o Buffet Menina Festeira para o aniversário de 4 anos do meu filho, e foi tudo impecável, todos os convidados saíram elogiando demais o espaço, meu filho e seus amigos se divertiram muito, todo atendimento foi excelente do início ao fim. Eu indico a todos",
        },
    ];

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    return (
        <main className="theme-page relative">
            {/* Hero Section */}
            <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
                <motion.div className="absolute inset-0 z-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
                    <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-canvas)] via-[var(--color-canvas)] to-transparent" />
                    
                    {/* Bokeh Effect - Brilhos sutis e equilibrados */}
                    {/* Luz superior direita */}
                    <motion.div
                        className="absolute -top-20 -right-20 lg:-top-20 lg:right-[5%] w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] rounded-full"
                        style={{
                            background: "radial-gradient(circle, rgba(255, 217, 102, 0.1) 0%, rgba(244, 196, 48, 0.05) 35%, transparent 70%)",
                            filter: "blur(50px)",
                        }}
                        animate={{
                            scale: [1, 1.08, 1],
                            opacity: [0.5, 0.7, 0.5],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    
                    {/* Luz inferior esquerda */}
                    <motion.div
                        className="absolute -bottom-20 -left-20 lg:-bottom-20 lg:left-0 w-[300px] lg:w-[550px] h-[300px] lg:h-[550px] rounded-full"
                        style={{
                            background: "radial-gradient(circle, rgba(255, 217, 102, 0.09) 0%, rgba(244, 196, 48, 0.045) 40%, transparent 70%)",
                            filter: "blur(55px)",
                        }}
                        animate={{
                            scale: [1, 1.06, 1],
                            opacity: [0.45, 0.65, 0.45],
                        }}
                        transition={{
                            duration: 17,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                    />
                    
                    {/* Luz central - apenas desktop */}
                    <motion.div
                        className="hidden lg:block absolute top-[30%] right-[18%] w-[380px] h-[380px] rounded-full"
                        style={{
                            background: "radial-gradient(circle, rgba(255, 217, 102, 0.14) 0%, rgba(244, 196, 48, 0.07) 45%, transparent 70%)",
                            filter: "blur(70px)",
                        }}
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.55, 0.75, 0.55],
                        }}
                        transition={{
                            duration: 14,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2,
                        }}
                    />
                </motion.div>

                <div className="page-shell relative z-10 py-16 lg:py-20">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                        <motion.div className="flex-1" variants={staggerContainer} initial="hidden" animate="visible">
                            <motion.h1 className="type-hero-title theme-text-primary mb-6" variants={fadeInUp} transition={{ duration: 0.8, ease: "easeOut" }}>
                                Sua festa merece ser <span className="gold-accent-cursive">inesquecível.</span>
                            </motion.h1>

                            <motion.p className="text-lg theme-text-secondary leading-relaxed mb-8 max-w-xl" variants={fadeInUp} transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}>
                                Celebre momentos especiais com decorações encantadoras e experiências preparadas com carinho para cada comemoração.
                            </motion.p>

                            <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeInUp} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
                                <motion.button onClick={handleWhatsAppClick} className="btn-primary inline-flex items-center justify-center gap-2" whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                                    Quero planejar minha festa
                                    <ArrowRight size={18} strokeWidth={2} />
                                </motion.button>

                                <motion.button onClick={() => handleScrollTo("galeria")} className="btn-secondary inline-flex items-center justify-center" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    Conheça nossas decorações
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        <motion.div className="relative w-full lg:w-[380px] flex-shrink-0" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}>
                            <motion.div className="aspect-square rounded-2xl overflow-hidden shadow-[var(--shadow-medium)] border border-[var(--color-border-soft)]" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
                                <img src={entradaImg} alt="Mesa temática com decoração personalizada" className="w-full h-full object-cover" />
                            </motion.div>

                            <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-full gold-bg opacity-30 blur-2xl" />
                            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full gold-bg opacity-20 blur-xl" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Apresentação do Buffet */}
            <motion.section id="sobre" className="py-16 lg:py-20 relative" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
                <div className="page-shell">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                        <motion.div className="order-2 lg:order-1" variants={fadeInUp} transition={{ duration: 0.7, ease: "easeOut" }}>
                            <motion.div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-medium)] border border-[var(--color-border-soft)]" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
                                <img src={danceImg} alt="Crianças dançando e se divertindo na pista de dança" className="w-full h-full object-cover" />
                            </motion.div>
                        </motion.div>

                        <motion.div className="order-1 lg:order-2" variants={staggerContainer}>
                            <motion.h2 className="type-section-title theme-text-primary mb-6 text-center" variants={fadeInUp} transition={{ duration: 0.7, ease: "easeOut" }}>
                                Cada detalhe faz <br className="sm:hidden" /> parte da <span className="gold-accent-cursive">magia</span>.
                            </motion.h2>

                            <motion.p className="text-base theme-text-secondary leading-relaxed mb-6" variants={fadeInUp} transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}>
                                No Buffet Menina Festeira, preparamos celebrações especiais com atenção a cada detalhe da decoração e da experiência de cada família.
                            </motion.p>

                            <motion.p className="text-base theme-text-secondary leading-relaxed" variants={fadeInUp} transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}>
                                Transformamos sonhos em realidade, criando ambientes únicos que marcam momentos inesquecíveis na vida das crianças e de suas famílias.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Seção de Avaliações */}
            <motion.section id="avaliacoes" className="py-16 lg:py-20 relative" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
                <div className="page-shell">
                    <div className="text-center mb-10">
                        <motion.h2 className="type-section-title theme-text-primary mb-4" variants={fadeInUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                            O que dizem{" "}
                            <span className="gold-accent-cursive">
                                {" "}
                                <br className="sm:hidden" /> nossos clientes
                            </span>
                        </motion.h2>
                    </div>

                    <motion.div variants={scaleIn} transition={{ duration: 0.6, ease: "easeOut" }}>
                        <TestimonialsCarousel testimonials={testimonials} />
                    </motion.div>
                </div>
            </motion.section>

            {/* Galeria de Festas - Carrossel */}
            <motion.section id="galeria" className="py-16 lg:py-20 relative" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
                <div className="page-shell">
                    <div className="text-center mb-12">
                        <motion.h2 className="type-section-title theme-text-primary mb-4" variants={fadeInUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                            Inspirações para <span className="gold-accent-cursive">celebrar.</span>
                        </motion.h2>
                        <motion.p className="text-base theme-text-secondary max-w-2xl mx-auto" variants={fadeInUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                            Cada comemoração tem seu encanto. <br className="sm:hidden" /> Conheça algumas das festas realizadas pelo Menina Festeira.
                        </motion.p>
                    </div>

                    <motion.div variants={scaleIn} transition={{ duration: 0.6, ease: "easeOut" }}>
                        <ImageCarousel images={galeriaImagens} />
                    </motion.div>
                </div>
            </motion.section>

            {/* Seção Final: Mapa + Contato + Chamada */}
            <motion.section id="contato" className="py-16 lg:py-24 relative overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} transition={{ duration: 0.8, ease: "easeOut" }}>
                {/* Background decorativo */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-canvas-strong)] to-transparent" />
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[var(--color-gold)] opacity-5 blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[var(--color-gold)] opacity-5 blur-3xl" />
                </div>

                <div className="page-shell relative z-10">
                    {/* Título Principal */}
                    <motion.div className="text-center mb-16" variants={staggerContainer}>
                        <motion.h2 className="type-section-title theme-text-primary mb-6" variants={fadeInUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                            Mais do que uma festa, <span className="gold-accent-cursive">uma memória</span>.
                        </motion.h2>
                        <motion.p className="text-lg theme-text-secondary max-w-2xl mx-auto leading-relaxed" variants={fadeInUp} transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}>
                            Vamos criar juntos um momento inesquecível para você e sua família.
                        </motion.p>
                    </motion.div>

                    {/* Grid quebrado: CTAs + Mapa */}
                    <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
                        {/* CTAs - 2 colunas - Aparece primeiro no mobile */}
                        <motion.div className="lg:col-span-2 lg:order-2 flex flex-col gap-6" variants={staggerContainer}>
                            {/* WhatsApp CTA */}
                            <motion.button onClick={handleWhatsAppClick} className="group relative p-6 rounded-2xl bg-gradient-to-br from-[var(--color-gold)] to-[#c4a027] text-black overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300" variants={scaleIn} whileHover={{ scale: 1.02, y: -4 }} whileTap={{ scale: 0.98 }}>
                                <div className="relative z-10 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center flex-shrink-0">
                                        <FaWhatsapp size={24} />
                                    </div>
                                    <div className="text-left flex-1">
                                        <h3 className="font-semibold text-lg mb-1">Fale conosco</h3>
                                        <p className="text-sm opacity-90">+55 (11) 91663-2121</p>
                                    </div>
                                    <ArrowRight className="flex-shrink-0 group-hover:translate-x-1 transition-transform" size={20} strokeWidth={2.5} />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.button>

                            {/* Instagram CTA */}
                            <motion.a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="group p-6 rounded-2xl border-2 border-[var(--color-border-strong)] bg-[var(--color-surface)]/50 backdrop-blur-sm hover:border-[var(--color-gold)] transition-all duration-300" variants={scaleIn} whileHover={{ scale: 1.02, y: -2 }}>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[var(--color-gold-soft)] flex items-center justify-center flex-shrink-0">
                                        <FaInstagram className="gold-accent" size={24} />
                                    </div>
                                    <div className="text-left flex-1">
                                        <h3 className="font-semibold text-base theme-text-primary mb-1">Siga no Instagram</h3>
                                        <p className="text-sm theme-text-secondary">@buffetmeninafesteira</p>
                                    </div>
                                    <ArrowRight className="flex-shrink-0 theme-text-secondary group-hover:gold-accent group-hover:translate-x-1 transition-all" size={20} strokeWidth={2} />
                                </div>
                            </motion.a>

                            {/* Localização CTA */}
                            <motion.a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="group p-6 rounded-2xl border-2 border-[var(--color-border-strong)] bg-[var(--color-surface)]/50 backdrop-blur-sm hover:border-[var(--color-gold)] transition-all duration-300" variants={scaleIn} whileHover={{ scale: 1.02, y: -2 }}>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[var(--color-gold-soft)] flex items-center justify-center flex-shrink-0">
                                        <MapPin className="gold-accent" size={24} />
                                    </div>
                                    <div className="text-left flex-1">
                                        <h3 className="font-semibold text-base theme-text-primary mb-1">Como chegar</h3>
                                        <p className="text-sm theme-text-secondary">
                                            Av. Giovani Rinaldi, 222 <br />
                                            Vila Ramos, Franco da Rocha
                                        </p>
                                    </div>
                                    <ArrowRight className="flex-shrink-0 theme-text-secondary group-hover:gold-accent group-hover:translate-x-1 transition-all" size={20} strokeWidth={2} />
                                </div>
                            </motion.a>
                        </motion.div>

                        {/* Mapa - 3 colunas - Aparece depois no mobile */}
                        <motion.div className="lg:col-span-3 lg:order-1" variants={scaleIn} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}>
                            <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-medium)] border border-[var(--color-border-soft)] h-[350px] lg:h-[400px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1831.7987200787918!2d-46.707770800000006!3d-23.330360300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cee5002f4e5211%3A0x397d3ec318b32732!2sBuffet%20Menina%20Festeira!5e0!3m2!1spt-BR!2sbr!4v1791984588629!5m2!1spt-BR!2sbr"
                                    className="w-full h-full"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    title="Localização do Buffet Menina Festeira"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </main>
    );
}
