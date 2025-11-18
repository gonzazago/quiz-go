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
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const handleAnswerSelect = (optionIndex) => {
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

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswers([]);
    } else {
      calculateScore();
      setShowResults(true);
    }
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
        <div className="quiz-card">
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
                    className={`option-button ${isSelected ? 'option-button--selected' : ''}`}
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
              disabled={selectedAnswers.length === 0}
              className={submitButtonClass}
            >
              {currentQuestion < questions.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;