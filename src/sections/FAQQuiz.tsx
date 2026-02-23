import { useState } from 'react';
import { questions, moreQuestions } from '../data/faqQuiz';
import { XIcon, ArrowRightIcon, LightbulbIcon, CheckCircleIcon, QuestionMarkIcon } from '../components/icons';

const FAQQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (questions[currentQuestion].answers[index].correct) {
      setCorrectAnswers((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setCorrectAnswers(0);
    setQuizStarted(false);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold text-sm mb-6">
            <QuestionMarkIcon className="w-4 h-4" />
            Интерактивная викторина
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Узнайте больше о <span className="text-sky-600">лечении под наркозом</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ответьте на вопросы и узнайте, подходит ли вашему ребёнку лечение зубов во сне
          </p>
        </div>

        {!quizStarted ? (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center animate-bounce-soft">
                <LightbulbIcon className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Готовы проверить свои знания?
              </h3>
              <p className="text-slate-600 mb-8">
                10 вопросов о лечении зубов под наркозом помогут вам лучше понять процедуру и
                подготовиться к визиту к стоматологу.
              </p>
              <button
                onClick={() => setQuizStarted(true)}
                className="inline-flex items-center justify-center gap-2 gradient-primary text-white font-bold py-4 px-8 rounded-2xl shadow-glow hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Начать викторину
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        ) : currentQuestion < questions.length ? (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex justify-between items-center mb-6">
                <div className="text-sm text-slate-500">
                  Вопрос {currentQuestion + 1} из {questions.length}
                </div>
                <div className="text-sm font-semibold text-sky-600">
                  Правильно: {correctAnswers}
                </div>
              </div>

              <div className="h-2 bg-slate-100 rounded-full mb-8">
                <div
                  className="h-full bg-gradient-to-r from-sky-400 to-sky-500 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-6">
                {questions[currentQuestion].question}
              </h3>

              <div className="space-y-3 mb-8">
                {questions[currentQuestion].answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                      selectedAnswer === null
                        ? 'hover:scale-[1.02] hover:shadow-md cursor-pointer'
                        : 'cursor-not-allowed'
                    } ${
                      selectedAnswer !== null
                        ? answer.correct
                          ? 'bg-green-100 border-2 border-green-500'
                          : selectedAnswer === index
                            ? 'bg-red-100 border-2 border-red-500'
                            : 'bg-slate-50'
                        : 'bg-slate-50 border-2 border-transparent hover:border-sky-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selectedAnswer !== null
                            ? answer.correct
                              ? 'border-green-500 bg-green-500'
                              : selectedAnswer === index
                                ? 'border-red-500 bg-red-500'
                                : 'border-slate-300'
                            : 'border-slate-300'
                        }`}
                      >
                        {selectedAnswer !== null && answer.correct && (
                          <CheckCircleIcon className="w-4 h-4 text-white" />
                        )}
                        {selectedAnswer !== null && selectedAnswer === index && !answer.correct && (
                          <XIcon className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <span className="text-slate-700">{answer.text}</span>
                    </div>
                  </button>
                ))}
              </div>

              {showExplanation && (
                <div className="mb-6 p-4 bg-sky-50 rounded-xl border border-sky-200">
                  <div className="font-semibold text-sky-800 mb-2">Пояснение:</div>
                  <p className="text-sky-700">{questions[currentQuestion].explanation}</p>
                </div>
              )}

              <div className="flex justify-end">
                {showExplanation ? (
                  <button
                    onClick={nextQuestion}
                    className="inline-flex items-center justify-center gap-2 gradient-primary text-white font-bold py-3 px-6 rounded-xl shadow-glow hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    {currentQuestion < questions.length - 1
                      ? 'Следующий вопрос'
                      : 'Увидеть результаты'}
                    <ArrowRightIcon className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    onClick={() => setShowExplanation(true)}
                    className="inline-flex items-center justify-center gap-2 bg-sky-100 text-sky-700 font-bold py-3 px-6 rounded-xl hover:bg-sky-200 transition-colors"
                  >
                    Показать пояснение
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${
                  correctAnswers >= 7 ? 'bg-green-100' : 'bg-yellow-100'
                }`}
              >
                <span className={`text-5xl ${correctAnswers >= 7 ? '' : '😊'}`}>
                  {correctAnswers >= 8 ? '' : correctAnswers >= 5 ? '' : ''}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Викторина завершена!</h3>
              <p className="text-lg text-slate-600 mb-2">
                Вы ответили правильно на{' '}
                <span className="font-bold text-sky-600">{correctAnswers}</span> из{' '}
                <span className="font-bold">{questions.length}</span> вопросов
              </p>
              <p className="text-slate-500 mb-8">
                {correctAnswers >= 8
                  ? 'Отлично! Вы хорошо знаете о лечении под наркозом.'
                  : correctAnswers >= 5
                    ? 'Хорошо! Но советуем узнать больше о процедуре.'
                    : 'Узнайте больше о лечении под наркозом на консультации!'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={resetQuiz}
                  className="inline-flex items-center justify-center gap-2 border-2 border-sky-400 text-sky-700 font-bold py-3 px-6 rounded-xl hover:bg-sky-50 transition-colors"
                >
                  Пройти снова
                </button>
                <button
                  onClick={() =>
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="inline-flex items-center justify-center gap-2 gradient-primary text-white font-bold py-3 px-6 rounded-xl shadow-glow hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Записаться на консультацию
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Частые вопросы</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {moreQuestions.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-soft">
                <h4 className="font-bold text-slate-800 mb-2">{item.question}</h4>
                <p className="text-slate-600 text-sm">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQQuiz;
