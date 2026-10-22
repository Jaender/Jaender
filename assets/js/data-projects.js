// Portfolio projects data extracted from certified career inventory
const PROJECTS_DATA = [
  {
    "id": "P01",
    "client": "CENIT",
    "title": "Migración y estabilización de analítica en Microsoft Fabric (incluye Denodo / ODS 8)",
    "period": "nov 2025–abr 2026",
    "category": "Microsoft Fabric & Cloud",
    "flagship": true,
    "summary": "Migrar e integrar fuentes, procesos y tableros a Fabric y estabilizar su operación.",
    "challenge": "Migrar e integrar fuentes, procesos y tableros a Fabric y estabilizar su operación.",
    "role": "Application Architect Expert; coordinación técnica sugerida por comunicaciones propias.",
    "deliverables": "Solicitudes de Service Principal/Key Vault; documentos de transición; inventario y liberación de tableros; evidencias de estabilización.",
    "technologies": [
      "Microsoft Fabric; Denodo; Power BI; Azure DevOps; Azure Key Vault; Azure."
    ],
    "tags": [
      "Microsoft Fabric",
      "Power BI",
      "Denodo"
    ]
  },
  {
    "id": "P02",
    "client": "CENIT",
    "title": "Analítica de administración de contratos y reportes operativos",
    "period": "dic 2022–mar 2026",
    "category": "Microsoft Fabric & Cloud",
    "flagship": false,
    "summary": "Diseñar, implementar y posteriormente evolucionar/migrar flujos de datos y tableros para administración contractual.",
    "challenge": "Diseñar, implementar y posteriormente evolucionar/migrar flujos de datos y tableros para administración contractual.",
    "role": "Participación técnica confirmada desde la construcción del ODS 55; autoría/compartición de flujos y participación posterior en migración/estabilización.",
    "deliverables": "Reporte Administración de Contratos / ODS 55; flujos de datos; matrices de impacto; pruebas; revisiones de tableros.",
    "technologies": [
      "Power BI; modelado de datos; Azure/Synapse y Microsoft Fabric (según fase)."
    ],
    "tags": [
      "Microsoft Fabric",
      "Power BI"
    ]
  },
  {
    "id": "P03",
    "client": "TIGO / Millicom",
    "title": "Migración de metadatos del gestor documental / Alfresco",
    "period": "nov 2025–sep 2026",
    "category": "Business Intelligence & Analytics",
    "flagship": false,
    "summary": "Migrar metadatos y tipos documentales desde el gestor documental.",
    "challenge": "Migrar metadatos y tipos documentales desde el gestor documental.",
    "role": "Coordinación y seguimiento técnico evidenciados; rol contractual exacto por validar.",
    "deliverables": "Propuesta y estimación; análisis de metadatos; planes de migración y seguimiento.",
    "technologies": [
      "Alfresco; migración de metadatos; herramientas destino por confirmar."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "P04",
    "client": "TIGO",
    "title": "Propuesta Facturación Home",
    "period": "ene 2026",
    "category": "IA & Soluciones Inteligentes",
    "flagship": false,
    "summary": "Preparar evaluación y aprobación comercial de una iniciativa de facturación.",
    "challenge": "Preparar evaluación y aprobación comercial de una iniciativa de facturación.",
    "role": "Participación en circuito de preventa (atribución específica por validar).",
    "deliverables": "Documentación de comité L1.",
    "technologies": [
      "No especificadas."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "P05",
    "client": "Seguros Alfa",
    "title": "Propuesta de decomisionamiento de repositorios y nueva arquitectura de datos",
    "period": "ene 2026",
    "category": "Arquitectura Empresarial",
    "flagship": false,
    "summary": "Evaluar retiro de repositorios y arquitectura objetivo de soluciones de datos.",
    "challenge": "Evaluar retiro de repositorios y arquitectura objetivo de soluciones de datos.",
    "role": "Participación en análisis de oferta; rol concreto por confirmar.",
    "deliverables": "Análisis de información y propuesta preliminar.",
    "technologies": [
      "Arquitectura de datos; repositorios (plataformas por validar)."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "P06",
    "client": "Allianz",
    "title": "Propuesta migración ADP a Microsoft Fabric",
    "period": "ene 2026",
    "category": "Microsoft Fabric & Cloud",
    "flagship": false,
    "summary": "Estimar una migración de ADP a Fabric.",
    "challenge": "Estimar una migración de ADP a Fabric.",
    "role": "Participación en estimación técnica (inferencia a partir de convocatoria).",
    "deliverables": "Estimación/propuesta por verificar.",
    "technologies": [
      "Microsoft Fabric; ADP."
    ],
    "tags": [
      "Microsoft Fabric"
    ]
  },
  {
    "id": "P07",
    "client": "AXA Colpatria",
    "title": "Cliente 360 y validador de calidad de datos",
    "period": "feb–oct 2026",
    "category": "Arquitectura Empresarial",
    "flagship": true,
    "summary": "Diseñar e implementar capacidades de calidad de datos y visión integrada del cliente.",
    "challenge": "Diseñar e implementar capacidades de calidad de datos y visión integrada del cliente.",
    "role": "Participación en propuesta y revisiones de arquitectura, alcance e historias de usuario.",
    "deliverables": "Propuesta Calidad de Datos y Cliente 360; documentos de arquitectura; HUs y modelo dimensional revisados.",
    "technologies": [
      "Modelado dimensional; calidad de datos; arquitectura de datos (stack por confirmar)."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "P08",
    "client": "PRIME / filiales (incluye CENIT y OCENSA)",
    "title": "Arquitectura analítica y hoja de ruta de datos",
    "period": "mar–oct 2026",
    "category": "Microsoft Fabric & Cloud",
    "flagship": true,
    "summary": "Definir recomendación de arquitectura analítica integrada para varias filiales y SAP S/4HANA.",
    "challenge": "Definir recomendación de arquitectura analítica integrada para varias filiales y SAP S/4HANA.",
    "role": "Responsable de consolidación y envío de recomendación arquitectónica (confirmado por correo propio).",
    "deliverables": "Recomendación consolidada de Arquitectura Analítica enviada el 19/oct/2026 para revisión/aprobación; mapeo de tablas y vistas.",
    "technologies": [
      "SAP S/4HANA; SAP CDS; Denodo; Microsoft Fabric; integración de datos."
    ],
    "tags": [
      "Microsoft Fabric",
      "Denodo"
    ]
  },
  {
    "id": "P09",
    "client": "NTT DATA (interno)",
    "title": "Evolución de dashboards de Forecast, PM y Operaciones",
    "period": "mar–jun 2026",
    "category": "IA & Soluciones Inteligentes",
    "flagship": false,
    "summary": "Evolucionar tableros internos para seguimiento comercial y operativo.",
    "challenge": "Evolucionar tableros internos para seguimiento comercial y operativo.",
    "role": "Participación en revisión de alcance y entregables; liderazgo técnico por validar.",
    "deliverables": "Versiones de dashboards, archivos de ajustes y sesiones de validación.",
    "technologies": [
      "Power BI (inferido del tipo de entregable; confirmar); Forecast/MANA."
    ],
    "tags": [
      "Power BI"
    ]
  },
  {
    "id": "P10",
    "client": "AVC",
    "title": "SmartOps: datos, pipelines, modelo semántico y agente",
    "period": "sep–oct 2026",
    "category": "Microsoft Fabric & Cloud",
    "flagship": true,
    "summary": "Implementar y estabilizar casos de uso de SmartOps para el cliente.",
    "challenge": "Implementar y estabilizar casos de uso de SmartOps para el cliente.",
    "role": "Desarrollo y corrección de hallazgos atribuidos explícitamente a Andrés; coordinación de cierre.",
    "deliverables": "Mapeo de datos SmartOps; correcciones; pruebas de MVP; entregables pendientes de cierre.",
    "technologies": [
      "Microsoft Fabric; pipelines; modelo semántico; Dataverse; agente (tecnología exacta por confirmar)."
    ],
    "tags": [
      "Microsoft Fabric"
    ]
  },
  {
    "id": "P11",
    "client": "COMFAMA",
    "title": "Propuesta migración SAP BW a Microsoft Fabric",
    "period": "oct 2026",
    "category": "Microsoft Fabric & Cloud",
    "flagship": true,
    "summary": "Proponer reconstrucción/migración de ETL y reportes de SAP BW a Fabric.",
    "challenge": "Proponer reconstrucción/migración de ETL y reportes de SAP BW a Fabric.",
    "role": "Responsable de construcción de alcance técnico según instrucciones del usuario; corroboración documental parcial.",
    "deliverables": "Propuesta técnica en preparación (no se constató entrega/aprobación).",
    "technologies": [
      "SAP BW; Microsoft Fabric; ETL; BI; SAP Core."
    ],
    "tags": [
      "Microsoft Fabric"
    ]
  },
  {
    "id": "P12",
    "client": "COMFAMA",
    "title": "RFP Kardia / migración Core de Subsidios y SAP",
    "period": "sep–oct 2026",
    "category": "IA & Soluciones Inteligentes",
    "flagship": true,
    "summary": "Preparar oferta para modernización de Core de Subsidios y componentes SAP.",
    "challenge": "Preparar oferta para modernización de Core de Subsidios y componentes SAP.",
    "role": "Participación en coordinación de oferta; contribución técnica específica por validar.",
    "deliverables": "Documentos económicos y de propuesta del equipo.",
    "technologies": [
      "Kardia; SAP; GECO."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "P13",
    "client": "Allianz",
    "title": "Programa ejecutivo Cultura Data Driven / transformación digital",
    "period": "ago–oct 2026",
    "category": "IA & Soluciones Inteligentes",
    "flagship": true,
    "summary": "Diseñar y facilitar contenidos y laboratorios para ejecutivos.",
    "challenge": "Diseñar y facilitar contenidos y laboratorios para ejecutivos.",
    "role": "Diseño y revisión de contenidos de módulos; facilitación efectiva por verificar.",
    "deliverables": "Presentación Módulo 2 consolidada v3.1/v4.2; diseño de módulos y laboratorios.",
    "technologies": [
      "Data Driven; gobierno de datos; IA; transformación digital."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "P14",
    "client": "Nutresa",
    "title": "Propuesta de modelos analíticos de datos / track SAP S/4HANA",
    "period": "sep–oct 2026",
    "category": "Business Intelligence & Analytics",
    "flagship": true,
    "summary": "Levantar necesidades y construir una propuesta de analítica de datos.",
    "challenge": "Levantar necesidades y construir una propuesta de analítica de datos.",
    "role": "Participación en reuniones y comunicaciones de preventa; aporte exacto por validar.",
    "deliverables": "Insumos de propuesta y convocatoria de entendimiento.",
    "technologies": [
      "Modelos analíticos; SAP S/4HANA."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "P15",
    "client": "Primax",
    "title": "Preventa migración Rollout SAP",
    "period": "oct 2026",
    "category": "Business Intelligence & Analytics",
    "flagship": false,
    "summary": "Estimar alcance de migración de datos en rollout SAP.",
    "challenge": "Estimar alcance de migración de datos en rollout SAP.",
    "role": "Participación personal NO confirmada; correo de comité recibido.",
    "deliverables": "Comité L1 y GECO (atribución personal por verificar).",
    "technologies": [
      "SAP; migración de datos."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "P16",
    "client": "Colsubsidio",
    "title": "Propuesta Journey to Cloud - Afiliaciones / modernización de core",
    "period": "sep 2026",
    "category": "IA & Soluciones Inteligentes",
    "flagship": false,
    "summary": "Diseñar propuesta de modernización de plataforma de afiliaciones.",
    "challenge": "Diseñar propuesta de modernización de plataforma de afiliaciones.",
    "role": "Participación en revisión de presentación confirmada por comentario.",
    "deliverables": "Propuesta Journey to Cloud Afiliaciones v1.0 (comentada).",
    "technologies": [
      "Cloud; modernización de core (stack por validar)."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "P17",
    "client": "NTT DATA (interno)",
    "title": "MAPPS: posicionamiento y plan de marketing FY26",
    "period": "may–oct 2026",
    "category": "IA & Soluciones Inteligentes",
    "flagship": false,
    "summary": "Apoyar posicionamiento de capacidades y generación de oportunidades de Data Applications.",
    "challenge": "Apoyar posicionamiento de capacidades y generación de oportunidades de Data Applications.",
    "role": "Participación en plan de marketing; propiedad de entregables por validar.",
    "deliverables": "Artículo y plan de marketing en curso.",
    "technologies": [
      "MAPPS; comunicación comercial y propuesta de valor."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "P18",
    "client": "CENIT",
    "title": "Relacionamiento comercial y pipeline de nuevas oportunidades analíticas",
    "period": "feb–oct 2026",
    "category": "IA & Soluciones Inteligentes",
    "flagship": false,
    "summary": "Identificar y convertir oportunidades analíticas en nuevos proyectos.",
    "challenge": "Identificar y convertir oportunidades analíticas en nuevos proyectos.",
    "role": "Objetivo estratégico declarado por el usuario; ejecución comercial histórica por validar.",
    "deliverables": "Pipeline por construir; no se verificó documento comercial final.",
    "technologies": [
      "Analítica; preventa consultiva."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "P19",
    "client": "CENIT / NTT DATA",
    "title": "App Proyecciones Sinfonía 731 y automatizaciones",
    "period": "dic 2025",
    "category": "Business Intelligence & Analytics",
    "flagship": false,
    "summary": "Entregar aplicación de proyecciones y automatizaciones de reportes.",
    "challenge": "Entregar aplicación de proyecciones y automatizaciones de reportes.",
    "role": "Recepción de correo de entrega formal; participación personal NO acreditada.",
    "deliverables": "App Proyecciones, flujos Power Automate y reporte Power BI (atribuidos al proyecto, no al usuario).",
    "technologies": [
      "Power Automate; Power BI."
    ],
    "tags": [
      "Power BI"
    ]
  },
  {
    "id": "H01",
    "client": "CENIT",
    "title": "ODS Implementación / MBA Indicadores (Fase I y II)",
    "period": "oct 2020–2022",
    "category": "Data Engineering & Cloud",
    "flagship": false,
    "summary": "Construir y evolucionar indicadores operativos y de mantenimiento, cubriendo ingesta, modelado y visualización sobre la plataforma analítica de CENIT.",
    "challenge": "Construir y evolucionar indicadores operativos y de mantenimiento, cubriendo ingesta, modelado y visualización sobre la plataforma analítica de CENIT.",
    "role": "Participación técnica directa; evidencia de tareas de modelado/ingesta/documentación y posterior participación en definición de Fase 2.",
    "deliverables": "Documentos de flujo de datos; modelos analíticos; historias/tareas de ingesta; indicadores publicados/validados; insumos de estimación Fase 2.",
    "technologies": [
      "Azure Synapse; Azure Analysis Services; Power BI; Logic Apps; Azure."
    ],
    "tags": [
      "Azure Synapse",
      "Power BI"
    ]
  },
  {
    "id": "H02",
    "client": "CENIT",
    "title": "Unidades de Bombeo",
    "period": "dic 2021–abr 2022",
    "category": "IA & Soluciones Inteligentes",
    "flagship": false,
    "summary": "Integrar y desplegar capacidades analíticas/operativas para Unidades de Bombeo, conectando fuentes industriales y corporativas.",
    "challenge": "Integrar y desplegar capacidades analíticas/operativas para Unidades de Bombeo, conectando fuentes industriales y corporativas.",
    "role": "Participación técnica y de coordinación confirmada por correos de especificaciones, evidencias de pruebas y revisiones de arquitectura/despliegue.",
    "deliverables": "Especificaciones técnicas; evidencias de pruebas; formatos CAB; documentación de integración y soporte.",
    "technologies": [
      "Azure Stream Analytics; Azure Front Door; Azure; SKF; SAP; Sinoper."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "H03",
    "client": "CENIT",
    "title": "Optimización de Sistemas de Transporte (OST)",
    "period": "2022",
    "category": "IA & Soluciones Inteligentes",
    "flagship": false,
    "summary": "Acompañar la evolución analítica y de arquitectura de la iniciativa de Optimización de Sistemas de Transporte.",
    "challenge": "Acompañar la evolución analítica y de arquitectura de la iniciativa de Optimización de Sistemas de Transporte.",
    "role": "Participación confirmada por agenda recurrente y sesiones de alineación; responsabilidad exacta por validar.",
    "deliverables": "Lineamientos y revisiones de arquitectura; acuerdos de seguimiento.",
    "technologies": [
      "Arquitectura de datos / Azure (detalle por validar)."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "H04",
    "client": "CENIT",
    "title": "BTP",
    "period": "dic 2022–2023",
    "category": "IA & Soluciones Inteligentes",
    "flagship": false,
    "summary": "Diseñar/evolucionar reportes y definiciones TO-BE asociadas al frente BTP.",
    "challenge": "Diseñar/evolucionar reportes y definiciones TO-BE asociadas al frente BTP.",
    "role": "Participación recurrente confirmada en comités operativos, dailies y sesiones técnicas; expansión del acrónimo y rol formal por validar.",
    "deliverables": "Reportes MVP; insumos TO-BE; documentación de comité y seguimiento.",
    "technologies": [
      "Power BI / plataforma Azure (detalle por validar)."
    ],
    "tags": [
      "Power BI"
    ]
  },
  {
    "id": "H05",
    "client": "Sanofi",
    "title": "Servicio analítico / Sell Out y renovación",
    "period": "2023–ene 2025",
    "category": "Business Intelligence & Analytics",
    "flagship": false,
    "summary": "Operar y evolucionar soluciones analíticas del servicio Sanofi y preparar su continuidad/renovación.",
    "challenge": "Operar y evolucionar soluciones analíticas del servicio Sanofi y preparar su continuidad/renovación.",
    "role": "Coordinación técnica y de servicio sugerida por dailies, revisiones de rendimiento y correos propios de propuesta/renovación.",
    "deliverables": "Revisiones técnicas; propuestas de servicio; seguimiento operativo.",
    "technologies": [
      "BI / datos; SQL/vistas (herramientas exactas por validar)."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "H06",
    "client": "Ecopetrol / Esenttia",
    "title": "Tableros BI Esenttia",
    "period": "oct 2023–ago 2024",
    "category": "IA & Soluciones Inteligentes",
    "flagship": false,
    "summary": "Construir y desplegar tableros BI para Esenttia, integrando datos SAP/BW y capas de virtualización/analítica.",
    "challenge": "Construir y desplegar tableros BI para Esenttia, integrando datos SAP/BW y capas de virtualización/analítica.",
    "role": "Participación técnica y de coordinación alta; evidencia de estado de proyecto, despliegues, capacitación, cierres de HU y estabilización.",
    "deliverables": "Documentación de releases; tableros Power BI; actas de cierre; capacitaciones; bugs/estabilización.",
    "technologies": [
      "Power BI; Denodo; SAP BW; Azure/Synapse; Key Vault."
    ],
    "tags": [
      "Power BI",
      "Denodo"
    ]
  },
  {
    "id": "H07",
    "client": "Ecopetrol",
    "title": "Margen de Refinación (GRC / MVP2 Fase 2)",
    "period": "oct 2023–nov 2025",
    "category": "Microsoft Fabric & Cloud",
    "flagship": true,
    "summary": "Construir y evolucionar una solución analítica para margen de refinación, incluyendo arquitectura, modelos de datos e integración de múltiples fuentes.",
    "challenge": "Construir y evolucionar una solución analítica para margen de refinación, incluyendo arquitectura, modelos de datos e integración de múltiples fuentes.",
    "role": "Participación de arquitectura y coordinación técnica confirmada por documentos y correos propios; alcance exacto por fase por validar.",
    "deliverables": "Documento de arquitectura; diagramas; modelos de datos; plan de trabajo; actas y evidencias de revisión.",
    "technologies": [
      "Microsoft Fabric; Azure; Power BI; SAP Reficar; SAP Ecopetrol; PySpark/PySQL (en fase MVP2)."
    ],
    "tags": [
      "Microsoft Fabric",
      "Power BI",
      "PySpark"
    ]
  },
  {
    "id": "H08",
    "client": "CENIT / Ecopetrol",
    "title": "Automatización de Flujo Volumétrico (ODS 107)",
    "period": "jun 2024–sep 2025",
    "category": "Data Engineering & Cloud",
    "flagship": false,
    "summary": "Automatizar y gobernar el procesamiento de información volumétrica y canónicos para CENIT/Ecopetrol.",
    "challenge": "Automatizar y gobernar el procesamiento de información volumétrica y canónicos para CENIT/Ecopetrol.",
    "role": "Coordinación técnica y de entregables confirmada por correos propios, actas y mensajes de Teams.",
    "deliverables": "Actas de recibo; documentación de flujo/modelo; scripts de prueba; informe de cierre; canónicos y despliegues.",
    "technologies": [
      "Azure Databricks; Azure/Synapse; pipelines; Power BI; canónicos de datos."
    ],
    "tags": [
      "Azure Databricks",
      "Power BI"
    ]
  },
  {
    "id": "H09",
    "client": "CENIT",
    "title": "Conceptualización Datamart GGO",
    "period": "ago 2024",
    "category": "IA & Soluciones Inteligentes",
    "flagship": false,
    "summary": "Realizar la conceptualización inicial de un Datamart para GGO.",
    "challenge": "Realizar la conceptualización inicial de un Datamart para GGO.",
    "role": "Participación directa en preparación de Kickoff; profundidad posterior por validar.",
    "deliverables": "Presentación Kickoff y material de conceptualización.",
    "technologies": [
      "Arquitectura de datos / BI (detalle por validar)."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "H10",
    "client": "Terpel",
    "title": "Medios Magnéticos / Cumplimiento Tributario",
    "period": "dic 2024–2025",
    "category": "IA & Soluciones Inteligentes",
    "flagship": false,
    "summary": "Implementar un MVP analítico para medios magnéticos/cumplimiento tributario y evolucionar componentes de datos asociados.",
    "challenge": "Implementar un MVP analítico para medios magnéticos/cumplimiento tributario y evolucionar componentes de datos asociados.",
    "role": "Participación confirmada por agenda recurrente, sesiones de kickoff, pruebas y seguimiento; rol exacto por validar.",
    "deliverables": "MVP / pruebas; insumos de propuesta; sesiones técnicas y de seguimiento.",
    "technologies": [
      "Google Cloud Platform; BigQuery (evidencia de sesiones); BI/datos."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "H11",
    "client": "CENIT / ODL",
    "title": "Ingestas Data Lake / Rotodinámica y ODS 113",
    "period": "dic 2024–2025",
    "category": "Business Intelligence & Analytics",
    "flagship": false,
    "summary": "Implementar y dar seguimiento a ingestas y componentes analíticos en ODL/Data Lake para frentes de CENIT.",
    "challenge": "Implementar y dar seguimiento a ingestas y componentes analíticos en ODL/Data Lake para frentes de CENIT.",
    "role": "Participación recurrente confirmada; alcance exacto entre Rotodinámica y ODS 113 por validar.",
    "deliverables": "Ingestas; entregables DevOps; revisiones de Power BI / Data Lake.",
    "technologies": [
      "Data Lake / ODL; Power BI; Azure (detalle por validar)."
    ],
    "tags": [
      "Power BI"
    ]
  },
  {
    "id": "H12",
    "client": "Ecopetrol",
    "title": "Tablero Indicador de Demanda (IBP-BW)",
    "period": "sep–oct 2024",
    "category": "Business Intelligence & Analytics",
    "flagship": false,
    "summary": "Validar definiciones y datos de un tablero de demanda alimentado desde IBP/BW.",
    "challenge": "Validar definiciones y datos de un tablero de demanda alimentado desde IBP/BW.",
    "role": "Participación técnica directa en recopilación/revisión de definiciones; liderazgo no verificado.",
    "deliverables": "Evidencias de definición y validación de datos del tablero.",
    "technologies": [
      "SAP IBP; SAP BW; BI (detalle por validar)."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "H13",
    "client": "Telefónica Hispam",
    "title": "PoC IoT",
    "period": "2021",
    "category": "Business Intelligence & Analytics",
    "flagship": false,
    "summary": "Diseñar y ejecutar una prueba de concepto IoT para Telefónica Hispam.",
    "challenge": "Diseñar y ejecutar una prueba de concepto IoT para Telefónica Hispam.",
    "role": "Participación confirmada por kickoff, dailies y cierre de definición de arquitectura; alcance individual por validar.",
    "deliverables": "Arquitectura de PoC e insumos de seguimiento.",
    "technologies": [
      "IoT; Azure (detalle por validar)."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "H14",
    "client": "Cliente en Costa Rica (por validar)",
    "title": "RFP / entendimiento Data & Analytics",
    "period": "2021",
    "category": "Business Intelligence & Analytics",
    "flagship": false,
    "summary": "Apoyar el entendimiento y preparación de una oportunidad de Data & Analytics en Costa Rica.",
    "challenge": "Apoyar el entendimiento y preparación de una oportunidad de Data & Analytics en Costa Rica.",
    "role": "Participación contextual confirmada solo por agenda; cliente, entregables y resultado por validar.",
    "deliverables": "Materiales de preventa (por validar).",
    "technologies": [
      "Data & Analytics (tecnologías por validar)."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP01",
    "client": "CBC",
    "title": "Migración de cubo de ventas desde SAP BW hacia Microsoft Azure",
    "period": "abr 2020–sep 2020",
    "category": "IA & Soluciones Inteligentes",
    "flagship": false,
    "summary": "Migrar el cubo de ventas desde SAP BW hacia una arquitectura de datos en Microsoft Azure.",
    "challenge": "Migrar el cubo de ventas desde SAP BW hacia una arquitectura de datos en Microsoft Azure.",
    "role": "Ingeniero de datos con Microsoft Azure.",
    "deliverables": "Pipelines de ingesta; transformaciones; modelos y vistas materializadas en Synapse; reportes Power BI; pruebas de ventas y explosión de combos.",
    "technologies": [
      "Azure Data Factory; Azure Data Lake; Azure Synapse Analytics; Power BI; SAP BW."
    ],
    "tags": [
      "Azure Synapse",
      "Power BI",
      "Azure Data Factory"
    ]
  },
  {
    "id": "CVP02",
    "client": "Telefónica España",
    "title": "Digital Twins y analítica en tiempo real",
    "period": "feb 2022–mar 2022",
    "category": "Business Intelligence & Analytics",
    "flagship": false,
    "summary": "Implementar capacidades de analítica descriptiva y predictiva sobre datos de telemetría en tiempo real.",
    "challenge": "Implementar capacidades de analítica descriptiva y predictiva sobre datos de telemetría en tiempo real.",
    "role": "Líder equipo de analítica.",
    "deliverables": "Flujos de streaming; almacenamiento de datos; capacidades de analítica descriptiva/predictiva.",
    "technologies": [
      "Azure Stream Analytics; Azure Data Lake; Cosmos DB; Azure."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP03",
    "client": "Ecopetrol",
    "title": "Datamart Judicial",
    "period": "mar 2022–jun 2022",
    "category": "IA & Soluciones Inteligentes",
    "flagship": false,
    "summary": "Diseñar un datamart y los flujos de datos requeridos para reportes del área Judicial.",
    "challenge": "Diseñar un datamart y los flujos de datos requeridos para reportes del área Judicial.",
    "role": "Arquitecto de datos con Microsoft Azure.",
    "deliverables": "Flujos de datos; modelo de datos; integraciones de fuentes.",
    "technologies": [
      "Microsoft Azure; arquitectura de datos; DWH/Datamart."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP04",
    "client": "Ecopetrol",
    "title": "Workplace Analytics - Azure",
    "period": "jun 2022–jul 2022",
    "category": "Data Engineering & Cloud",
    "flagship": false,
    "summary": "Construir la ingesta y el modelo de datos de una solución de Workplace Analytics en Azure.",
    "challenge": "Construir la ingesta y el modelo de datos de una solución de Workplace Analytics en Azure.",
    "role": "Arquitecto de datos con Microsoft Azure.",
    "deliverables": "Pipelines de ingesta; lógica de cargas; diseño/modelo DWH.",
    "technologies": [
      "Microsoft Azure; Azure Synapse Analytics; pipelines de datos."
    ],
    "tags": [
      "Azure Synapse"
    ]
  },
  {
    "id": "CVP05",
    "client": "Zurich Ecuador",
    "title": "Arquitectura digital Zurich",
    "period": "ago 2022–sep 2022",
    "category": "Arquitectura Empresarial",
    "flagship": false,
    "summary": "Definir una arquitectura de datos y lineamientos de gobierno para una bodega de datos en Azure.",
    "challenge": "Definir una arquitectura de datos y lineamientos de gobierno para una bodega de datos en Azure.",
    "role": "Arquitecto.",
    "deliverables": "Arquitectura objetivo; lineamientos de gobierno; diseño Data Vault; documento de gobierno de datos.",
    "technologies": [
      "Microsoft Azure; Data Vault; SAP BusinessObjects; Data Warehouse."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP06",
    "client": "Ecopetrol",
    "title": "PoC - Búsqueda Cognitiva en portal Átomo",
    "period": "oct 2022",
    "category": "IA & Soluciones Inteligentes",
    "flagship": false,
    "summary": "Ampliar el portal Átomo con capacidades de búsqueda cognitiva y recomendaciones basadas en contenido.",
    "challenge": "Ampliar el portal Átomo con capacidades de búsqueda cognitiva y recomendaciones basadas en contenido.",
    "role": "Arquitecto de solución con Microsoft Azure.",
    "deliverables": "Arquitectura PoC; integración de datos; capacidades de búsqueda/recomendación.",
    "technologies": [
      "Azure Cognitive Services; Microsoft Azure; bases de datos de reporte."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP07",
    "client": "CENIT",
    "title": "Conceptualización PMA - ICA",
    "period": "oct 2022–nov 2022",
    "category": "Arquitectura Empresarial",
    "flagship": false,
    "summary": "Conceptualizar la automatización de Planes de Manejo Ambiental (PMA) e Informes de Cumplimiento Ambiental (ICA).",
    "challenge": "Conceptualizar la automatización de Planes de Manejo Ambiental (PMA) e Informes de Cumplimiento Ambiental (ICA).",
    "role": "Arquitecto de datos.",
    "deliverables": "Arquitectura As-Is/To-Be; GAP de solución; material de conceptualización.",
    "technologies": [
      "Arquitectura de datos; automatización; Microsoft Azure (contexto general del CV)."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP08",
    "client": "Sanofi",
    "title": "Arquitectura de datos y migración hacia AWS",
    "period": "dic 2022–jul 2023",
    "category": "IA & Soluciones Inteligentes",
    "flagship": false,
    "summary": "Definir lineamientos de arquitectura para migrar información de distintos frentes de negocio hacia AWS y disponibilizar indicadores en Power BI.",
    "challenge": "Definir lineamientos de arquitectura para migrar información de distintos frentes de negocio hacia AWS y disponibilizar indicadores en Power BI.",
    "role": "Arquitecto de datos.",
    "deliverables": "Lineamientos de arquitectura; prácticas de ingeniería y gobierno; habilitación de indicadores Power BI.",
    "technologies": [
      "Amazon Web Services; Power BI; arquitectura e ingeniería de datos."
    ],
    "tags": [
      "Power BI"
    ]
  },
  {
    "id": "CVP09",
    "client": "Zurich",
    "title": "iZona",
    "period": "jul 2023–ago 2023",
    "category": "IA & Soluciones Inteligentes",
    "flagship": false,
    "summary": "Migrar reportes y flujos de datos hacia Azure y Power BI.",
    "challenge": "Migrar reportes y flujos de datos hacia Azure y Power BI.",
    "role": "Arquitecto de datos.",
    "deliverables": "Arquitectura; flujos de datos; modelos; reportes migrados.",
    "technologies": [
      "Azure Data Factory; Azure Storage Account; Azure Synapse; Power BI."
    ],
    "tags": [
      "Azure Synapse",
      "Power BI",
      "Azure Data Factory"
    ]
  },
  {
    "id": "CVP10",
    "client": "Ecopetrol",
    "title": "Well Integrity",
    "period": "jul 2023–ago 2023",
    "category": "IA & Soluciones Inteligentes",
    "flagship": false,
    "summary": "Participar como arquitecto de datos en la iniciativa Well Integrity.",
    "challenge": "Participar como arquitecto de datos en la iniciativa Well Integrity.",
    "role": "Arquitecto de datos.",
    "deliverables": "No especificados en el CV.",
    "technologies": [
      "No especificadas en el CV."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP11",
    "client": "Ecopetrol",
    "title": "Conceptualización DataGenesis",
    "period": "sep 2023–nov 2023",
    "category": "Arquitectura Empresarial",
    "flagship": false,
    "summary": "Definir una arquitectura y modelo de datos que preserve datos originales de telemetría y operación como base para analítica avanzada.",
    "challenge": "Definir una arquitectura y modelo de datos que preserve datos originales de telemetría y operación como base para analítica avanzada.",
    "role": "Arquitecto de datos.",
    "deliverables": "Arquitectura; modelos de datos; especificaciones técnicas.",
    "technologies": [
      "Microsoft Azure; telemetría; datos operacionales; analítica avanzada."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP12",
    "client": "Ecopetrol",
    "title": "Construcción Datamart Comercial",
    "period": "sep 2019–mar 2020",
    "category": "IA & Soluciones Inteligentes",
    "flagship": false,
    "summary": "Automatizar y estructurar información comercial de precios internacionales, ventas e inventarios.",
    "challenge": "Automatizar y estructurar información comercial de precios internacionales, ventas e inventarios.",
    "role": "Consultor HANA, BW, Data Services y Power BI.",
    "deliverables": "Datamarts SAP HANA; flujos de precios/ventas/inventarios; tablero Power BI.",
    "technologies": [
      "SAP HANA; SAP BW; SAP Data Services; Power BI."
    ],
    "tags": [
      "Power BI",
      "SAP HANA"
    ]
  },
  {
    "id": "CVP13",
    "client": "Banco Atlántida",
    "title": "Reportes última milla en SAP Disclosure Management",
    "period": "may 2019–ago 2019",
    "category": "Business Intelligence & Analytics",
    "flagship": false,
    "summary": "Integrar datos en SAP HANA para producir reportes financieros de última milla en Disclosure Management.",
    "challenge": "Integrar datos en SAP HANA para producir reportes financieros de última milla en Disclosure Management.",
    "role": "Consultor HANA.",
    "deliverables": "Arquitectura de integración; modelos; tablas/vistas; perfilamiento de seguridad.",
    "technologies": [
      "SAP HANA; SAP Disclosure Management; fuentes SAP/no SAP."
    ],
    "tags": [
      "SAP HANA"
    ]
  },
  {
    "id": "CVP14",
    "client": "Ecopetrol",
    "title": "Soporte y evolución de soluciones HANA, BW, DS, BO y Power BI",
    "period": "ene 2019–ago 2019",
    "category": "Business Intelligence & Analytics",
    "flagship": false,
    "summary": "Operar, soportar y evolucionar soluciones analíticas corporativas en múltiples áreas de negocio.",
    "challenge": "Operar, soportar y evolucionar soluciones analíticas corporativas en múltiples áreas de negocio.",
    "role": "Consultor HANA, BW, Data Services y Power BI.",
    "deliverables": "Datamart de aprendizaje conectado a SuccessFactors; flujo de inventarios BW optimizado para HANA; mejoras en abastecimiento, energía y contratación.",
    "technologies": [
      "SAP HANA; SAP BW; SAP Data Services; SAP BusinessObjects; Power BI; SAP SuccessFactors."
    ],
    "tags": [
      "Power BI",
      "SAP HANA"
    ]
  },
  {
    "id": "CVP15",
    "client": "Ecopetrol",
    "title": "Mantenimientos Menores",
    "period": "ago 2018–ene 2019",
    "category": "IA & Soluciones Inteligentes",
    "flagship": false,
    "summary": "Gestionar requerimientos y mejoras de soluciones analíticas para varias áreas corporativas.",
    "challenge": "Gestionar requerimientos y mejoras de soluciones analíticas para varias áreas corporativas.",
    "role": "Consultor Líder Business Analytics.",
    "deliverables": "Más de 15 reportes operativos; cuatro datamarts escalables; mejoras en flujos de abastecimiento/energía; flujo estándar de costos en BW.",
    "technologies": [
      "SAP HANA; SAP BW; SAP Data Services; SAP BusinessObjects; Power BI."
    ],
    "tags": [
      "Power BI",
      "SAP HANA"
    ]
  },
  {
    "id": "CVP16",
    "client": "Banco Popular",
    "title": "Big Data / analítica en SAP BusinessObjects",
    "period": "jul 2018–ago 2018",
    "category": "Business Intelligence & Analytics",
    "flagship": false,
    "summary": "Atender requerimientos de analítica y mejorar reportes en SAP BusinessObjects.",
    "challenge": "Atender requerimientos de analítica y mejorar reportes en SAP BusinessObjects.",
    "role": "Consultor Líder Business Analytics.",
    "deliverables": "Reportes analíticos y mejoras sobre SAP BusinessObjects.",
    "technologies": [
      "SAP BusinessObjects; Lumira Designer."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP17",
    "client": "Banco Atlántida",
    "title": "Big Data con SAP Altiscale / BusinessObjects",
    "period": "mar 2018–jul 2018",
    "category": "Arquitectura Empresarial",
    "flagship": false,
    "summary": "Definir una arquitectura de consumo y aprovechamiento de datos sobre SAP Big Data Services/Altiscale.",
    "challenge": "Definir una arquitectura de consumo y aprovechamiento de datos sobre SAP Big Data Services/Altiscale.",
    "role": "Consultor Big Data SAP Altiscale / BO.",
    "deliverables": "Arquitectura de análisis; reportes integrados.",
    "technologies": [
      "SAP Big Data Services; Altiscale; SAP BusinessObjects."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP18",
    "client": "ODINSA",
    "title": "Tableros de Control de Consolidación Financiera",
    "period": "dic 2017–abr 2018",
    "category": "Business Intelligence & Analytics",
    "flagship": false,
    "summary": "Construir tableros e informes para analizar información financiera consolidada por negocio, país e histórico.",
    "challenge": "Construir tableros e informes para analizar información financiera consolidada por negocio, país e histórico.",
    "role": "Consultor BW - HANA / BO.",
    "deliverables": "Tableros de control; informes financieros por consorcio/segmento.",
    "technologies": [
      "SAP BW; SAP HANA; SAP BusinessObjects; Lumira Designer/Design Studio; SAP BPC."
    ],
    "tags": [
      "SAP HANA"
    ]
  },
  {
    "id": "CVP19",
    "client": "Grupo Aval",
    "title": "Modelo de Gobierno en SAP BusinessObjects",
    "period": "oct 2017–nov 2017",
    "category": "Business Intelligence & Analytics",
    "flagship": false,
    "summary": "Definir un modelo de gobierno para administración y uso de la plataforma SAP BusinessObjects.",
    "challenge": "Definir un modelo de gobierno para administración y uso de la plataforma SAP BusinessObjects.",
    "role": "Consultor BW - HANA / BO.",
    "deliverables": "Modelo de gobierno; escenarios/material de capacitación.",
    "technologies": [
      "SAP BusinessObjects; SAP BW; SAP HANA."
    ],
    "tags": [
      "SAP HANA"
    ]
  },
  {
    "id": "CVP20",
    "client": "Banco Atlántida",
    "title": "Consolidación Financiera en SAP BPC 10.1",
    "period": "may 2017–sep 2017",
    "category": "IA & Soluciones Inteligentes",
    "flagship": false,
    "summary": "Diseñar el proceso de consolidación financiera para Banco Atlántida y subsidiarias regionales.",
    "challenge": "Diseñar el proceso de consolidación financiera para Banco Atlántida y subsidiarias regionales.",
    "role": "Consultor BW - HANA / BO.",
    "deliverables": "Arquitectura de consolidación; modelo BW 7.5; ETL; reportes de estados financieros en Design Studio.",
    "technologies": [
      "SAP BPC 10.1; SAP BW 7.5; SAP HANA; SAP ERP; Design Studio."
    ],
    "tags": [
      "SAP HANA"
    ]
  },
  {
    "id": "CVP21",
    "client": "ONB / Grupo Energía de Bogotá",
    "title": "PoC - EEB / Digital Boardroom",
    "period": "ene 2017–feb 2017",
    "category": "Business Intelligence & Analytics",
    "flagship": false,
    "summary": "Demostrar un Digital Boardroom para analizar el cuadro de mando integral del Grupo Energía de Bogotá.",
    "challenge": "Demostrar un Digital Boardroom para analizar el cuadro de mando integral del Grupo Energía de Bogotá.",
    "role": "Consultor BI / BO Cloud.",
    "deliverables": "PoC Digital Boardroom; modelos y vistas analíticas.",
    "technologies": [
      "Business Objects Cloud; Digital Boardroom."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP22",
    "client": "Cámara de Comercio de Bogotá",
    "title": "Capacitación SAP Disclosure Management",
    "period": "nov 2016",
    "category": "Business Intelligence & Analytics",
    "flagship": false,
    "summary": "Capacitar usuarios en SAP Disclosure Management.",
    "challenge": "Capacitar usuarios en SAP Disclosure Management.",
    "role": "Consultor DM.",
    "deliverables": "Material de capacitación y evaluación; sesiones de entrenamiento.",
    "technologies": [
      "SAP Disclosure Management."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP23",
    "client": "Corona",
    "title": "Rollup fase 1 de BI en compañías de Ola 2 - SAP BW",
    "period": "sep 2016–oct 2016",
    "category": "IA & Soluciones Inteligentes",
    "flagship": false,
    "summary": "Desarrollar tableros para análisis comercial, cartera, costos y niveles de servicio.",
    "challenge": "Desarrollar tableros para análisis comercial, cartera, costos y niveles de servicio.",
    "role": "Consultor BI / BO.",
    "deliverables": "Tableros de control; manuales técnicos y de usuario.",
    "technologies": [
      "SAP BW; SAP BusinessObjects."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP24",
    "client": "Valorem",
    "title": "Business Blueprint, reportes de junta y notas financieras XBRL",
    "period": "ago 2015–fecha final por confirmar",
    "category": "Business Intelligence & Analytics",
    "flagship": false,
    "summary": "Definir y desarrollar reporting ejecutivo y financiero, incluyendo notas XBRL y tableros integrados con SAP BW/BPC.",
    "challenge": "Definir y desarrollar reporting ejecutivo y financiero, incluyendo notas XBRL y tableros integrados con SAP BW/BPC.",
    "role": "Líder BI - SAP BW/BO.",
    "deliverables": "Business Blueprint; arquitectura de revelaciones; reportes de junta; notas financieras XBRL; tableros BI.",
    "technologies": [
      "SAP Disclosure Management; SAP BPC; SAP BW; Design Studio; Dashboard; Web Intelligence; XBRL."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP25",
    "client": "Alcaldía de Medellín",
    "title": "Indicadores de gestión macroeconómica, financiera, pública, contable y fiscal",
    "period": "nov 2015–ene 2016",
    "category": "Business Intelligence & Analytics",
    "flagship": false,
    "summary": "Diseñar indicadores y una solución de datos/visualización para seguimiento de gestión pública.",
    "challenge": "Diseñar indicadores y una solución de datos/visualización para seguimiento de gestión pública.",
    "role": "Consultor SAP BW/BO.",
    "deliverables": "Modelo de datos BW; indicadores; tableros de control.",
    "technologies": [
      "SAP BW; SAP BusinessObjects."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP26",
    "client": "Pacific",
    "title": "Analítica financiera, producción y reservas",
    "period": "abr 2015–jun 2015",
    "category": "Business Intelligence & Analytics",
    "flagship": false,
    "summary": "Crear y mantener reportes y tableros para análisis financiero, producción y reservas.",
    "challenge": "Crear y mantener reportes y tableros para análisis financiero, producción y reservas.",
    "role": "BI Senior Consultant.",
    "deliverables": "Reportes financieros; reportes de portafolio; tablero what-if.",
    "technologies": [
      "SAP BW on HANA; SAP BPC; Design Studio; Dashboard; Web Intelligence."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP27",
    "client": "On Business Consulting / banca",
    "title": "PoCs analíticas para AV Villas, Banco de Bogotá y Banesco",
    "period": "mar 2015",
    "category": "IA & Soluciones Inteligentes",
    "flagship": false,
    "summary": "Construir pruebas de concepto de analítica y reporting financiero para entidades bancarias.",
    "challenge": "Construir pruebas de concepto de analítica y reporting financiero para entidades bancarias.",
    "role": "BI Senior Consultant.",
    "deliverables": "Demos/PoCs de mercado, reporting financiero, rentabilidad y visualización móvil.",
    "technologies": [
      "SAP Lumira; SAP Disclosure Management; Dashboard; Design Studio; Data Services; BW on HANA; XBRL."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP28",
    "client": "Telefónica",
    "title": "Implementación SAP BusinessObjects 4.1 integrada con Teradata",
    "period": "ago 2013–feb 2015",
    "category": "Business Intelligence & Analytics",
    "flagship": false,
    "summary": "Implementar una plataforma BI corporativa integrada con Teradata para ventas, clientes, facturación e indicadores estratégicos.",
    "challenge": "Implementar una plataforma BI corporativa integrada con Teradata para ventas, clientes, facturación e indicadores estratégicos.",
    "role": "BI Senior Consultant.",
    "deliverables": "Plataforma SAP BO 4.1; universos; reportes; tableros; seguridad; capacitación.",
    "technologies": [
      "SAP BusinessObjects 4.1; Teradata; Information Design Tool; Web Intelligence; Dashboard."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP29",
    "client": "El Tiempo",
    "title": "Cubos SAP BW integrados con PCM/BPC y tablero financiero",
    "period": "may 2014–jul 2014",
    "category": "Business Intelligence & Analytics",
    "flagship": false,
    "summary": "Construir cubos y reporting financiero integrando SAP BW con PCM y BPC.",
    "challenge": "Construir cubos y reporting financiero integrando SAP BW con PCM y BPC.",
    "role": "BI Senior Consultant.",
    "deliverables": "Cubos BW; BEx Queries; tablero de control.",
    "technologies": [
      "SAP BW; SAP PCM; SAP BPC; BEx; Dashboard."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP30",
    "client": "Argos",
    "title": "Analítica de rentabilidad y resultados administrativos + capacitación",
    "period": "nov 2013–jun 2014",
    "category": "Business Intelligence & Analytics",
    "flagship": false,
    "summary": "Desarrollar analítica de rentabilidad/resultados y capacitar usuarios en herramientas SAP BusinessObjects.",
    "challenge": "Desarrollar analítica de rentabilidad/resultados y capacitar usuarios en herramientas SAP BusinessObjects.",
    "role": "BI Senior Consultant.",
    "deliverables": "Material/capacitación; cubos; BEx Queries; reportes y dashboards.",
    "technologies": [
      "SAP BW; SAP PCM; SAP BPC; Web Intelligence; Analysis; Dashboard."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP31",
    "client": "AMTEX",
    "title": "Capacitación SAP Crystal Server / Crystal for Enterprise",
    "period": "oct 2013",
    "category": "IA & Soluciones Inteligentes",
    "flagship": false,
    "summary": "Capacitar usuarios en herramientas de reporting SAP y generar material de aprendizaje.",
    "challenge": "Capacitar usuarios en herramientas de reporting SAP y generar material de aprendizaje.",
    "role": "BI Senior Consultant.",
    "deliverables": "Material de entrenamiento; sesiones de capacitación.",
    "technologies": [
      "SAP Crystal Server 2011; Crystal for Enterprise; Dashboard; Live Office."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP32",
    "client": "Ministerio de Educación Nacional (Colombia)",
    "title": "Evolución y soporte SAP BusinessObjects",
    "period": "jun 2013–nov 2013",
    "category": "Business Intelligence & Analytics",
    "flagship": false,
    "summary": "Mejorar y soportar la plataforma SAP BusinessObjects y sus reportes.",
    "challenge": "Mejorar y soportar la plataforma SAP BusinessObjects y sus reportes.",
    "role": "BI Senior Consultant.",
    "deliverables": "Reportes y tableros mejorados; universos; administración y soporte.",
    "technologies": [
      "SAP BusinessObjects; Web Intelligence; universos/capa semántica."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP33",
    "client": "Secretaría Distrital de Movilidad de Bogotá",
    "title": "Bodega de datos y analítica con OBIEE",
    "period": "may 2013–fecha final por confirmar",
    "category": "Business Intelligence & Analytics",
    "flagship": false,
    "summary": "Definir requisitos y construir componentes de bodega de datos y tableros analíticos.",
    "challenge": "Definir requisitos y construir componentes de bodega de datos y tableros analíticos.",
    "role": "BI Senior Consultant.",
    "deliverables": "Modelo de bodega de datos; tablas de dimensiones/hechos; especificaciones de tableros/análisis.",
    "technologies": [
      "Data Warehouse; Oracle Business Intelligence Enterprise Edition (OBIEE)."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP34",
    "client": "Venus Colombiana",
    "title": "Tableros Comercial, Financiero y Logístico",
    "period": "feb 2013–may 2013",
    "category": "IA & Soluciones Inteligentes",
    "flagship": false,
    "summary": "Construir reporting y tableros de control en SAP BusinessObjects, primero sobre base local y luego sobre SAP BW.",
    "challenge": "Construir reporting y tableros de control en SAP BusinessObjects, primero sobre base local y luego sobre SAP BW.",
    "role": "BI Senior Consultant.",
    "deliverables": "Reportes Web Intelligence; tableros; integración con SAP BW.",
    "technologies": [
      "SAP BusinessObjects; Web Intelligence; SAP BW."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP35",
    "client": "Primestone",
    "title": "Capacitación Crystal Reports 2011 / Crystal Reports for Enterprise",
    "period": "feb 2013",
    "category": "IA & Soluciones Inteligentes",
    "flagship": false,
    "summary": "Capacitar usuarios y crear material de aprendizaje en herramientas Crystal Reports.",
    "challenge": "Capacitar usuarios y crear material de aprendizaje en herramientas Crystal Reports.",
    "role": "BI Senior Consultant.",
    "deliverables": "Sesiones y material de capacitación.",
    "technologies": [
      "SAP Crystal Reports 2011; Crystal Reports for Enterprise."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP36",
    "client": "PGS",
    "title": "SAP PPM + HANA + BusinessObjects Data Services",
    "period": "oct 2012–ene 2013",
    "category": "Business Intelligence & Analytics",
    "flagship": false,
    "summary": "Implementar y administrar una plataforma SAP integrada con HANA, Data Services y SAP PPM.",
    "challenge": "Implementar y administrar una plataforma SAP integrada con HANA, Data Services y SAP PPM.",
    "role": "Consultor funcional/técnico SAP PPM, ABAP y SAP BusinessObjects.",
    "deliverables": "Funciones/web services; RDS/reportes comparativos; dashboards y Crystal Reports.",
    "technologies": [
      "SAP PPM; ABAP; SAP HANA; SAP BusinessObjects Data Services; Dashboard; Crystal Reports."
    ],
    "tags": [
      "SAP HANA"
    ]
  },
  {
    "id": "CVP37",
    "client": "Comisión Federal de Electricidad - CFE (México)",
    "title": "Implementación SAP PPM y tablero de seguimiento de proyectos",
    "period": "jun 2012–sep 2012",
    "category": "IA & Soluciones Inteligentes",
    "flagship": false,
    "summary": "Implementar SAP PPM para gestión de portafolio e iniciativas, con formularios y tableros de seguimiento.",
    "challenge": "Implementar SAP PPM para gestión de portafolio e iniciativas, con formularios y tableros de seguimiento.",
    "role": "Consultor funcional SAP PPM y SAP BusinessObjects; consultor técnico ABAP.",
    "deliverables": "Formularios online/offline; servicios; funciones ABAP; tablero de control de proyectos.",
    "technologies": [
      "SAP PPM; SAP BusinessObjects Dashboard/Xcelsius; ABAP; Adobe Interactive Forms; Web Dynpro; SAP FM; SAP Project System."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP38",
    "client": "Banco de la República",
    "title": "Capacitación y migración SAP BusinessObjects",
    "period": "jul 2012–sep 2012",
    "category": "IA & Soluciones Inteligentes",
    "flagship": false,
    "summary": "Capacitar usuarios/administradores, configurar la plataforma y migrar reportes Crystal hacia SAP BusinessObjects XI 3.1.",
    "challenge": "Capacitar usuarios/administradores, configurar la plataforma y migrar reportes Crystal hacia SAP BusinessObjects XI 3.1.",
    "role": "Consultor técnico SAP BusinessObjects.",
    "deliverables": "Plataforma configurada; material/sesiones de capacitación; reportes migrados.",
    "technologies": [
      "SAP BusinessObjects XI 3.1; Crystal Reports; Xcelsius; InfoView; Query as a Web Service; Universe Designer; Integration Kit."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP39",
    "client": "Interpublic Group - IPG",
    "title": "Reporting de proyectos y recursos integrado con BW/PPM",
    "period": "mar 2012–may 2012",
    "category": "Business Intelligence & Analytics",
    "flagship": false,
    "summary": "Construir reportes y tableros ejecutivos para monitoreo de proyectos, recursos, disponibilidad, ingresos y gastos.",
    "challenge": "Construir reportes y tableros ejecutivos para monitoreo de proyectos, recursos, disponibilidad, ingresos y gastos.",
    "role": "Consultor funcional y técnico SAP BusinessObjects.",
    "deliverables": "Reportes de monitoreo; dashboards ejecutivos; reporting de capacidad y finanzas.",
    "technologies": [
      "Crystal Enterprise/Reports; Xcelsius; SAP BW; SAP PPM; OpenDocument."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP40",
    "client": "Metro de Medellín",
    "title": "Cuadro de Mando Integral y analítica de operaciones",
    "period": "oct 2011–feb 2012",
    "category": "Business Intelligence & Analytics",
    "flagship": false,
    "summary": "Construir reporting para seguimiento estratégico y operativo del Metro de Medellín.",
    "challenge": "Construir reporting para seguimiento estratégico y operativo del Metro de Medellín.",
    "role": "Consultor funcional y técnico SAP BusinessObjects.",
    "deliverables": "Reportes CMI/KPI; reporte Plan Rector; dashboards operativos; universos y servicios de consulta.",
    "technologies": [
      "Crystal Reports 2008; Xcelsius 2008; SAP BW; Oracle; Strategy Management; Web Intelligence; Explorer; Query as a Web Service."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP41",
    "client": "IT-ROI Solutions",
    "title": "Tablero de seguimiento de proyectos integrado con CA Clarity PPM",
    "period": "sep 2011",
    "category": "Business Intelligence & Analytics",
    "flagship": false,
    "summary": "Implementar un tablero de control para seguimiento presupuestal, riesgos y tareas de proyectos.",
    "challenge": "Implementar un tablero de control para seguimiento presupuestal, riesgos y tareas de proyectos.",
    "role": "Consultor funcional y técnico SAP BusinessObjects.",
    "deliverables": "Universos; servicios web; tablero de seguimiento de proyectos.",
    "technologies": [
      "SAP BusinessObjects; Dashboards/Xcelsius; CA Clarity PPM."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP42",
    "client": "Comcel y Coltabaco",
    "title": "Guías y manuales SAP BusinessObjects",
    "period": "ago 2011",
    "category": "IA & Soluciones Inteligentes",
    "flagship": false,
    "summary": "Crear material de usuario para herramientas SAP BusinessObjects.",
    "challenge": "Crear material de usuario para herramientas SAP BusinessObjects.",
    "role": "Consultor funcional y técnico SAP BusinessObjects.",
    "deliverables": "Guías y manuales de usuario.",
    "technologies": [
      "SAP BusinessObjects Web Intelligence; Crystal Reports; InfoView."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  },
  {
    "id": "CVP43",
    "client": "Financiera Energética Nacional - FEN",
    "title": "Pruebas y soporte de aplicaciones de seguimiento a proyectos",
    "period": "may 2011–jul 2011",
    "category": "Business Intelligence & Analytics",
    "flagship": false,
    "summary": "Validar aplicaciones web de seguimiento a proyectos y apoyar al usuario final.",
    "challenge": "Validar aplicaciones web de seguimiento a proyectos y apoyar al usuario final.",
    "role": "Consultor funcional y técnico ABAP y SAP BusinessObjects.",
    "deliverables": "Evidencias/scripts de prueba; soporte de aplicaciones.",
    "technologies": [
      "Web Dynpro ABAP; SAP BusinessObjects."
    ],
    "tags": [
      "Data Architecture",
      "Analytics"
    ]
  }
];
