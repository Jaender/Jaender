/**
 * Blog and Articles Data & Viewer
 * Styled with Oyster Silk & Warm Silver aesthetic
 */

const BLOG_ARTICLES = [
  {
    id: 'fabric-production-lessons',
    title: 'De Lakehouse tradicional a Microsoft Fabric: Arquitectura, gobernanza y lecciones aprendidas',
    date: 'Octubre 2026',
    readTime: '6 min de lectura',
    category: 'Arquitectura Cloud',
    tags: ['Microsoft Fabric', 'OneLake', 'Databricks', 'Gobernanza'],
    summary: 'Análisis técnico sobre la transición de arquitecturas analíticas aisladas hacia plataformas unificadas tipo Fabric, abordando los retos de sincronización delta, rendimiento semántico y control de costos.',
    content: `
      <p class="lead text-lg text-stone-800 dark:text-stone-200 font-medium mb-6">
        Durante los últimos años, la arquitectura estándar en la industria consistía en separar los componentes de almacenamiento (ADLS Gen2), cómputo distribuido (Azure Databricks o Synapse) y consumo analítico (Power BI). Con la consolidación de <strong>Microsoft Fabric</strong> y su paradigma OneLake, esta ecuación ha cambiado radicalmente.
      </p>

      <h3 class="text-xl font-bold text-[#1A1918] dark:text-[#FAF9F6] mt-8 mb-4">1. El Verdadero Reto: Unificación Semántica</h3>
      <p class="mb-4 text-stone-700 dark:text-stone-300">
        La promesa de "un solo lago para toda la organización" es atractiva, pero el desafío crítico que encontramos al migrar plataformas como ODS o sistemas centrales no es el almacenamiento en formato Delta Parquet, sino la <strong>gobernanza semántica</strong>. Cuando múltiples unidades de negocio consultan las mismas fuentes mediante accesos directos (shortcuts), la estandarización de catálogos y metadatos se convierte en el pilar que previene el caos.
      </p>

      <h3 class="text-xl font-bold text-[#1A1918] dark:text-[#FAF9F6] mt-8 mb-4">2. Rendimiento Direct Lake vs. Modos Tradicionales</h3>
      <p class="mb-4 text-stone-700 dark:text-stone-300">
        El modo <em>Direct Lake</em> permite a los modelos semánticos de Power BI leer directamente archivos Parquet en memoria sin importar datos ni ejecutar consultas lentas sobre orígenes relacionales. No obstante, mantener las tablas dentro del umbral de memoria requiere una estrategia rigurosa de particionamiento, mantenimiento delta (vacuum y optimize) y limpieza de esquemas.
      </p>

      <h3 class="text-xl font-bold text-[#1A1918] dark:text-[#FAF9F6] mt-8 mb-4">3. Conclusiones y Hoja de Ruta</h3>
      <p class="mb-4 text-stone-700 dark:text-stone-300">
        Migrar a Fabric no debe tratarse como un simple cambio de herramienta, sino como una modernización del modelo operativo de datos: desacoplar la lógica de negocio de las tuberías y empoderar a los dominios bajo un gobierno federado pero centralizado en calidad.
      </p>
    `
  },
  {
    id: 'ai-agents-smartops',
    title: 'Más allá del Dashboard: Construcción de Agentes de IA y Modelos Semánticos para SmartOps',
    date: 'Septiembre 2026',
    readTime: '8 min de lectura',
    category: 'IA & Analítica',
    tags: ['SmartOps', 'AI Agents', 'LLMs', 'Modelos Semánticos'],
    summary: 'Cómo conectar pipelines analíticos con agentes autónomos capaces de monitorizar la operación, detectar anomalías operativas y recomendar acciones proactivas en tiempo real.',
    content: `
      <p class="lead text-lg text-stone-800 dark:text-stone-200 font-medium mb-6">
        Los paneles de control tradicionales son reactivos: requieren que un analista humano ingrese, filtre, interprete y luego tome una acción. El paradigma <strong>SmartOps</strong> integra modelos de lenguaje y agentes autónomos directamente sobre los pipelines de datos para convertir la analítica en resolución automatizada.
      </p>

      <h3 class="text-xl font-bold text-[#1A1918] dark:text-[#FAF9F6] mt-8 mb-4">1. La Capa Semántica como Fuente de Verdad del Agente</h3>
      <p class="mb-4 text-stone-700 dark:text-stone-300">
        Un agente de IA sin una capa semántica estructurada comete errores de alucinación con métricas financieras y operativas. Al estructurar un modelo de datos con definiciones canónicas estrictas (definición formal de margen, inventario, flujo volumétrico), el agente puede invocar herramientas de consulta con precisión matemática y devolver diagnósticos contextualizados.
      </p>

      <h3 class="text-xl font-bold text-[#1A1918] dark:text-[#FAF9F6] mt-8 mb-4">2. Arquitectura de Pipelines Event-Driven</h3>
      <p class="mb-4 text-stone-700 dark:text-stone-300">
        La combinación de ingesta continua en Azure/Fabric con funciones serverless que disparan agentes de diagnóstico permite identificar cuellos de botella de red o desviaciones de volumen en minutos, notificando a los ingenieros antes de que se impacten los acuerdos de nivel de servicio (SLAs).
      </p>
    `
  },
  {
    id: 'data-strategy-roi',
    title: 'Estrategia de Datos vs. Hype Tecnológico: Cómo medir el verdadero ROI en Analítica',
    date: 'Julio 2026',
    readTime: '5 min de lectura',
    category: 'Estrategia & Liderazgo',
    tags: ['Estrategia', 'ROI', 'Gobernanza', 'Cultura Data-Driven'],
    summary: 'Reflexión tras más de 15 años y 80 proyectos en múltiples industrias: por qué el principal obstáculo en la transformación digital no es tecnológico, sino la alineación con la toma de decisiones ejecutivas.',
    content: `
      <p class="lead text-lg text-stone-800 dark:text-stone-200 font-medium mb-6">
        En más de una década y media liderando iniciativas analíticas para sectores como Petróleo y Gas, Banca, Telecomunicaciones y Consumo Masivo, el patrón más común de fracaso no ha sido la elección del motor de base de datos ni el algoritmo de Machine Learning, sino la desconexión con el valor real del negocio.
      </p>

      <h3 class="text-xl font-bold text-[#1A1918] dark:text-[#FAF9F6] mt-8 mb-4">1. La trampa del "Construyamos el Data Lake primero"</h3>
      <p class="mb-4 text-stone-700 dark:text-stone-300">
        Los proyectos que inician ingiriendo terabytes sin una hipótesis de negocio clara suelen convertirse en cementerios de datos con altos costos cloud. La arquitectura debe orientarse a productos de datos (*Data Products*) con casos de uso delimitados que generen victorias tempranas y autofinancien las siguientes fases.
      </p>

      <h3 class="text-xl font-bold text-[#1A1918] dark:text-[#FAF9F6] mt-8 mb-4">2. Los 3 Indicadores Clave de Madurez</h3>
      <p class="mb-4 text-stone-700 dark:text-stone-300">
        Para evaluar el éxito de una plataforma, medimos tres dimensiones: <strong>Velocidad de decisión</strong> (¿cuánto tarda un tomador de decisiones en obtener la cifra?), <strong>Nivel de confianza</strong> (¿existe una sola versión de la verdad verificada?) y <strong>Costo total de propiedad por consulta analítica</strong>.
      </p>
    `
  }
];

