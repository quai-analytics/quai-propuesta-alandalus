import type { ProposalConfig } from "../types";

const config: ProposalConfig = {
    // ── Identificación ──
    clientName: "El Alandalus",
    clientSlug: "el-alandalus",
    clientLogo: "/quai_analytics_logo.png",
    clientImage: "/alandalus_fachada.jpg",

    // ── Navegación ──
    navItems: [
        { id: "inicio", label: "Inicio" },
        { id: "diagnostico", label: "Diagnóstico" },
        { id: "roadmap", label: "Hoja de Ruta" },
        { id: "porque-nosotros", label: "¿Por qué nosotros?" },
        { id: "roi", label: "ROI & Inversión" },
        { id: "proximos-pasos", label: "Próximos pasos" },
    ],

    // ── Hero ──
    hero: {
        eyebrow: "Propuesta de Estrategia de Transformación Digital",
        title: "De la entrada manual de datos a decisiones con datos en tiempo real.",
        description:
            "Propuesta digital preparada por QuAI Analytics para El Alandalus, enfocada en conectar su operación diaria con analítica en la nube, dashboards de negocio y automatización con IA.",
        paragraphs: [
            "Hoy, gran parte de la información crítica de El Alandalus vive en reportes manuales, digitación en ERP y archivos locales. Eso consume horas de trabajo y retrasa la toma de decisiones.",
            "Nuestra propuesta conecta directamente su ERP con la nube mediante una VPN segura, estructura los datos y despliega dashboards que se actualizan solos, con la opción de automatizar la carga de facturas a través de OCR e IA.",
        ],
        ctaPrimary: {
            label: "Contactar a QuAI Analytics",
            targetSection: "proximos-pasos",
        },
        ctaSecondary: {
            label: "Ver diagnóstico",
            targetSection: "diagnostico",
        },
    },

    // ── Diagnóstico ──
    diagnostic: {
        eyebrow: "1 · Diagnóstico",
        title: "Nuestro entendimiento del desafío de El Alandalus.",
        currentSituation: {
            title: "La situación actual",
            items: [
                {
                    bold: "Ceguera operativa:",
                    text: "reportes dependen de digitación manual en el ERP.",
                },
                {
                    bold: "Tiempo perdido:",
                    text: "el equipo administrativo invierte 2–3 horas diarias transcribiendo facturas.",
                },
                {
                    bold: "Datos aislados:",
                    text: "información clave dispersa en PCs locales y hojas de cálculo.",
                },
            ],
        },
        proposedSolution: {
            title: "Nuestra solución",
            items: [
                {
                    bold: "Conexión segura (VPN):",
                    text: "acceso directo al ERP sin cambiar el software actual.",
                },
                {
                    bold: "Inteligencia (BI):",
                    text: "dashboards que se actualizan automáticamente con ventas y costos.",
                },
                {
                    bold: "Automatización (OCR):",
                    text: "la IA lee facturas y propone asientos para el sistema.",
                },
            ],
        },
    },

    // ── Roadmap ──
    roadmap: {
        eyebrow: "2 · Hoja de ruta",
        title: "La solución propuesta, fase por fase.",
        description:
            "Replicamos la estructura de tu roadmap en Streamlit, pero en formato de narrativa web clara para directivos.",
        phases: [
            {
                label: "Fase 1 · Semana 1",
                title: "Infraestructura y seguridad",
                items: [
                    "🔒 Instalación de VPN en la PC de Caja.",
                    "🛡️ Permisos de solo lectura al ERP.",
                    "✅ Pruebas de conexión y cifrado de datos.",
                ],
            },
            {
                label: "Fase 2 · Semanas 1–2",
                title: "Limpieza y estructura de datos",
                items: [
                    "🧹 Limpieza y estandarización de datos.",
                    "🔗 Modelado entre ventas, costos e inventario.",
                    "⚙️ Pipelines automáticos (ej. diario o horario).",
                ],
            },
            {
                label: "Fase 3 · Semana 3",
                title: "Despliegue de dashboards",
                items: [
                    "📊 Dashboard de ventas (hora, mesero, plato).",
                    "📉 Dashboard de costos y food cost.",
                    "📱 Acceso móvil para socios.",
                ],
            },
            {
                label: "Fase 4 · Semana 4",
                title: "Integración de IA / OCR",
                items: [
                    "🤖 Despliegue del módulo OCR.",
                    "🔄 Conector para proponer asientos contables.",
                    "🧾 Pruebas de precisión con facturas históricas.",
                ],
            },
            {
                label: "Fase 5 · Desde semana 5",
                title: "Adopción y soporte",
                items: [
                    "🎓 Entrenamiento al personal.",
                    "📘 Manual de uso y contingencias.",
                    "🤝 Soporte post-lanzamiento básico.",
                ],
            },
        ],
    },

    // ── Equipo ──
    team: {
        eyebrow: "3 · Por qué nosotros",
        title: "No es solo tecnología; es estrategia de datos aplicada al negocio.",
        intro:
            "Tenemos más de 10 años de experiencia trabajando con datos en distintos sectores y acompañando a equipos directivos en la adopción de soluciones analíticas y de IA que agregan valor real al negocio.",
        members: [
            {
                name: "Ing. Ricardo Alvarez",
                credentials: "MSc, Científico de Datos",
                bio: "Experto en Analítica Avanzada de Datos y Gestión Estratégica de Negocios. Lidera el diseño de la solución, priorización de KPIs y asegura que la implementación responda a los objetivos del negocio.",
            },
            {
                name: "Ing. Alexander Cuadra",
                credentials: "MBA, MS, Ingeniero de Datos",
                bio: "Especialista en Analítica e Ingeniería de Datos. Se enfoca en la conexión con el ERP, la calidad de los datos y la robustez de la infraestructura en la nube.",
            },
        ],
    },

    // ── Inversión ──
    investment: {
        eyebrow: "4 · Inversión y retorno",
        title: "Calculadora de ahorro e inversión para El Alandalus.",
        description: [
            "La solución está diseñada para liberar tiempo del equipo y reducir errores manuales. La calculadora permite estimar el impacto económico anual de automatizar la digitación y los reportes.",
            "Ajusta las horas diarias ahorradas, el coste por hora y el número de personas involucradas para ver cómo se comporta el ahorro estimado.",
        ],
        roiCalculator: {
            title: "Calculadora de ROI interactiva",
            sliders: [
                {
                    label: "Horas diarias ahorradas",
                    key: "horasPorDia",
                    min: 0.5,
                    max: 8,
                    step: 0.5,
                    defaultValue: 3,
                    unit: "h/día",
                },
                {
                    label: "Coste promedio por hora (USD)",
                    key: "costePorHora",
                    min: 1,
                    max: 20,
                    step: 1,
                    defaultValue: 10,
                    unit: "$",
                },
                {
                    label: "Número de empleados involucrados",
                    key: "numEmpleados",
                    min: 1,
                    max: 10,
                    step: 1,
                    defaultValue: 2,
                },
            ],
            footnote:
                "Este cálculo está inspirado en la lógica de tu app de Streamlit. En la reunión ajustaremos los valores a la realidad de El Alandalus para construir el caso de negocio final.",
        },
        plans: [
            {
                tag: "📍 Plan A",
                title: "Control y Visibilidad",
                description:
                    "Ideal si la prioridad inmediata es ver qué pasa en el negocio, aunque la digitación de facturas siga siendo manual.",
                features: [
                    "✅ Infraestructura: instalación de VPN segura.",
                    "✅ Ingeniería de datos: conexión y limpieza del ERP.",
                    "✅ Dashboards BI: ventas, costos y análisis de menú.",
                    "❌ No incluye módulo de escaneo de facturas (OCR).",
                ],
                price: "$1,400",
                originalPrice: "$1,500",
                deliveryTime: "Tiempo de entrega estimado: 3 semanas.",
                recommended: false,
            },
            {
                tag: "🚀 Plan B (Recomendado)",
                title: "Automatización (BI + OCR)",
                description:
                    "La solución completa: elimina la ceguera operativa y también la digitación manual.",
                features: [
                    "✨ Todo lo incluido en el Plan A.",
                    "✅ App de OCR para lectura automática de facturas.",
                    "✅ Automatización de inyección de datos (Proveedor, ITBMS, totales).",
                    "✅ Capacitación inicial al personal.",
                    "✅ Soporte de lanzamiento (1 mes de monitoreo).",
                ],
                price: "$2,400",
                originalPrice: "$2,500",
                deliveryTime: "Tiempo de entrega estimado: 5–6 semanas.",
                recommended: true,
            },
        ],
        monitoring: [
            {
                title: "Auto-gestión",
                features: [
                    "❌ No incluye revisión manual ni soporte por QuAI.",
                ],
                price: "$0",
                priceUnit: "/mes",
                borderColor: "border-yellow-400",
                footnote:
                    "⚠️ Nota: Cualquier incidente, reconexión o falla futura ajena al proceso automatizado será atendida bajo cotización por hora técnica (Tarifa estándar: $50/hora).",
            },
            {
                title: "Monitoreo A",
                badge: "Básico",
                features: [
                    "🔔 Monitoreo de Hosting, VPN e infraestructura.",
                    "🐛 Soporte técnico de errores.",
                    "🔄 Monitoreo de reportes y dashboards.",
                ],
                price: "$50",
                priceUnit: "/mes",
                borderColor: "border-slate-700",
                footnote:
                    "⚠️ Nota: Cualquier incidente, reconexión o mejora futura ajena al proceso automatizado será atendida bajo cotización por hora técnica (Tarifa estándar: $50/hora).",
            },
            {
                title: "Monitoreo B",
                badge: "Avanzado",
                features: [
                    "🔔 Monitoreo de Hosting, VPN e infraestructura.",
                    "🛠️ Soporte técnico y mejoras incluidas*.",
                    "🔄 Monitoreo y actualizaciones de reportes y dashboards*.",
                ],
                price: "$90",
                originalPrice: "$100",
                priceUnit: "/mes",
                borderColor: "border-slate-700",
                footnote:
                    "*El monitoreo avanzado incluye 2 horas de soporte técnico o actualización al mes. Cualquier hora adicional se cotizará a $50/hora.",
            },
        ],
        footnotes: [
            "☁️ El costo de mantener el Hosting e Infraestructura corre por cuenta del cliente.",
        ],
    },

    // ── Próximos pasos ──
    nextSteps: {
        eyebrow: "5 · Próximos pasos",
        title: "Cómo avanzar desde aquí.",
        description:
            "El siguiente paso es una reunión de 30 minutos para revisar esta propuesta, ajustar el alcance y definir una fecha de inicio tentativa.",
        bullets: [
            "Validar alcance técnico (ERP, VPN, usuarios, permisos).",
            "Priorizar dashboards y vistas que más valoren los socios.",
            "Alinear inversión, tiempos de entrega y soporte post-lanzamiento.",
        ],
        closingText:
            "Si ambas partes ven encaje, avanzamos a formalizar el acuerdo y calendarizar la Fase 1.",
        contact: {
            companyName: "QuAI Analytics",
            email: "info@quaianalytics.com",
            phone: "(+507) 6820‑1544",
            whatsappNumber: "50768201544",
            whatsappMessage:
                "Hola, me interesa la propuesta digital para El Alandalus. ¿Podemos agendar una reunión de 30 minutos?",
        },
    },

    // ── Footer ──
    footer: {
        contactTitle: "Contacto y Ubicacion",
        email: "soporte@compuserviciospty.com",
        phone: "Cell y WhatsApp: (+507) 6679-1844",
        address: [
            "PH Venice Place – Torres de Milan",
            "Ancon, Panama. Via Centennial",
        ],
        hours:
            "Horarios de Lunes a Viernes POR CITA. (Sabado y Domingo sujeto a disponibilidad POR CITA)",
        copyright: "© COMPUSERVICIOS PTY 2026 Sitio Construido por Ruben Alvarez.",
    },
};

export default config;
