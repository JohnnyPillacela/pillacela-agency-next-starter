import type { FaqDict } from "@/types/dictionary"

export const faqDict = {
    en: {
        title: "Frequently Asked Questions",
        description: "Everything you need to know about working with us.",
        items: [
            // General
            {
                question: "What services do you offer?",
                answer: "We design and build websites, create brand identities, and run SEO campaigns for small and local businesses. Everything is handled in-house — no outsourcing.",
            },
            {
                question: "How do we get started?",
                answer: "Just reach out through the contact form. We'll schedule a quick call to learn about your business and put together a proposal within a few days.",
            },
            {
                question: "How much does a project cost?",
                answer: "Pricing depends on scope. A basic website starts around $1,500, while full branding and SEO packages vary. We'll give you a clear, itemized quote before any work begins.",
            },
            // Project
            {
                question: "How long does a website take?",
                answer: "Most sites go live within 2–4 weeks. Larger projects with custom features can take longer. We'll agree on a timeline upfront and keep you updated throughout.",
            },
            {
                question: "How many revisions are included?",
                answer: "Every project includes two rounds of revisions. We find that's enough to get things right without scope creep. Additional rounds can be added if needed.",
            },
            {
                question: "What do you need from me?",
                answer: "Mostly your time for a few conversations and any existing assets — logo, photos, brand colors. If you don't have those yet, we can help create them.",
            },
            // Support
            {
                question: "What happens after the site launches?",
                answer: "We offer a 30-day post-launch window to fix any bugs at no charge. After that, we have affordable maintenance plans for updates, backups, and ongoing changes.",
            },
            {
                question: "Do you guarantee your work?",
                answer: "Yes. We stand behind everything we deliver. If something isn't right, we'll fix it. Our goal is a long-term relationship, not a one-time transaction.",
            },
            {
                question: "Can you help if I already have a website?",
                answer: "Absolutely. We can redesign, improve performance, fix issues, or take over ongoing maintenance for existing sites — regardless of who built them.",
            },
        ],
    } satisfies FaqDict,
    es: {
        title: "Preguntas Frecuentes",
        description: "Todo lo que necesitas saber sobre cómo trabajamos.",
        items: [
            // General
            {
                question: "¿Qué servicios ofrecen?",
                answer: "Diseñamos y desarrollamos sitios web, creamos identidades de marca y gestionamos campañas de SEO para negocios locales y pequeñas empresas. Todo se maneja internamente, sin subcontratación.",
            },
            {
                question: "¿Cómo empezamos?",
                answer: "Solo contáctanos a través del formulario. Agendamos una llamada rápida para conocer tu negocio y te enviamos una propuesta en pocos días.",
            },
            {
                question: "¿Cuánto cuesta un proyecto?",
                answer: "El precio depende del alcance. Un sitio web básico empieza alrededor de $1,500, mientras que los paquetes de marca y SEO varían. Te daremos una cotización clara y detallada antes de comenzar cualquier trabajo.",
            },
            // Proyecto
            {
                question: "¿Cuánto tarda en estar listo un sitio web?",
                answer: "La mayoría de los sitios se publican en 2 a 4 semanas. Los proyectos más grandes con funciones personalizadas pueden tomar más tiempo. Acordamos el cronograma desde el inicio y te mantenemos informado.",
            },
            {
                question: "¿Cuántas revisiones están incluidas?",
                answer: "Cada proyecto incluye dos rondas de revisiones. Generalmente es suficiente para lograr el resultado ideal sin exceder el alcance. Se pueden agregar rondas adicionales si es necesario.",
            },
            {
                question: "¿Qué necesitan de mi parte?",
                answer: "Principalmente tu tiempo para algunas conversaciones y cualquier recurso existente: logotipo, fotos, colores de marca. Si aún no los tienes, podemos ayudarte a crearlos.",
            },
            // Soporte
            {
                question: "¿Qué pasa después del lanzamiento?",
                answer: "Ofrecemos una ventana de 30 días después del lanzamiento para corregir errores sin costo. Luego tenemos planes de mantenimiento accesibles para actualizaciones, copias de seguridad y cambios continuos.",
            },
            {
                question: "¿Garantizan su trabajo?",
                answer: "Sí. Respaldamos todo lo que entregamos. Si algo no está bien, lo corregimos. Nuestro objetivo es una relación a largo plazo, no una transacción puntual.",
            },
            {
                question: "¿Pueden ayudarme si ya tengo un sitio web?",
                answer: "Por supuesto. Podemos rediseñar, mejorar el rendimiento, corregir problemas o hacernos cargo del mantenimiento de sitios existentes, sin importar quién los haya construido.",
            },
        ],
    } satisfies FaqDict,
} as const
