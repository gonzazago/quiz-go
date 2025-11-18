import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, RotateCcw, BarChart3 } from 'lucide-react';

const Quiz = () => {
  const questions = [
    {
      id: 1,
      question: "SEGÚN TEXTO DE D. GOLEMAN, EN EL PROCESO DE SINTONIZACIÓN EL NIÑO CONSTATA QUE SUS EMOCIONES:",
      options: [
        "SON CAPTADAS, PUDIENDO SER ACEPTADAS O RECHAZADAS",
        "SON CAPTADAS, ACEPTADAS, Y PUDIERAN SER CORRESPONDIDAS",
        "SON CAPTADAS, ACEPTADAS O RECHAZADAS EN ALGUNOS CASOS, Y PUDIERAN SER CORRESPONDIDAS",
        "SON CAPTADAS, ACEPTADAS Y CORRESPONDIDAS CON ÉTICA",
        "SON CAPTADAS, ACEPTADAS Y CORRESPONDIDAS CON EMPATIA",
        "NINGUNA DE LAS OPCIONES ANTERIORES SON CORRECTAS EN SU TOTALIDAD"
      ],
      correct: [4]
    },
    {
      id: 2,
      question: "QUE ES UN ORGANIGRAMA:",
      options: [
        "REPRESENTACIÓN GRÁFICA DE LA EMPRESA Y SU DISPONIBILIDAD PARA FORMAR PARTE DEL PROYECTO U ORGANIZACIÓN.",
        "REPRESENTACIÓN MATRICIAL DE LOS ROLES DE LOS MIEMBROS DEL EQUIPO DEL PROYECTO U ORGANIZACIÓN.",
        "REPRESENTACIÓN GRÁFICA DE LOS MIEMBROS DEL EQUIPO DEL PROYECTO U ORGANIZACIÓN Y DE SUS RELACIONES DE COMUNICACIÓN.",
        "REPRESENTACIÓN JERÁRQUICA DE MIEMBROS DEL EQUIPO DEL PROYECTO U ORGANIZACIÓN Y COINCIDE CON EL ORDEN DE INCORPORACIÓN AL PROYECTO U ORGANIZACIÓN",
        "REPRESENTACIÓN MATRICIAL DE LOS ROLES DE LOS MIEMBROS DEL EQUIPO DEL PROYECTO U ORGANIZACIÓN Y SU IMPORTANCIA RELATIVA",
        "NINGUNA DE LAS OPCIONES ANTERIORES CON CORRECTAS EN SU TOTALIDAD."
      ],
      correct: [2]
    },
    {
      id: 3,
      question: "PLAN PARA LA ADMINISTRACIÓN DE PERSONAL ES:",
      options: [
        "UN COMPONENTE DEL CALENDARIO DE RECURSOS QUE DESCRIBE CUÁNDO Y CÓMO SE VAN A INCORPORAR LOS MIEMBROS DEL EQUIPO DEL PROYECTO Y A DURANTE CUÁNTO TIEMPO SE LES VA A NECESITAR.",
        "UN COMPONENTE DEL PLAN DE GESTIÓN DE RECURSOS HUMANOS QUE DESCRIBE DE QUE MANERA SE DEBEN MANEJAR LOS RECURSOS, LAS POLÍTICAS Y PROCEDIMIENTOS DE RECONOCIMIENTOS Y RECOMPENSAS.",
        "UN COMPONENTE DEL PLAN DE GESTIÓN DE RECURSOS HUMANOS QUE DESCRIBE CUÁNDO Y CÓMO SE VAN A INCORPORAR LOS MIEMBROS DEL EQUIPO Y DURANTE CUÁNTO TIEMPO SE LES VA A NECESITAR.",
        "UN COMPONENTE DEL PLAN DE INTEGRAL DE PROYECTO QUE DESCRIBE CUÁNDO Y CÓMO SE VAN A INCORPORAR LOS MIEMBROS DEL EQUIPO DEL PROYECTO Y DURANTE CUANTO TIEMPO SE LES VA A NECESITAR",
        "ES EL PLAN DE GESTIÓN DE RECURSOS HUMANOS QUE DESCRIBE CUÁNDO Y CÓMO SE VAN A INCORPORAR LOS MIEMBROS DEL EQUIPO DEL PROYECTO Y DURANTE CUÁNTO TIEMPO SE LES VA A NECESITAR.",
        "NINGUNA DE LAS OPCIONES ANTERIORES SON CORRECTAS EN SU TOTALIDAD."
      ],
      correct: [2]
    },
    {
      id: 4,
      question: "EN UN PROCESO DE NEGOCIACIÓN SE DAN LAS SIGUIENTES ETAPAS",
      options: [
        "PREPARACIÓN, EJECUCIÓN, CIERRE Y SEGUIMIENTO.",
        "DEFINICIÓN DE OBJETIVOS, RECOPILACIÓN DE INFORMACIÓN DE LAS OTRAS PARTES, ESTABLECIMIENTO DE UNA ESTRATEGIA, EJECUCIÓN",
        "PREPARACIÓN, EJECUCIÓN, REVISIÓN LEGAL, FIRMA DEL ACUERDO, EVALUACIÓN Y RETROALIMENTACIÓN",
        "PREPARACIÓN, EJECUCIÓN, CIERRE Y MANTENIMIENTO DE LAS RELACIONES",
        "PREPARACIÓN, COMUNICACIÓN Y GESTIÓN DE CONFLICTOS DE INTERESES, CIERRE Y SEGUIMIENTO DE LOS ACUERDOS ALCANZADOS"
      ],
      correct: [0]
    },
    {
      id: 5,
      question: "COMO PARTE DE LAS HERRAMIENTAS Y TÉCNICAS DEL SUBPROCESO DE ADQUIRIR TENEMOS:",
      options: [
        "BÚSQUEDAS PREVIA, NEGOCIACIÓN, ADQUISICIÓN, EQUIPOS VIRTUALES, ANÁLISIS DE DECISIONES MULTICRITERIO",
        "ASIGNACIÓN PREVIA, NEGOCIACIÓN, ADQUISICIÓN, EQUIPOS VIRTUALES, ANÁLISIS DE DECISIONES MULTICRITERIO",
        "ASIGNACIÓN PREVIA, NEGOCIACIÓN, ADQUISICIÓN, EQUIPOS VIRTUALES, ANÁLISIS DE DECISIONES MULTICRITERIO",
        "ASIGNACIÓN PREVIA, PLANIFICACIÓN, ADQUISICIÓN, EQUIPOS VIRTUALES, RECONOCIMIENTOS Y RECOMPENSAS",
        "ASIGNACIÓN PREVIA, NEGOCIACIÓN, ADQUISICIÓN, EVALUACIÓN DE EQUIPOS, ANÁLISIS DE DECISIONES MULTICRITERIO",
        "NINGUNA DE LAS OPCIONES ANTERIORES SON CORRECTAS EN SU TOTALIDAD."
      ],
      correct: [2]
    },
    {
      id: 6,
      question: "LOS INFORMES DE DESEMPEÑO DEL TRABAJO:",
      options: [
        "PROPORCIONAN VISIBILIDAD SOBRE EL DESEMPEÑO Y RENDIMIENTO DE CADA PERSONA DEL PROYECTO U ORGANIZACIÓN",
        "PROPORCIONAN VISIBILIDAD SOBRE EL ESTADO DEL PROYECTO EN TÉRMINOS DE CRONOGRAMA, COSTOS, CALIDAD Y ALCANCE",
        "PROPORCIONAN INFORMACIÓN SOBRE LA EVOLUCIÓN DEL RENDIMIENTO DE CADA INDIVIDUO DEL PROYECTO U ORGANIZACIÓN",
        "PROPORCIONAN INFORMACIÓN DEL CUMPLIMIENTO DE LAS TAREAS ASIGNADAS A CADA MIEMBRO DEL EQUIPO",
        "PROPORCIONAN VISIBILIDAD SOBRE EL AVANCE DEL TRABAJO INDIVIDUAL DE CADA PERSONA DEL PROYECTO",
        "NINGUNA DE LAS OPCIONES ANTERIORES SON CORRECTAS EN SU TOTALIDAD."
      ],
      correct: [1]
    },
    {
      id: 7,
      question: "LOS 4 PILARES BÁSICOS DE ELEVATOR PITCH (DISCURSO DE ASCENSOR) REFIEREN A:",
      options: [
        "CLARIDAD, PERFECCIÓN, SIMPLIFICAR Y PASIÓN",
        "CLARIDAD, PASIÓN, SIMPLIFICAR Y FEEDBACK",
        "SIMPLIFICAR, PRÁCTICA, CLARIDAD Y PERFECCIÓN",
        "CLARIDAD, SIMPLIFICAR, PASIÓN Y PRÁCTICA",
        "IRREFUTABLE, REPLICABLE, PRACTICABLE Y CREÍBLE",
        "REPLICABLE, CONFIABLE, IRREFUTABLE Y CLARO"
      ],
      correct: [3]
    },
    {
      id: 8,
      question: "EN RELACIÓN AL MÉTODO DE NEGOCIACIÓN HARVARD SON CORRECTAS LAS SIGUIENTES PREMISAS:",
      options: [
        "ES MÁS IMPORTANTE CENTRARSE EN LAS POSICIONES MANIFIESTAS QUE EN LOS INTERESES",
        "EL INTERCAMBIO DE IDEAS Y EL PRINCIPIO COLABORATIVO PROMUEVE LA GENERACIÓN DE OPCIONES",
        "MÁS ALLÁ DE LA OPINIÓN DE LAS PARTES, ALGUNOS COMPROMISOS DEBEN FORMALIZARSE POR ESCRITO",
        "ES LEGITIMO UN CRITERIO DE EVALUACIÓN DE PROPUESTAS CUANDO UNA DE LAS PARTES LO FORMALIZA",
        "CONOCER LA PROPIA MAAN ES SUFICIENTE PARA LOGRAR LA MEJOR ALTERNATIVA EN UN ACUERDO",
        "MEJOR ALTERNATIVA PARA UN ACUERDO NEGOCIADO SE IDENTIFICA COMO MAAN",
        "EN LA SEPARACIÓN DE PERSONAS Y PROBLEMAS ES NECESARIO LOGRAR INTERESES COMUNES",
        "\"QUIERO UN AUMENTO SALARIAL DEL 20%\" PUEDE REPRESENTAR UNA POSICIÓN O UN INTERÉS"
      ],
      correct: [1, 2, 6, 7],
      multiple: true
    },
    {
      id: 9,
      question: "LAS REGLAS BÁSICAS DE CONVIVENCIA ESTABLECEN:",
      options: [
        "ESTABLECEN EXPECTATIVAS CLARAS ACERCA DEL COMPORTAMIENTO ACEPTABLE POR PARTE DE LOS MIEMBROS DEL EQUIPO DEL PROYECTO.",
        "ESTABLECEN LINEAMIENTOS DE CONDUCTA RESPECTO AL TRATO DE CLIENTES Y PERSONAS SUBCONTRATADAS.",
        "ESTABLECEN CADA UNA DE LA ACTIVIDADES QUE LOS EQUIPOS TIENEN QUE LLEVAR ADELANTE.",
        "ESTABLECEN LOS CANALES BÁSICOS DE CONVIVENCIA Y COMUNICACIÓN DE LOS EQUIPOS INVOLUCRADOS, INCLUIDOS LOS CLIENTES.",
        "ESTABLECEN EL COMPROMISO CON PAUTAS CLARAS DESDE EL COMIENZO REDUCE LOS MALENTENDIDOS Y AUMENTA LA PRODUCTIVIDAD.",
        "ESTABLECEN FORMAS DE COMPORTAMIENTO RESPECTO A AQUELLAS PERSONAS QUE COMPARTEN ESPACIO FÍSICO EN LA COMPAÑÍA.",
        "ESTABLECEN EXPECTATIVAS CLARAS DE COMPORTAMIENTO ENTRE LOS MIEMBROS DEL EQUIPO EN REUNIONES Y ESPACIOS FÍSICOS",
        "NINGUNA DE LAS OPCIONES ANTERIORES CON CORRECTAS EN SU TOTALIDAD"
      ],
      correct: [0, 4],
      multiple: true
    },
    {
      id: 10,
      question: "SEGÚN LOS APORTES DE D. GOLEMAN EN RELACIÓN A LA INTELIGENCIA EMOCIONAL, PODEMOS CONCLUIR QUE:",
      options: [
        "EL SECUESTRO EMOCIONAL SUPONE LA ACTIVACIÓN DE LA AMÍGDALA",
        "LA ANSIEDAD FRECUENTEMENTE ENTORPECE EL FUNCIONAMIENTO DEL INTELECTO",
        "MANEJAR EL ESTRÉS FACILITA EL CONTROL DE LAS EMOCIONES",
        "QUIEN POSEE AUTOCONCIENCIA EMOCIONAL LOGRA UNA MAYOR TOLERANCIA A LA FRUSTRACIÓN",
        "LOS PROCESOS NEOCORTICALES MANTIENEN EQUILIBRADAS NUESTRAS RESPUESTAS EMOCIONALES",
        "TENER COMPRENSIÓN DE LAS CAUSAS DE LAS EMOCIONES, IMPLICA LOGRAR CONTROLARLAS",
        "EL PROCESO DE SINTONIZACIÓN SIEMPRE INFLUYE EN EL RITMO DE TODA RELACIÓN",
        "LOGRANDO AUTOCONCIENCIA EMOCIONAL DISMINUYEN LOS COMPORTAMIENTOS AGRESIVOS"
      ],
      correct: [2, 4, 6],
      multiple: true
    },
    {
      id: 11,
      question: "CON RESPECTO A LA ÉTICA PODEMOS DECIR QUE",
      options: [
        "SE OCUPA DE PENSAR EL VALOR DEL BIEN, SU NATURALEZA Y RELACIÓN CON OTROS VALORES.",
        "QUE ES LO MISMO QUE LA MORAL SÓLO SE DIFERENCIAN EN SU MODO DE ESTUDIO.",
        "NOS HABLA DE CÓDIGOS DE CONDUCTA RELACIONADOS CON LO QUE ESTÁ BIEN Y LO QUE ESTÁ MAL.",
        "PUEDE EXISTIR SIN LA MORAL.",
        "SIGNIFICA CARÁCTER, COMPORTAMIENTO, MANERA DE SER.",
        "ES UNA DISCIPLINA FILOSÓFICA QUE INTENTA UNA ABSTRACCIÓN Y SUPERACIÓN DE LA MORAL.",
        "HACE REFERENCIA A UNA SERIE DE NORMAS Y CREENCIAS QUE DETERMINAN LO BUENO Y LO MALO.",
        "ES UN FENÓMENO CULTURAL INHERENTE A TODO GRUPO HUMANO."
      ],
      correct: [0, 2, 4, 5],
      multiple: true
    },
    {
      id: 12,
      question: "SON TÉCNICAS MENCIONADAS PARA PROMOVER LA ESCUCHA ACTIVA QUE PERMITEN MEJORAR LA COMUNICACIÓN EFICAZ:",
      options: [
        "\"CONTEXTUALIZAR CON SONORIDAD\"",
        "\"PROYECTAR O REFLEJAR LAS CONSECUENCIAS\"",
        "\"CREDIBILIDAD EN LA BREVEDAD\"",
        "\"REFLEJAR LOS SENTIMIENTOS SUBYACENTES\"",
        "\"INVITAR A NUEVAS APORTACIONES\"",
        "\"VISUALIZAR CON SIMPLICIDAD\"",
        "\"PARAFRASEAR LOS CONTENIDOS\"",
        "\"RESPUESTAS NO VERBALES A NUESTRA EMISIÓN VERBAL\""
      ],
      correct: [1, 3, 4, 6, 7],
      multiple: true
    },
    {
      id: 13,
      question: "EN LOS ESTÁNDARES DE ELEVATOR PITCH LO IRREFUTABLE SE CONSTRUYE GENERANDO AMBICIÓN DESDE LA CONSTRUCCIÓN DE VALOR.",
      options: [
        "VERDADERO",
        "FALSO: A PRUEBA DE OBJECIONES, SE CONSTRUYE CON ARGUMENTOS"
      ],
      correct: [1]
    },
    {
      id: 14,
      question: "SEGÚN LOS APORTES DE D. GOLEMAN EN RELACIÓN A LA INTELIGENCIA EMOCIONAL, PODEMOS CONCLUIR QUE:",
      options: [
        "QUIEN POSEE AUTOCONCIENCIA EMOCIONAL LOGRA UNA MAYOR TOLERANCIA A LA FRUSTRACIÓN",
        "EL FRACASO DE LA ACTIVACIÓN DE LOS PROCESOS NEOCORTICALES CAUSA EL SECUESTRO EMOCIONAL O DE LA AMIGDALA",
        "EL MINIMO NERVIOSISMO PERMITE ALCANZAR EL MÁXIMO RENDIMIENTO",
        "TENER COMPRENSIÓN DE LAS CAUSAS DE LAS EMOCIONES, IMPLICA LOGRAR CONTROLARLAS",
        "LOGRAMOS CONTROLAR NUESTRAS EMOCIONES CUANDO PODEMOS RECONOCERLAS Y DESIGNARLAS",
        "EL PROCESO DE SINTONIZACIÓN ES DETERMINANTE EN EL DESARROLLO DE LA EMPATIA",
        "LA AMIGDALA EXTRAE UNA CONCLUSIÓN APRESURADA Y DISPARA UNA RESPUESTA RACIONAL",
        "TENEMOS AUTOCONCIENCIA EMOCIONAL SI PODEMOS RECONOCER Y DESIGNAR NUESTRAS EMOCIONES"
      ],
      correct: [1, 2, 5, 7],
      multiple: true
    },
    {
      id: 15,
      question: "EN RELACIÓN AL MÉTODO DE NEGOCIACIÓN HARVARD SON CORRECTAS LAS SIGUIENTES PREMISAS:",
      options: [
        "\"NECESITO UN AUMENTO SALARIAL\" PODRÍA SER UN INTERÉS NO MANIFIESTO EN UNA POSICIÓN",
        "LA MEJOR ALTERNATIVA PARA UN ACUERDO NEGOCIADO SE IDENTIFICA COMO MAAN",
        "SI LA RELACIÓN ENTRE LAS PARTES SE PERJUDICA, DEBEN PLANTEARSE BENEFICIOS COMPENSATORIOS",
        "ALGUNOS COMPROMISOS ENTRE LAS PARTES DEBEN FORMALIZARSE POR ESCRITO",
        "CONOCER LAS MAAN DE AMBAS PARTES PERMITE LOGRAR LA MEJOR ALTERNATIVA EN UN ACUERDO",
        "ES MÁS IMPORTANTE CENTRARSE EN LOS INTERESES DE LAS PARTES QUE EN SUS POSICIONES",
        "LA SEPARACIÓN DE PERSONAS Y PROBLEMAS NO ES CONDICIÓN NECESARIA PARA LOGRAR EL ACUERDO",
        "LAS OPCIONES PARA RESOLVER EL PROBLEMA PUEDEN DEFINIRSE ANTES DE LA NEGOCIACIÓN"
      ],
      correct: [0, 3, 5],
      multiple: true
    },
    {
      id: 16,
      question: "LAS REGLAS BÁSICAS DE CONVIVENCIA ESTABLECEN:",
      options: [
        "ESTABLECEN EXPECTATIVAS CLARAS ACERCA DEL COMPORTAMIENTO ACEPTABLE POR PARTE DE LOS MIEMBROS DEL EQUIPO DEL PROYECTO.",
        "ESTABLECEN CADA UNA DE LA ACTIVIDADES QUE LOS EQUIPOS TIENEN QUE LLEVAR ADELANTE.",
        "ESTABLECEN EL COMPROMISO CON PAUTAS CLARAS DESDE EL COMIENZO REDUCE LOS MALENTENDIDOS Y AUMENTA LA PRODUCTIVIDAD.",
        "ESTABLECEN LOS CANALES BÁSICOS DE CONVIVENCIA Y COMUNICACIÓN DE LOS EQUIPOS INVOLUCRADOS, INCLUIDOS LOS CLIENTES",
        "ESTABLECEN LINEAMIENTOS DE CONDUCTA RESPECTO AL TRATO DE CLIENTES Y PERSONAS SUBCONTRATADAS",
        "ESTABLECEN FORMAS DE COMPORTAMIENTO RESPECTO A AQUELLAS PERSONAS QUE COMPARTEN ESPACIO FÍSICO EN LA COMPAÑÍA",
        "ESTABLECEN EXPECTATIVAS CLARAS DE COMPORTAMIENTO ENTRE LOS MIEMBROS DEL EQUIPO EN REUNIONES Y ESPACIOS FISICOS",
        "NINGUNA DE LAS OPCIONES ANTERIORES CON CORRECTAS EN SU TOTALIDAD"
      ],
      correct: [0],
      multiple: true
    },
    {
      id: 17,
      question: "SON TÉCNICAS MENCIONADAS PARA PROMOVER LA ESCUCHA ACTIVA QUE PERMITEN MEJORAR LA COMUNICACIÓN EFICAZ:",
      options: [
        "\"INVITAR A NUEVAS APORTACIONES\"",
        "\"CONTEXTUALIZAR CON SONORIDAD\"",
        "\"REFLEJAR LOS SENTIMIENTOS SUBYACENTES\"",
        "\"PROYECTAR O REFLEJAR LAS CONSECUENCIAS\"",
        "\"CREDIBILIDAD EN LA BREVEDAD\"",
        "\"VISUALIZAR CON SIMPLICIDAD\"",
        "\"PARAFRASEAR LOS CONTENIDOS\"",
        "\"RESPUESTAS NO VERBALES A NUESTRA EMISIÓN VERBAL\""
      ],
      correct: [0, 2, 3, 6],
      multiple: true
    },
    {
      id: 18,
      question: "CON RESPECTO A LA ÉTICA PODEMOS DECIR QUE",
      options: [
        "QUE ES LO MISMO QUE LA MORAL SÓLO SE DIFERENCIAN EN SU MODO DE ESTUDIO",
        "SIGNIFICA CARÁCTER, COMPORTAMIENTO, MANERA DE SER.",
        "HACE REFERENCIA A UNA SERIE DE NORMAS Y CREENCIAS QUE DETERMINAN LO BUENO Y LO MALO",
        "SE OCUPA DE PENSAR EL VALOR DEL BIEN, SU NATURALEZA Y RELACIÓN CON OTROS VALORES",
        "ES UN FENÓMENO CULTURAL INHERENTE A TODO GRUPO HUMANO.",
        "PUEDE EXISTIR SIN LA MORAL",
        "ES UNA DISCIPLINA FILOSÓFICA QUE INTENTA UNA ABSTRACCIÓN Y SUPERACIÓN DE LA MORAL.",
        "NOS HABLA DE CÓDIGOS DE CONDUCTA RELACIONADOS CON LO QUE ESTÁ BIEN Y LO QUE ESTÁ MAL."
      ],
      correct: [1, 3, 6, 7],
      multiple: true
    },
    {
      id: 19,
      question: "UN ORGANIGRAMA ES UNA:",
      options: [
        "REPRESENTACIÓN GRÁFICA DE LOS MIEMBROS DEL EQUIPO DEL PROYECTO U ORGANIZACIÓN Y DE SUS RELACIONES DE COMUNICACIÓN.",
        "REPRESENTACIÓN MATRICIAL DE LOS ROLES DE LOS MIEMBROS DEL EQUIPO DEL PROYECTO U ORGANIZACIÓN.",
        "REPRESENTACIÓN JERÁRQUICA DE MIEMBROS DEL EQUIPO DEL PROYECTO U ORGANIZACIÓN Y COINCIDE CON EL ORDEN DE INCORPORACIÓN AL PROYECTO U ORGANIZACIÓN",
        "REPRESENTACIÓN MATRICIAL DE LOS ROLES DE LOS MIEMBROS DEL EQUIPO DEL PROYECTO U ORGANIZACIÓN Y SU IMPORTANCIA RELATIVA.",
        "REPRESENTACIÓN GRÁFICA DE LA EMPRESA Y SU DISPONIBILIDAD PARA FORMAR PARTE DEL PROYECTO U ORGANIZACIÓN.",
        "NINGUNA DE LAS OPCIONES ANTERIORES CON CORRECTAS EN SU TOTALIDAD."
      ],
      correct: [0]
    },
    {
      id: 20,
      question: "PLAN PARA LA ADMINISTRACIÓN DE PERSONAL ES:",
      options: [
        "UN COMPONENTE DEL PLAN DE INTEGRAL DE PROYECTO QUE DESCRIBE CUÁNDO Y CÓMO SE VAN A INCORPORAR LOS MIEMBROS DEL EQUIPO DEL PROYECTO Y DURANTE CUÁNTO TIEMPO SE LES VA A NECESITAR.",
        "UN COMPONENTE DEL CALENDARIO DE RECURSOS QUE DESCRIBE CUÁNDO Y CÓMO SE VAN A INCORPORAR LOS MIEMBROS DEL EQUIPO DEL PROYECTO Y DURANTE CUÁNTO TIEMPO SE LES VA A NECESITAR.",
        "ES EL PLAN DE GESTIÓN DE RECURSOS HUMANOS QUE DESCRIBE CUÁNDO Y CÓMO SE VAN A INCORPORAR LOS MIEMBROS DEL EQUIPO DEL PROYECTO Y DURANTE CUÁNTO TIEMPO SE LES VA A NECESITAR.",
        "UN COMPONENTE DEL PLAN DE GESTIÓN DE RECURSOS HUMANOS QUE DESCRIBE DE QUE MANERA SE DEBEN MANEJAR LOS RECURSOS, LAS POLÍTICAS Y PROCEDIMIENTOS DE RECONOCIMIENTOS Y RECOMPENSAS.",
        "UN COMPONENTE DEL PLAN DE GESTIÓN DE RECURSOS HUMANOS QUE DESCRIBE CUÁNDO Y CÓMO SE VAN A INCORPORAR LOS MIEMBROS DEL EQUIPO DEL PROYECTO Y DURANTE CUÁNTO TIEMPO SE LES VA A NECESITAR.",
        "NINGUNA DE LAS OPCIONES ANTERIORES SON CORRECTAS EN SU TOTALIDAD."
      ],
      correct: [4]
    },
    {
      id: 21,
      question: "SEGÚN TEXTO DE D. GOLEMAN, EN EL PROCESO DE SINTONIZACIÓN EL NIÑO CONSTATA QUE SUS EMOCIONES:",
      options: [
        "SON CAPTADAS, PUDIENDO SER ACEPTADAS O RECHAZADAS",
        "SON CAPTADAS, ACEPTADAS, Y PUDIERAN SER CORRESPONDIDAS",
        "SON CAPTADAS, ACEPTADAS O RECHAZADAS EN ALGUNOS CASOS, Y PUDIERAN SER CORRESPONDIDAS",
        "SON CAPTADAS, ACEPTADAS Y CORRESPONDIDAS CON EMPATIA",
        "SON CAPTADAS, ACEPTADAS Y CORRESPONDIDAS CON ÉTICA",
        "NINGUNA DE LAS OPCIONES ANTERIORES SON CORRECTAS EN SU TOTALIDAD."
      ],
      correct: [3]
    },
    {
      id: 22,
      question: "COMO PARTE DE LAS HERRAMIENTAS Y TÉCNICAS DEL SUBPROCESO DE ADQUIRIR TENEMOS:",
      options: [
        "BÚSQUEDAS PREVIA, NEGOCIACIÓN, ADQUISICIÓN, EQUIPOS VIRTUALES, ANÁLISIS DE DECISIONES MULTICRITERIO",
        "ASIGNACIÓN PREVIA, NEGOCIACIÓN, ADQUISICIÓN, EQUIPOS VIRTUALES, ANÁLISIS DE DECISIONES MULTICRITERIO",
        "ASIGNACIÓN PREVIA, NEGOCIACIÓN, ADQUISICIÓN, EQUIPOS VIRTUALES, ANÁLISIS DE DECISIONES MULTICRITERIO",
        "ASIGNACIÓN PREVIA, PLANIFICACIÓN, ADQUISICIÓN, EQUIPOS VIRTUALES, RECONOCIMIENTOS Y RECOMPENSAS",
        "ASIGNACIÓN PREVIA, NEGOCIACIÓN, ADQUISICIÓN, EVALUACIÓN DE EQUIPOS, ANÁLISIS DE DECISIONES MULTICRITERIO",
        "NINGUNA DE LAS OPCIONES ANTERIORES SON CORRECTAS EN SU TOTALIDAD."
      ],
      correct: [1]
    },
    {
      id: 23,
      question: "LOS INFORMES DE DESEMPEÑO DEL TRABAJO:",
      options: [
        "PROPORCIONAN VISIBILIDAD SOBRE AVANCE DEL TRABAJO INDIVIDUAL DE CADA PERSONA DEL PROYECTO",
        "PROPORCIONAN VISIBILIDAD SOBRE EL DESEMPEÑO Y RENDIMIENTO DE CADA PERSONA DEL PROYECTO U ORGANIZACIÓN",
        "PROPORCIONAN INFORMACIÓN DEL CUMPLIMIENTO DE LAS TAREAS ASIGNADAS A CADA MIEMBRO DEL EQUIPO",
        "PROPORCIONAN VISIBILIDAD SOBRE EL ESTADO DEL PROYECTO EN TÉRMINOS DE CRONOGRAMA, COSTOS, CALIDAD Y ALCANCE",
        "PROPORCIONAN INFORMACIÓN SOBRE LA EVOLUCIÓN DEL RENDIMIENTO DE CADA INDIVIDUO DEL PROYECTO U ORGANIZACIÓN",
        "NINGUNA DE LAS OPCIONES ANTERIORES SON CORRECTAS EN SU TOTALIDAD."
      ],
      correct: [3]
    },
    {
      id: 24,
      question: "EN UN PROCESO DE NEGOCIACIÓN SE DAN LAS SIGUIENTES ETAPAS",
      options: [
        "PREPARACIÓN, EJECUCIÓN, CIERRE Y SEGUIMIENTO.",
        "DEFINICIÓN DE OBJETIVOS, RECOPILACIÓN DE INFORMACIÓN DE LAS OTRAS PARTES, ESTABLECIMIENTO DE UNA ESTRATEGIA, EJECUCIÓN",
        "PLANIFICAR LA COMUNICACIÓN, ESTABLECER EL BATNA, EJECUTAR LA NEGOCIACIÓN, FIRMAR ACUERDOS",
        "PREPARACIÓN, EJECUCIÓN, REVISIÓN LEGAL, FIRMA DEL ACUERDO, EVALUACIÓN Y RETROALIMENTACIÓN",
        "PREPARACIÓN, EJECUCIÓN, CIERRE Y MANTENIMIENTO DE LAS RELACIONES",
        "PREPARACIÓN, COMUNICACIÓN Y GESTIÓN DE CONFLICTOS DE INTERESES, CIERRE Y SEGUIMIENTO DE LOS ACUERDOS ALCANZADOS"
      ],
      correct: [0]
    },
    {
      id: 25,
      question: "LAS 4 P DE ELEVATOR PITCH (DISCURSO DE ASCENSOR) REFIEREN A:",
      options: [
        "PENSAR, PRODUCIR, PRACTICAR, PREGUNTAR",
        "PENSAR, PEDIR, PRODUCIR, PRACTICAR",
        "PRODUCIR, PREVENIR, PRACTICAR, PRESENTAR",
        "PENSAR, PLANEAR, PRACTICAR, PRESENTAR",
        "PENSAR, PRODUCIR, PRACTICAR, PRESENTAR",
        "PLANEAR, PRODUCIR, PRACTICAR, PRESENTAR"
      ],
      correct: [4]
    },
    {
      id: 26,
      question: "SON TÉCNICAS MENCIONADAS PARA PROMOVER LA ESCUCHA ACTIVA QUE PERMITEN MEJORAR LA COMUNICACIÓN EFICAZ:",
      options: [
        "\"CONTEXTUALIZAR CON SONORIDAD\"",
        "\"CREDIBILIDAD EN LA BREVEDAD\"",
        "\"PARAFRASEAR LOS CONTENIDOS\"",
        "\"RESPUESTAS NO VERBALES A NUESTRA EMISIÓN VERBAL\"",
        "\"INVITAR A NUEVAS APORTACIONES\"",
        "\"VISUALIZAR CON SIMPLICIDAD\"",
        "\"REFLEJAR LOS SENTIMIENTOS SUBYACENTES\"",
        "\"PROYECTAR O REFLEJAR LAS CONSECUENCIAS\""
      ],
      correct: [2, 4, 6, 7],
      multiple: true
    },
    {
      id: 27,
      question: "SEGÚN TEXTO DE D. GOLEMAN, EN EL PROCESO DE SINTONIZACIÓN EL NIÑO CONSTATA QUE SUS EMOCIONES:",
      options: [
        "SON CAPTADAS, PUDIENDO SER ACEPTADAS O RECHAZADAS",
        "SON CAPTADAS, ACEPTADAS, Y PUDIERAN SER CORRESPONDIDAS",
        "SON CAPTADAS, ACEPTADAS O RECHAZADAS EN ALGUNOS CASOS, Y PUDIERAN SER CORRESPONDIDAS",
        "SON CAPTADAS, ACEPTADAS Y CORRESPONDIDAS CON ÉTICA",
        "SON CAPTADAS, ACEPTADAS Y CORRESPONDIDAS CON EMPATÍA",
        "NINGUNA DE LAS OPCIONES ANTERIORES SON CORRECTAS EN SU TOTALIDAD."
      ],
      correct: [4]
    },
    {
      id: 28,
      question: "ALGUNO DE LOS PRINCIPIOS DE LA NEGOCIACIÓN COLABORATIVA SON:",
      options: [
        "SEPARAR LAS PERSONAS DEL PROBLEMA, BUSCAR INTERESES MÁS QUE POSICIONES, GENERAR OPCIONES BENEFICIOSAS PARA TODAS LAS PARTES, UTILIZAR A CRITERIOS OBJETIVOS Y COMPROMISO DE LAS PARTES",
        "SEPARAR LAS PERSONAS DEL PROBLEMA, GENERAR INCERTIDUMBRE, UTILIZAR LA FALTA DE INFORMACIÓN",
        "BUSCAR INTERESES MÁS QUE POSICIONES, GENERAR OPCIONES BENEFICIOSAS PARA TODAS LAS PARTES, UTILIZAR LA TÉCNICA DE ANCLAJE",
        "SEPARAR LAS PERSONAS DEL PROBLEMA, BUSCAR INTERESES MÁS QUE POSICIONES, GENERAR OPCIONES BENEFICIOSAS PARA TODAS LAS PARTES, UTILIZAR EL D ENGAÑO PARA LOGRAR LOS OBJETIVOS",
        "SEPARAR LAS PERSONAS DEL PROBLEMA, BUSCAR INTERESES MÁS QUE POSICIONES, GENERAR OPCIONES BENEFICIOSAS PARA TODAS LAS PARTES",
        "SEPARAR LAS PERSONAS DEL PROBLEMA, GENERAR INCERTIDUMBRE, UTILIZAR LA FALTA DE INFORMACIÓN Y UTILIZAR ARGUMENTOS PARA CONVECER A LAS PARTES FA ACEPTAR CIERTAS IDEAS"
      ],
      correct: [0]
    },
    {
      id: 29,
      question: "COMO PARTE DE LAS HERRAMIENTAS Y TÉCNICAS DEL SUBPROCESO DE ADQUIRIR TENEMOS:",
      options: [
        "ASIGNACIÓN PREVIA, NEGOCIACIÓN, ADQUISICIÓN, EQUIPOS VIRTUALES, ANÁLISIS DE DECISIONES MULTICRITERIO",
        "ASIGNACIÓN PREVIA, NEGOCIACIÓN, ADQUISICIÓN, EVALUACIÓN DE EQUIPOS, ANÁLISIS DE DECISIONES MULTICRITERIO",
        "BÚSQUEDAS PREVIA, NEGOCIACIÓN, ADQUISICIÓN, EQUIPOS VIRTUALES, ANÁLISIS DE DECISIONES MULTICRITERIO",
        "ASIGNACIÓN PREVIA, PLANIFICACIÓN, ADQUISICIÓN, EQUIPOS VIRTUALES, RECONOCIMIENTOS Y RECOMPENSAS",
        "ASIGNACIÓN PREVIA, NEGOCIACIÓN, ADQUISICIÓN, DESCRIPCIÓN DE ROLES, ANÁLISIS DE DECISIONES MULTICRITERIO",
        "NINGUNA DE LAS OPCIONES ANTERIORES SON CORRECTAS EN SU TOTALIDAD."
      ],
      correct: [0]
    },
    {
      id: 30,
      question: "EN UN PROCESO DE NEGOCIACIÓN SE DAN LAS SIGUIENTES ETAPAS",
      options: [
        "DEFINICIÓN DE OBJETIVOS, RECOPILACIÓN DE INFORMACIÓN DE LAS OTRAS PARTES, ESTABLECIMIENTO DE UNA ESTRATEGIA, EJECUCIÓN",
        "PLANIFICAR LA COMUNICACIÓN, ESTABLECER EL BATNA, EJECUTAR LA NEGOCIACIÓN, FIRMAR ACUERDOS.",
        "PREPARACIÓN, EJECUCIÓN, CIERRE Y SEGUIMIENTO DE LOS ACUERDOS ALCANZADOS.",
        "PREPARACIÓN, EJECUCIÓN, REVISIÓN LEGAL, FIRMA DEL ACUERDO, EVALUACIÓN Y RETROALIMENTACIÓN",
        "PREPARACIÓN, EJECUCIÓN, CIERRE Y MANTENIMIENTO DE LAS RELACIONES",
        "PREPARACIÓN, COMUNICACIÓN Y GESTIÓN DE CONFLICTOS DE INTERESES, CIERRE Y SEGUIMIENTO DE LOS ACUERDOS ALCANZADOS."
      ],
      correct: [2]
    },
    {
      id: 31,
      question: "LAS 4 P DE ELEVATOR PITCH (DISCURSO DE ASCENSOR) REFIEREN A:",
      options: [
        "PENSAR, PRODUCIR, PRACTICAR, PREGUNTAR",
        "PENSAR, PEDIR, PRODUCIR, PRACTICAR",
        "PRODUCIR, PREVENIR, PRACTICAR, PRESENTAR",
        "PENSAR, PLANEAR, PRACTICAR, PRESENTAR",
        "PENSAR, PRODUCIR, PRACTICAR, PRESENTAR",
        "PLANEAR, PRODUCIR, PRACTICAR, PRESENTAR"
      ],
      correct: [4]
    },
    {
      id: 32,
      question: "SON REGLAS DE ESCUCHA ACTIVA:",
      options: [
        "SIMPLICITUD, BREVEDAD, CREDIBILIDAD, SONORIDAD, CONSISTENCIA, NOVEDAD, AMBICIÓN.",
        "PARAFRASEO DE LO ESCUCHADO, PROYECCIÓN DE CONSECUENCIAS, REFLEJO DE SENTIMIENTOS SUBYACENTES, RESPUESTAS NO VERBALES.",
        "LA POSTURA, LA VOZ, LOS GESTOS, EL CONTACTO VISUAL, EL ESPACIO",
        "TODAS LAS ANTERIORES SON CORRECTAS",
        "NINGUNA DE LAS ANTERIORES ES CORRECTA"
      ],
      correct: [1]
    },
    {
      id: 33,
      question: "POR QUE ES NECESARIO PLANIFICAR LAS COMUNICACIONES DE UN PROYECTO:",
      options: [
        "1 Y 4 SON CORRECTAS",
        "1 Y 2 SON CORRECTAS",
        "NINGUNA DE LAS ANTERIORES ES CORRECTA"
      ],
      correct: [1]
    },
    {
      id: 34,
      question: "ELIJA CUAL DE LOS SIGUIENTES FACTORES PUEDEN INFLUIR EN LA SELECCION DE LA TECNOLOGIA PARA LA COMUNICACION",
      options: [
        "1, 2, 3 Y 4 SON CORRECTAS",
        "1, 3, 5, 6 Y 7 SON CORRECTAS",
        "TODAS CON CORRECTAS"
      ],
      correct: [1]
    },
    {
      id: 35,
      question: "LA INTELIGENCIA EMOCIONAL:",
      options: [
        "LAS TRES PRIMERAS SON CORRECTAS",
        "TODAS LAS ANTERIORES SON CORRECTAS"
      ],
      correct: [0]
    },
    {
      id: 36,
      question: "SE ENTIENDE POR AUTOCONCIENCIA EMOCIONAL EN EL CONTEXTO DE LA IE A:",
      options: [
        "1 Y 2 SON CORRECTAS",
        "1 Y 3 SON CORRECTAS",
        "3 Y 4 SON CORRECTAS",
        "NINGUNA DE LAS ANTERIORES ES CORRECTA"
      ],
      correct: [2]
    },
    {
      id: 37,
      question: "DURANTE LA FASE DE PREPARACIÓN DE UNA NEGOCIACION",
      options: [
        "SE ESTABLECERA UN AMBIENTE FABORABLE Y LAS REGLAS BASICAS",
        "SE MANTENDRA EL ENFOQUE EN LOS INTERESES Y NECESIDADES Y SE REALIZARA CONCESIONES ESTRATEGICAS",
        "SE ANALIZARAN LOS INTERESES Y NECESIDADES PROPIOS Y DE LA OTRA PARTE, SE PLANIFICARAN LAS COMUNICACIONES Y SE DE LA NEGOCIACION",
        "SE DEBERAN DEFINIR LOS OBJETIVOS, INVESTIGAR Y RECOPILAR INFORMACION SOBRE LA OTRA PARTE",
        "LAS DOS ANTERIORES SON CORRECTAS",
        "TODAS LAS ANTERIORES SON CORRECTAS",
        "NINGUNA DE LAS ANTERIORES ES CORRECTA"
      ],
      correct: [3]
    },
    {
      id: 38,
      question: "ACERCA DE LA NEGOCIACION ACOMODATIVA PODEMOS DECIR QUE:",
      options: [
        "ES AQUELLA NEGOCIACION DONDE LAS PARTES TRABAJAN PARA IDENTIFICAR INTERESES Y NECESIDADES",
        "PROPICIA LA EXPLORACIÓN DE OPCIONES CREATIVAS PARA LLEGAR A SOLUCIONES QUE LOGREN UN ACUERDO QUE BENEFICIE A AMBAS PARTES",
        "EMPLEA TACTICAS DE PERSUACION, PODER, PRESION E INFLUENCIA PARA EL LOGRO DE OBJETIVOS PROPIOS",
        "TODAS LAS ANTERIORES SON CORRECTAS",
        "LAS DOS PRIMERAS SON CORRECTAS",
        "NINGUNA DE LAS ANTERIORES ES CORRECTA"
      ],
      correct: [5]
    },
    {
      id: 39,
      question: "EL METODO DE NEGOCIACION HARVARD:",
      options: [
        "LAS DOS ANTERIORES SON CORRECTAS",
        "1, 2 Y 4 SON CORRECTAS",
        "1, 3 Y 4 SON CORRECTAS",
        "NINGUNA DE LAS ANTERIORES ES CORRECTA"
      ],
      correct: [2]
    },
    {
      id: 40,
      question: "ELEVATOR PITCH ES UNA TECNICA CREADA POR PHILLIP CROSBY QUE:",
      options: [
        "SE BASA EN LOS PILARES DE \"CLARIDAD, LENGUAJE DESEABLE, PRACTICADO Y CONFIABLE",
        "DEBE SER ESPONTANEO",
        "PERSIGUE CONSTITUIRSE EN UN ARGUMENTO DE VENTA",
        "TODAS LAS ANTERIORES SON CORRECTAS",
        "NINGUNA DE LAS ANTERIORES ES CORRECTA"
      ],
      correct: [4]
    },
    {
      id: 41,
      question: "CUAL DE LAS SIGUIENTES NO ES UNA ETAPA DEL ANALISIS DE DECISION MULTICRITERIO",
      options: [
        "DEFINICION DE LOS CRITERIOS A EVALUAR",
        "IDENTIFICAR LAS SOLUCIONES/CANDIDATOS POTENCIALES",
        "DEFINIR LA PONDERACION DE LOS DIFERENTES CRITERIOS",
        "EVALUAR EL COSTO Y EL IMPACTO DE LA TOMA DE DECESIONES",
        "EVALUAR LOS DIFERENTES CRITERIOS",
        "LAS DOS PRIMERAS SON CORRECTAS",
        "TODAS SON CORRECTAS"
      ],
      correct: [3]
    },
    {
      id: 42,
      question: "EL PLAN DE ADMINISTRACION DE PERSONAL ES:",
      options: [
        "2 Y 3 SON CORRECTAS",
        "3 Y 4 SON CORRECTAS",
        "2 Y 4 SON CORRECTAS",
        "NINGUNA DE LAS ANTERIORES ES CORRECTA"
      ],
      correct: [2]
    },
    {
      id: 43,
      question: "ALGUNO DE LOS PRINCIPIOS DE LA NEGOCIACION COLABORATIVA SON:",
      options: [
        "SEPARAR LAS PERSONAS DEL PROBLEMA, BUSCAR INTERESES MÁS QUE POSICIONES, GENERAR OPCIONES BENEFICIOSAS PARA TODAS LAS PARTES, UTILIZAR A CRITERIOS OBJETIVOS Y COMPROMISO DE LAS PARTES",
        "SEPARAR LAS PERSONAS DEL PROBLEMA, GENERAR INCERTIDUMBRE, UTILIZAR LA FALTA DE INFORMACIÓN",
        "BUSCAR INTERESES MÁS QUE POSICIONES, GENERAR OPCIONES BENEFICIOSAS PARA TODAS LAS PARTES, UTILIZAR LA TÉCNICA DE ANCLAJE",
        "SEPARAR LAS PERSONAS DEL PROBLEMA, BUSCAR INTERESES MÁS QUE POSICIONES, GENERAR OPCIONES BENEFICIOSAS PARA TODAS LAS PARTES, UTILIZAR EL DENGAÑO PARA LOGRAR LOS OBJETIVOS",
        "SEPARAR LAS PERSONAS DEL PROBLEMA, BUSCAR INTERESES MÁS QUE POSICIONES, GENERAR OPCIONES BENEFICIOSAS PARA TODAS LAS PARTES",
        "SEPARAR LAS PERSONAS DEL PROBLEMA, GENERAR INCERTIDUMBRE, UTILIZAR LA FALTA DE INFORMACIÓN Y UTILIZAR ARGUMENTOS PARA CONVECER A LAS PARTES FA ACEPTAR CIERTAS IDEAS"
      ],
      correct: [0]
    },
    {
      id: 44,
      question: "SEGÚN EL MODELO DE LIDERAZGO SITUACIONAL DE PAUL HERSEY Y KEN BLANCHARD UN LIDER PUEDE SER:",
      options: [
        "DELEGADOR",
        "LAISSEZ FAIRE",
        "DIRECTIVO",
        "PERSUASIVO",
        "CARISMÁTICO",
        "ANALITICO",
        "PARTICIPATIVO",
        "CONSULTIVO"
      ],
      correct: [0, 2, 3, 6],
      multiple: true
    },
    {
      id: 45,
      question: "LAS TÉCNICAS DE GESTIÓN DE CONFLICTOS QUE FACILITAN LA RESOLUCIÓN DE LOS MISMOS INCLUYEN LAS COMBINACIONES DE ACCIONES:",
      options: [
        "DIRIGIR Y SUAVIZAR",
        "RETIRARSE Y ELUDIR",
        "FORZAR Y ADAPTARSE",
        "COLABORAR Y RESOLVER",
        "FORZAR Y DIRIGIR",
        "ELUDIR Y COLABORAR",
        "SUAVIZAR Y ADAPTARSE",
        "CONSENSUAR Y CONCILIAR"
      ],
      correct: [1, 3, 4, 6, 7],
      multiple: true
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackCorrect, setFeedbackCorrect] = useState(false);

  const handleAnswerSelect = (optionIndex) => {
    if (showFeedback) return; // No permitir cambios mientras se muestra el feedback
    
    const question = questions[currentQuestion];
    
    if (question.multiple) {
      const newAnswers = selectedAnswers.includes(optionIndex)
        ? selectedAnswers.filter(i => i !== optionIndex)
        : [...selectedAnswers, optionIndex];
      setSelectedAnswers(newAnswers);
    } else {
      setSelectedAnswers([optionIndex]);
    }
  };

  const handleSubmitAnswer = () => {
    const question = questions[currentQuestion];
    const correctAnswers = [...question.correct].sort();
    const userAnswersSorted = [...selectedAnswers].sort();
    
    const isCorrect = JSON.stringify(correctAnswers) === JSON.stringify(userAnswersSorted);
    
    setUserAnswers({
      ...userAnswers,
      [currentQuestion]: {
        selected: selectedAnswers,
        correct: isCorrect
      }
    });

    // Mostrar feedback visual
    setFeedbackCorrect(isCorrect);
    setShowFeedback(true);

    // Avanzar después de mostrar el feedback
    setTimeout(() => {
      setShowFeedback(false);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswers([]);
      } else {
        calculateScore();
        setShowResults(true);
      }
    }, 1500); // Mostrar feedback por 1.5 segundos
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index]?.correct) {
        correct++;
      }
    });
    if (userAnswers[currentQuestion]) {
      const question = questions[currentQuestion];
      const correctAnswers = [...question.correct].sort();
      const userAnswersSorted = [...selectedAnswers].sort();
      if (JSON.stringify(correctAnswers) === JSON.stringify(userAnswersSorted)) {
        correct++;
      }
    }
    setScore({ correct, total: questions.length });
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setUserAnswers({});
    setShowResults(false);
    setScore({ correct: 0, total: 0 });
    setShowFeedback(false);
    setFeedbackCorrect(false);
  };

  const percentage = showResults ? Math.round((score.correct / score.total) * 100) : 0;

  if (showResults) {
    return (
      <div className="app-shell">
        <div className="results-card">
          <div className="results-header">
            <BarChart3 className="results-icon" />
            <h2 className="results-title">¡Quiz Completado!</h2>
            <p className="results-subtitle">Aquí están tus resultados</p>
          </div>

          <div className="results-summary">
            <p className="results-percentage">{percentage}%</p>
            <p className="results-detail">
                {score.correct} de {score.total} respuestas correctas
            </p>
            <div className="results-badge">
                {percentage >= 80 ? '¡Excelente!' : percentage >= 60 ? '¡Bien hecho!' : 'Sigue practicando'}
            </div>
          </div>

          <div className="results-list">
            {questions.map((question, index) => {
              const userAnswer = userAnswers[index];
              const isCorrect = userAnswer?.correct;
              const selectedLetters = userAnswer?.selected?.length
                ? userAnswer.selected.map(i => String.fromCharCode(65 + i)).join(', ')
                : '—';
              const correctLetters = question.correct.map(i => String.fromCharCode(65 + i)).join(', ');
              
              return (
                <div
                  key={question.id}
                  className={`result-item ${isCorrect ? 'result-item--correct' : 'result-item--incorrect'}`}
                >
                    {isCorrect ? (
                    <CheckCircle className="result-icon result-icon--correct" />
                  ) : (
                    <XCircle className="result-icon result-icon--incorrect" />
                  )}
                  <div className="result-body">
                    <p className="result-question">Pregunta {index + 1}</p>
                    <p className="result-text">{question.question}</p>
                      {!isCorrect && (
                      <>
                        <p className="result-answer result-answer--user">
                          <strong>Tu respuesta:</strong> {selectedLetters}
                        </p>
                        <p className="result-answer result-answer--correct">
                          <strong>Respuesta correcta:</strong> {correctLetters}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="results-actions">
          <button
            onClick={resetQuiz}
              className="primary-button primary-button--solid"
          >
              <RotateCcw size={20} />
            Reiniciar Quiz
          </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const submitButtonClass =
    selectedAnswers.length === 0
      ? 'primary-button primary-button--disabled'
      : 'primary-button primary-button--solid';

  return (
    <div className="app-shell">
      <div className="quiz-layout">
        <div className={`quiz-card ${showFeedback ? (feedbackCorrect ? 'quiz-card--correct' : 'quiz-card--incorrect') : ''}`}>
          <div className="quiz-header">
            <h1 className="quiz-title">Quiz Segundo Parcial</h1>
            <p className="quiz-subtitle">Pregunta {currentQuestion + 1} de {questions.length}</p>
            <div className="progress-track">
              <div
                className="progress-indicator"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="quiz-body">
            <div className="question-block">
              <h2 className="question-title">
                {question.question}
              </h2>
              {question.multiple && (
                <p className="question-hint">
                  ⚠️ Esta pregunta tiene múltiples respuestas correctas
                </p>
              )}
            </div>

            <div className="options-list">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswers.includes(index);
                return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showFeedback}
                  className={`option-button ${isSelected ? 'option-button--selected' : ''} ${showFeedback ? 'option-button--disabled' : ''}`}
                  >
                    <div className="option-button__inner">
                      <div className={`option-radio ${isSelected ? 'option-radio--selected' : ''}`}>
                        {isSelected && <span className="option-radio__bullet" />}
                    </div>
                    <div>
                        <span className="option-letter">
                        {String.fromCharCode(65 + index)}.
                      </span>
                        <span className="option-text">{option}</span>
                      </div>
                  </div>
                </button>
                );
              })}
            </div>

            <button
              onClick={handleSubmitAnswer}
              disabled={selectedAnswers.length === 0 || showFeedback}
              className={submitButtonClass}
            >
              {showFeedback 
                ? (feedbackCorrect ? '✓ Correcto' : '✗ Incorrecto')
                : (currentQuestion < questions.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados')
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;