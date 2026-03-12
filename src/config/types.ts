// ─── Proposal Template Config Types ───────────────────────────────────────────
// Cada propuesta de cliente se define con este schema.
// Las secciones marcadas con "?" son opcionales y no se renderizan si están ausentes.

export interface NavItem {
  id: string;
  label: string;
}

export interface DiagnosticItem {
  bold: string;
  text: string;
}

export interface RoadmapPhase {
  label: string;       // ej. "Fase 1 · Semana 1"
  title: string;
  items: string[];     // Bullet points con emojis
}

export interface TeamMember {
  name: string;
  credentials: string; // ej. "MSc, Científico de Datos"
  bio: string;
}

export interface ROISlider {
  label: string;
  key: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  unit?: string;       // ej. "h/día", "$"
}

export interface ROICalculatorConfig {
  title: string;
  sliders: ROISlider[];
  // Fórmula: se calcula en el componente usando los valores de los sliders
  // por defecto: semanal = slider1 * slider2 * slider3 * 5
  formulaDescription?: string;
  footnote?: string;
}

export interface PricingPlan {
  tag: string;             // ej. "📍 Plan A", "🚀 Plan B (Recomendado)"
  title: string;
  description: string;
  features: string[];      // Items con ✅/❌/✨
  price: string;           // ej. "$1,400"
  originalPrice?: string;  // ej. "$1,500" (tachado)
  deliveryTime?: string;   // ej. "3 semanas"
  recommended?: boolean;   // Borde highlight
}

export interface MonitoringOption {
  title: string;
  badge?: string;          // ej. "Básico", "Avanzado"
  features: string[];
  price: string;           // ej. "$50"
  priceUnit?: string;      // ej. "/mes"
  originalPrice?: string;
  footnote?: string;
  borderColor?: string;    // Tailwind border class ej. "border-yellow-400"
}

export interface ContactInfo {
  companyName: string;
  email: string;
  phone: string;
  whatsappNumber: string;  // ej. "50768201544"
  whatsappMessage: string; // Texto pre-llenado del link de WhatsApp
}

export interface FooterConfig {
  contactTitle?: string;
  email: string;
  phone: string;
  address: string[];       // Líneas de dirección
  hours: string;
  copyright: string;
}

export interface ProposalConfig {
  // ── Identificación ──
  clientName: string;
  clientSlug: string;

  // ── Assets ──
  clientLogo?: string;     // Ruta en /public/
  clientImage?: string;    // Imagen hero

  // ── Navegación ──
  navItems: NavItem[];

  // ── Hero ──
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    paragraphs: string[];
    ctaPrimary: { label: string; targetSection: string };
    ctaSecondary?: { label: string; targetSection: string };
  };

  // ── Diagnóstico (opcional) ──
  diagnostic?: {
    eyebrow: string;
    title: string;
    currentSituation: { title: string; items: DiagnosticItem[] };
    proposedSolution: { title: string; items: DiagnosticItem[] };
  };

  // ── Roadmap (opcional) ──
  roadmap?: {
    eyebrow: string;
    title: string;
    description?: string;
    phases: RoadmapPhase[];
  };

  // ── Equipo (opcional) ──
  team?: {
    eyebrow: string;
    title: string;
    intro: string;
    members: TeamMember[];
  };

  // ── Inversión (opcional) ──
  investment?: {
    eyebrow: string;
    title: string;
    description: string[];
    roiCalculator?: ROICalculatorConfig;
    plans: PricingPlan[];
    monitoring?: MonitoringOption[];
    footnotes?: string[];
  };

  // ── Próximos pasos ──
  nextSteps: {
    eyebrow: string;
    title: string;
    description: string;
    bullets: string[];
    closingText: string;
    contact: ContactInfo;
  };

  // ── Footer (opcional) ──
  footer?: FooterConfig;
}
