import { useState } from "react";
import { Section } from "./components/Section";

const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "diagnostico", label: "Diagnóstico" },
  { id: "roadmap", label: "Hoja de Ruta" },
  { id: "porque-nosotros", label: "¿Por qué nosotros?" },
  { id: "roi", label: "ROI & Inversión" },
  { id: "proximos-pasos", label: "Próximos pasos" }
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function App() {
  const [horasPorDia, setHorasPorDia] = useState(3);
  const [costePorHora, setCostePorHora] = useState(10);
  const [numEmpleados, setNumEmpleados] = useState(2);

  const ahorroSemanal = horasPorDia * numEmpleados * costePorHora * 5;
  const ahorroMensual = ahorroSemanal * 4.33;
  const ahorroAnual = ahorroMensual * 12;

  return (
    <div className="min-h-screen bg-gradient-to-b from-quai-navy via-slate-950 to-slate-950 text-slate-50">
      {/* Barra superior */}
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-quai-navy/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          
          {/* Logo + nombre */}
          <div className="flex items-center gap-3">
            <img
              src="/quai_analytics_logo.png"
              alt="QuAI Analytics"
              className="h-9 w-auto"
            />
            <div>
              <p className="text-sm font-semibold">QuAI Analytics</p>
              <p className="text-[11px] text-slate-400">
                Propuesta Digital – El Alandalus
              </p>
            </div>
          </div>

          {/* Navegación */}
          <nav className="hidden gap-5 text-xs md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-slate-300 hover:text-quai-teal transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

        </div>
      </header>


      {/* Hero / Portada */}
      <Section
        id="inicio"
        eyebrow="Propuesta de Estrategia de Transformación Digital"
        title="De la entrada manual de datos a decisiones con datos en tiempo real."
        description="Propuesta digital preparada por QuAI Analytics para El Alandalus, enfocada en conectar su operación diaria con analítica en la nube, dashboards de negocio y automatización con IA."
        dark

      >
        <div className="grid gap-10 md:grid-cols-[3fr,2fr] md:items-center">
          <div className="space-y-5 text-sm md:text-base text-slate-200">
            <p>
              Hoy, gran parte de la información crítica de El Alandalus vive en reportes manuales, digitación en ERP y archivos locales. Eso consume horas de trabajo y retrasa la toma de decisiones.
            </p>
            <p>
              Nuestra propuesta conecta directamente su ERP con la nube mediante una VPN segura, estructura los datos y despliega dashboards que se actualizan solos, con la opción de automatizar la carga de facturas a través de OCR e IA.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => scrollTo("proximos-pasos")}
                className="rounded-full bg-quai-teal px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-quai-teal/40 hover:bg-quai-teal/90 transition-colors"
              >
                Contactar a QuAI Analytics
              </button>
              <button
                onClick={() => scrollTo("diagnostico")}
                className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-quai-teal hover:text-quai-teal transition-colors"
              >
                Ver diagnóstico
              </button>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 md:p-5 shadow-xl">
            <img
              src="/alandalus_fachada.jpg"
              alt="Transformación Digital - El Alandalus"
              className="h-52 w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Diagnóstico */}
      <Section
        id="diagnostico"
        eyebrow="1 · Diagnóstico"
        title="Nuestro entendimiento del desafío de El Alandalus."
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-red-900/60 bg-gradient-to-br from-red-950 via-slate-950 to-slate-950 p-6">
            <h3 className="text-lg font-bold mb-3">La situación actual</h3>
            <ul className="space-y-2 text-sm text-slate-200">
              <li>
                • <strong>Ceguera operativa:</strong> reportes dependen de
                digitación manual en el ERP.
              </li>
              <li>
                • <strong>Tiempo perdido:</strong> el equipo administrativo
                invierte 2–3 horas diarias transcribiendo facturas.
              </li>
              <li>
                • <strong>Datos aislados:</strong> información clave dispersa en
                PCs locales y hojas de cálculo.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-emerald-900/60 bg-gradient-to-br from-emerald-950 via-slate-950 to-slate-950 p-6">
            <h3 className="text-lg font-bold mb-3"> Nuestra solución</h3>
            <ul className="space-y-2 text-sm text-slate-200">
              <li>
                • <strong>Conexión segura (VPN):</strong> acceso directo al ERP
                sin cambiar el software actual.
              </li>
              <li>
                • <strong>Inteligencia (BI):</strong> dashboards que se
                actualizan automáticamente con ventas y costos.
              </li>
              <li>
                • <strong>Automatización (OCR):</strong> la IA lee facturas y
                propone asientos para el sistema.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Roadmap */}
      <Section
        id="roadmap"
        eyebrow="2 · Hoja de ruta"
        title="La solución propuesta, fase por fase."
        description="Replicamos la estructura de tu roadmap en Streamlit, pero en formato de narrativa web clara para directivos."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
            <p className="text-xs font-semibold tracking-wide text-quai-teal uppercase mb-1">
              Fase 1 · Semana 1
            </p>
            <h3 className="text-base font-semibold mb-2">
              Infraestructura y seguridad
            </h3>
            <ul className="text-sm text-slate-200 space-y-1">
              <li>🔒 Instalación de VPN en la PC de Caja.</li>
              <li>🛡️ Permisos de solo lectura al ERP.</li>
              <li>✅ Pruebas de conexión y cifrado de datos.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
            <p className="text-xs font-semibold tracking-wide text-quai-teal uppercase mb-1">
              Fase 2 · Semanas 1–2
            </p>
            <h3 className="text-base font-semibold mb-2">
              Limpieza y estructura de datos
            </h3>
            <ul className="text-sm text-slate-200 space-y-1">
              <li>🧹 Limpieza y estandarización de datos.</li>
              <li>🔗 Modelado entre ventas, costos e inventario.</li>
              <li>⚙️ Pipelines automáticos (ej. diario o horario).</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
            <p className="text-xs font-semibold tracking-wide text-quai-teal uppercase mb-1">
              Fase 3 · Semana 3
            </p>
            <h3 className="text-base font-semibold mb-2">
              Despliegue de dashboards
            </h3>
            <ul className="text-sm text-slate-200 space-y-1">
              <li>📊 Dashboard de ventas (hora, mesero, plato).</li>
              <li>📉 Dashboard de costos y food cost.</li>
              <li>📱 Acceso móvil para socios.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
            <p className="text-xs font-semibold tracking-wide text-quai-teal uppercase mb-1">
              Fase 4 · Semana 4
            </p>
            <h3 className="text-base font-semibold mb-2">
              Integración de IA / OCR
            </h3>
            <ul className="text-sm text-slate-200 space-y-1">
              <li>🤖 Despliegue del módulo OCR.</li>
              <li>🔄 Conector para proponer asientos contables.</li>
              <li>🧾 Pruebas de precisión con facturas históricas.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
            <p className="text-xs font-semibold tracking-wide text-quai-teal uppercase mb-1">
              Fase 5 · Desde semana 5
            </p>
            <h3 className="text-base font-semibold mb-2">
              Adopción y soporte
            </h3>
            <ul className="text-sm text-slate-200 space-y-1">
              <li>🎓 Entrenamiento al personal.</li>
              <li>📘 Manual de uso y contingencias.</li>
              <li>🤝 Soporte post-lanzamiento básico.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Por qué nosotros */}
      <Section
        id="porque-nosotros"
        eyebrow="3 · Por qué nosotros"
        title="No es solo tecnología; es estrategia de datos aplicada al negocio."
      >
        <p className="max-w-3xl text-sm md:text-base text-slate-200 mb-8">
          Tenemos más de 10 años de experiencia trabajando con datos en
          distintos sectores y acompañando a equipos directivos en la adopción
          de soluciones analíticas y de IA que agregan valor real al negocio.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
            <h3 className="text-base font-semibold mb-1">
              Ing. Ricardo Alvarez
            </h3>
            <p className="text-xs text-quai-teal mb-2">
              MSc, Científico de Datos
            </p>
            <p className="text-sm text-slate-200">
              Experto en Analítica Avanzada de Datos y Gestión Estratégica de
              Negocios. Lidera el diseño de la solución, priorización de KPIs y
              asegura que la implementación responda a los objetivos del negocio.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
            <h3 className="text-base font-semibold mb-1">
              Ing. Alexander Cuadra
            </h3>
            <p className="text-xs text-quai-teal mb-2">
              MBA, MS, Ingeniero de Datos
            </p>
            <p className="text-sm text-slate-200">
              Especialista en Analítica e Ingeniería de Datos. Se enfoca en la
              conexión con el ERP, la calidad de los datos y la robustez de la
              infraestructura en la nube.
            </p>
          </div>
          </div>
      </Section>

      {/* ROI e inversión */}
      <Section
        id="roi"
        eyebrow="4 · Inversión y retorno"
        title="Calculadora de ahorro e inversión para El Alandalus."

      >
        <div className="grid gap-10 md:grid-cols-[2fr,3fr] md:items-start">
          <div className="space-y-4 text-sm text-slate-200">
            <p>
              La solución está diseñada para liberar tiempo del equipo y reducir errores manuales. La calculadora permite estimar el impacto económico anual de automatizar la digitación y los reportes.
            </p>
            <p>
              Ajusta las horas diarias ahorradas, el coste por hora y el número de personas involucradas para ver cómo se comporta el ahorro estimado.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 text-sm">
            <h3 className="text-base font-semibold mb-4">
              Calculadora de ROI interactiva
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span>Horas diarias ahorradas</span>
                  <span className="font-semibold text-quai-teal">
                    {horasPorDia.toFixed(1)} h/día
                  </span>
                </div>
                <input
                  type="range"
                  min={0.5}
                  max={8}
                  step={0.5}
                  value={horasPorDia}
                  onChange={(e) => setHorasPorDia(Number(e.target.value))}
                  className="w-full accent-quai-teal"
                />
              </div>
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span>Coste promedio por hora (USD)</span>
                  <span className="font-semibold text-quai-teal">
                    ${costePorHora.toFixed(0)}
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={20}
                  step={1}
                  value={costePorHora}
                  onChange={(e) => setCostePorHora(Number(e.target.value))}
                  className="w-full accent-quai-teal"
                />
              </div>
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span>Número de empleados involucrados</span>
                  <span className="font-semibold text-quai-teal">
                    {numEmpleados}
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={10}
                  step={1}
                  value={numEmpleados}
                  onChange={(e) => setNumEmpleados(Number(e.target.value))}
                  className="w-full accent-quai-teal"
                />
              </div>
              <div className="mt-2 space-y-1 text-slate-200">
                <p>
                  • Ahorro semanal estimado: <span className="font-semibold">${ahorroSemanal.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </p>
                <p>
                  • Ahorro mensual (4.33 semanas): <span className="font-semibold">${ahorroMensual.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </p>
                <p>
                  • Ahorro anual estimado: <span className="font-semibold text-quai-teal">${ahorroAnual.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </p>
              </div>
              <p className="mt-2 text-[11px] text-slate-400">
                Este cálculo está inspirado en la lógica de tu app de Streamlit. En la reunión ajustaremos los valores a la realidad de El Alandalus para construir el caso de negocio final.
              </p>
            </div>
          </div>
        </div>
        {/* Paquetes de inversión */}
        <div className="mt-14">
          <h3 className="text-lg font-semibold mb-4">Inversión y alcance</h3>
          <p className="text-sm text-slate-200 mb-6">
            Para El Alandalus, hemos diseñado dos rutas principales de implementación. Recomendamos el <span className="font-semibold">Plan B: Automatización Completa</span> para maximizar el ahorro de horas hombre.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Plan A */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
              <p className="text-xs font-semibold text-slate-400 mb-1">📍 Plan A</p>
              <h4 className="text-base font-semibold mb-2">Control y Visibilidad</h4>
              <p className="text-xs text-slate-300 mb-3">Ideal si la prioridad inmediata es ver qué pasa en el negocio, aunque la digitación de facturas siga siendo manual.</p>
              <ul className="text-sm text-slate-200 space-y-1 mb-4">
                <li>✅ Infraestructura: instalación de VPN segura.</li>
                <li>✅ Ingeniería de datos: conexión y limpieza del ERP.</li>
                <li>✅ Dashboards BI: ventas, costos y análisis de menú.</li>
                <li>❌ No incluye módulo de escaneo de facturas (OCR).</li>
              </ul>
              <p className="text-sm font-semibold">Inversión única: <span className="line-through text-slate-400 mr-2">$1,500</span>$1,400</p>
              <p className="text-[11px] text-slate-400">Tiempo de entrega estimado: 3 semanas.</p>
            </div>
            {/* Plan B (recomendado) */}
            <div className="rounded-2xl border border-quai-teal/60 bg-slate-950/90 p-5">
              <p className="text-xs font-semibold text-quai-teal mb-1">🚀 Plan B (Recomendado)</p>
              <h4 className="text-base font-semibold mb-2">Automatización (BI + OCR)</h4>
              <p className="text-xs text-slate-300 mb-3">La solución completa: elimina la ceguera operativa y también la digitación manual.</p>
              <ul className="text-sm text-slate-200 space-y-1 mb-4">
                <li>✨ Todo lo incluido en el Plan A.</li>
                <li>✅ App de OCR para lectura automática de facturas.</li>
                <li>✅ Automatización de inyección de datos (Proveedor, ITBMS, totales).</li>
                <li>✅ Capacitación inicial al personal.</li>
                <li>✅ Soporte de lanzamiento (1 mes de monitoreo).</li>
              </ul>
              <p className="text-sm font-semibold">Inversión única: <span className="line-through text-slate-400 mr-2">$2,500</span>$2,400</p>
              <p className="text-[11px] text-slate-400">Tiempo de entrega estimado: 5–6 semanas. </p>
            </div>
          </div>
        </div>
        {/* Opciones de monitoreo mensual */}
        <div className="mt-8">
          <h4 className="text-base font-semibold mb-4 text-quai-teal">Opciones de Monitoreo Mensual</h4>
          <div className="grid gap-4 md:grid-cols-3">
            {/* Sin Monitoreo */}
            <div className="rounded-xl border border-yellow-400 bg-slate-950/80 p-5 flex flex-col justify-between">
              <h5 className="text-sm font-bold mb-2 text-slate-100">Auto-gestión</h5>
              <ul className="text-xs text-slate-200 mb-2 space-y-1">
                <li>❌ No incluye revisión manual ni soporte por QuAI.</li>
              </ul>
              <div className="mt-2 text-quai-teal font-bold text-lg">$0<span className="text-xs">/mes</span></div>
              <div className="mt-2 text-[11px] text-yellow-400">
                ⚠️ Nota: Cualquier incidente, reconexión o falla futura ajena al proceso automatizado será atendida bajo cotización por hora técnica 
                (Tarifa estándar: $50/hora).
              </div>
            </div>
            {/* Monitoreo Basico */}
                <div className="rounded-xl border border-slate-700 bg-slate-950/80 p-5 flex flex-col justify-between">
                  <h5 className="text-sm font-bold text-slate-100">Monitoreo A <span className="text-xs bg-slate-100/20 text-slate-100 rounded px-2 ml-2">Básico</span></h5>
                  <ul className="text-xs text-slate-200 mb-2 space-y-1">
                    <li>🔔 Monitoreo de Hosting, VPN e infraestructura.</li>
                    <li>🐛 Soporte técnico de errores.</li>
                    <li>🔄 Monitoreo de reportes y dashboards.</li>
                  </ul>
                  <div className="mt-2 text-slate-100 font-bold text-lg">$50<span className="text-xs">/mes</span></div>
                  <div className="mt-2 text-[11px] text-yellow-400">
                ⚠️ Nota: Cualquier incidente, reconexión o mejora futura ajena al proceso automatizado será atendida bajo cotización por hora técnica 
                (Tarifa estándar: $50/hora).
                </div>
                </div>
            {/* Monitoreo Premium */}
            <div className="rounded-xl border border-slate-700 bg-slate-950/80 p-5 flex flex-col justify-between">
              <h5 className="text-sm font-bold text-slate-100">Monitoreo B <span className="text-xs bg-slate-100/20 text-slate-100 rounded px-2 ml-2">Avanzado</span></h5>
              <ul className="text-xs text-slate-200 mb-2 space-y-1">
                <li>🔔 Monitoreo de Hosting, VPN e infraestructura.</li>
                <li>🛠️ Soporte técnico y mejoras incluidas*.</li>
                <li>🔄 Monitoreo y actualizaciones de reportes y dashboards*.</li>
              </ul>
              <div className="mt-2 text-slate-100 font-bold text-lg"><span className="line-through text-slate-400 mr-2">$100</span>$90<span className="text-xs">/mes</span></div>
              <div className="mt-2 text-[11px] text-slate-100">
               *El monitoreo avanzado incluye 2 horas de soporte técnico o actualización al mes. Cualquier hora adicional se cotizará a $50/hora.
              </div>
            </div>
          </div>
        </div>
        <hr className="my-2 border-slate-700" />
        <div className="text-xs text-slate-400 mt-2">☁️  <span className="font-semibold">El costo de mantener el Hosting e Infraestructura corre por cuenta del cliente</span>.</div>
      </Section>

      {/* Próximos pasos */}
      <Section
        id="proximos-pasos"
        eyebrow="5 · Próximos pasos"
        title="Cómo avanzar desde aquí."
        description="El siguiente paso es una reunión de 30 minutos para revisar esta propuesta, ajustar el alcance y definir una fecha de inicio tentativa."
        dark
      >
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-3 text-sm text-slate-200">
            <p>En esa conversación podemos:</p>
            <ul className="space-y-2">
              <li>• Validar alcance técnico (ERP, VPN, usuarios, permisos).</li>
              <li>• Priorizar dashboards y vistas que más valoren los socios.</li>
              <li>
                • Alinear inversión, tiempos de entrega y soporte post-lanzamiento.
              </li>
            </ul>
            <p>
              Si ambas partes ven encaje, avanzamos a formalizar el acuerdo y
              calendarizar la Fase 1.
            </p>
          </div>
          <div className="rounded-2xl border border-quai-teal/50 bg-slate-950/90 p-5 text-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-quai-teal mb-2">
              Contacto
            </p>
            <p className="text-slate-100 font-semibold mb-1">
              QuAI Analytics
            </p>
            <p className="text-slate-300 mb-2">
              info@quaianalytics.com · (+507) 6820‑1544
            </p>
            <a
              href="https://wa.me/50768201544?text=Hola,%20me%20interesa%20la%20propuesta%20digital%20para%20El%20Alandalus.%20¿Podemos%20agendar%20una%20reunión%20de%2030%20minutos?"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-full bg-quai-teal px-4 py-2.5 text-center text-sm font-semibold text-slate-950 shadow-lg shadow-quai-teal/40 hover:bg-quai-teal/90 transition-colors"
            >
              💬 Contactar por WhatsApp
            </a>
          </div>
        </div>
        <p className="mt-8 text-[11px] text-slate-500">
          © {new Date().getFullYear()} QuAI Analytics. Propuesta confidencial,
          preparada exclusivamente para El Alandalus.
        </p>
      </Section>
    {/* Footer */}
    <footer className="mt-16">
      <div className="bg-[#bdbdbd] py-12 px-8">
        <h2 className="text-2xl font-semibold mb-6 text-black">Contacto y Ubicacion</h2>
        <div className="text-black text-lg space-y-3">
          <div>soporte@compuserviciospty.com</div>
          <div>Cell y WhatsApp: (+507) 6679-1844</div>
          <div>PH Venice Place – Torres de Milan<br/>Ancon , Panama. Via Centennial</div>
          <div>Horarios de Lunes a Viernes POR CITA.<br/>(Sabado y Domingo sujeto a disponibilidad POR CITA)</div>
        </div>
      </div>
      <div className="bg-black text-white text-xs py-4 px-8 flex items-center justify-between">
        <span>© COMPUSERVICIOS PTY 2026 Sitio Construido por Ruben Alvarez.</span>
      </div>
    </footer>
  </div>
  );
}