function renderBlogList() {
  const container = document.getElementById('blog-container');
  if (!container) return;

  container.innerHTML = BLOG_ARTICLES.map(art => `
    <article class="custom-card rounded-2xl p-8 flex flex-col justify-between group">
      <div>
        <div class="flex items-center gap-3 mb-4">
          <span class="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 bg-[#F3F2EE] dark:bg-[#242220] border border-[#C8C5BD] dark:border-[#45423E] px-3 py-1 rounded-full">${art.category}</span>
          <span class="text-stone-400">•</span>
          <span class="text-xs text-stone-500 font-mono">${art.date}</span>
          <span class="text-stone-400">•</span>
          <span class="text-xs text-stone-500 font-mono">${art.readTime}</span>
        </div>

        <h2 class="text-xl md:text-2xl font-bold text-[#1A1918] dark:text-[#FAF9F6] mb-3 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
          ${art.title}
        </h2>

        <p class="text-stone-600 dark:text-stone-400 text-sm md:text-base leading-relaxed mb-6">
          ${art.summary}
        </p>

        <div class="flex flex-wrap gap-2 mb-6">
          ${art.tags.map(t => `<span class="badge-tech">${t}</span>`).join('')}
        </div>
      </div>

      <div class="pt-4 border-t border-[#E8E6E0] dark:border-[#292725] flex items-center justify-between">
        <span class="text-xs text-stone-500 font-medium">Por Andrés Argumero</span>
        <button onclick="openArticleModal('${art.id}')" class="inline-flex items-center gap-2 text-sm font-bold text-[#1A1918] dark:text-[#FAF9F6] hover:gap-3 transition-all">
          <span>Leer artículo completo</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </button>
      </div>
    </article>
  `).join('');
}

function openArticleModal(articleId) {
  const art = BLOG_ARTICLES.find(a => a.id === articleId);
  if (!art) return;

  const modal = document.getElementById('article-modal');
  const modalContent = document.getElementById('article-modal-content');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="flex items-start justify-between pb-6 border-b border-[#E8E6E0] dark:border-[#292725]">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="px-3 py-0.5 rounded-full text-xs font-bold uppercase bg-[#F3F2EE] dark:bg-[#242220] text-[#1A1918] dark:text-[#FAF9F6] border border-[#C8C5BD] dark:border-[#45423E]">${art.category}</span>
          <span class="text-xs font-mono text-stone-500">${art.date}</span>
          <span class="text-xs font-mono text-stone-400">${art.readTime}</span>
        </div>
        <h1 class="text-2xl md:text-3xl font-extrabold text-[#1A1918] dark:text-[#FAF9F6] leading-tight">${art.title}</h1>
      </div>
      <button onclick="closeArticleModal()" class="text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </div>

    <div class="py-8 prose dark:prose-invert max-w-none text-stone-700 dark:text-stone-300 leading-relaxed">
      ${art.content}
    </div>

    <div class="pt-6 border-t border-[#E8E6E0] dark:border-[#292725] flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-[#1A1918] text-[#FAF9F6] dark:bg-[#FAF9F6] dark:text-[#11100F] flex items-center justify-center font-bold text-sm">AA</div>
        <div>
          <div class="text-sm font-bold text-[#1A1918] dark:text-[#FAF9F6]">Andrés Argumero</div>
          <div class="text-xs text-stone-500">Applications Architect Expert | Data & AI</div>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <button onclick="closeArticleModal()" class="btn-secondary text-xs px-4 py-2">Volver al listado</button>
        <a href="contacto.html" class="btn-primary text-xs px-4 py-2">Debatir este tema</a>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeArticleModal() {
  const modal = document.getElementById('article-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderBlogList();

  const modal = document.getElementById('article-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeArticleModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeArticleModal();
  });
});
