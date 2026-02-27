import { useState } from 'react';
import QuizAnswer from '../components/QuizAnswer';
import {
  ArrowRightIcon,
  GiftIcon,
  LightbulbIcon,
  QuestionMarkIcon,
  RefreshCwIcon,
} from '../components/icons';
import { questions } from '../data/faqQuiz';

// Fisher-Yates shuffle
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const FAQQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState(questions);

  const startQuiz = () => {
    const shuffled = questions.map((q) => ({
      ...q,
      answers: shuffleArray(q.answers),
    }));
    setQuizQuestions(shuffled);
    setQuizStarted(true);
  };

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    if (quizQuestions[currentQuestion].answers[index].correct) {
      setCorrectAnswers((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
    setSelectedAnswer(null);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setCorrectAnswers(0);
    setQuizStarted(false);
  };

  const getResult = () => {
    const percentage = correctAnswers / quizQuestions.length;
    if (percentage === 1) {
      return {
        title: 'Отлично!',
        message: 'Вы настоящий эксперт! Получите скидку 10%!',
        emoji: '🏆',
      };
    }
    if (percentage >= 0.7) {
      return {
        title: 'Хороший результат!',
        message: 'Вы хорошо разбираетесь в теме! Получите скидку 10%!',
        emoji: '👍',
      };
    }
    return {
      title: 'Неплохо!',
      message: 'Теперь вы знаете больше о лечении под наркозом! Получите скидку 10%!',
      emoji: '📚',
    };
  };

  const result = getResult();

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
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center animate-bounce-soft">
                <LightbulbIcon className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                «ЗНАТОКИ ЗДОРОВЬЯ: проверьте, всё ли вы знаете о детском сне и зубах, и получите
                скидку до 10%»
              </h3>
              <div className="text-slate-600 mb-8 space-y-4 text-left">
                <p>
                  Родители, решение лечить зубы во сне — это ответственный шаг. И мы в «Стоматологии
                  для детей в Африке» уверены: осознанные родители — залог спокойного лечения и
                  здоровой улыбки малыша.
                </p>
                <p>
                  Мы подготовили расширенную викторину. 15 вопросов о безопасности, качестве и
                  важных нюансах лечения во сне. Проверьте свою интуицию и знания! Каждый ваш
                  правильный ответ прибавляет баллы для получения скидки на лечение под общей
                  анестезией. Максимальная скидка, которую вы можете получить — 10%.
                </p>
                <p className="font-semibold text-sky-700">
                  Это не экзамен, а ваш бонус за внимательность к деталям. Ответили? Суммируйте
                  баллы и фиксируйте скидку!
                </p>
              </div>
              <button
                onClick={startQuiz}
                className="inline-flex items-center justify-center gap-2 gradient-primary text-white font-bold py-4 px-8 rounded-2xl shadow-glow hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Начать викторину
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        ) : currentQuestion < quizQuestions.length ? (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex justify-between items-center mb-6">
                <div className="text-sm text-slate-500">
                  Вопрос {currentQuestion + 1} из {quizQuestions.length}
                </div>
                <div className="text-sm font-semibold text-sky-600">
                  Правильно: {correctAnswers}
                </div>
              </div>

              <div className="h-2 bg-slate-100 rounded-full mb-8">
                <div
                  className="h-full bg-gradient-to-r from-sky-400 to-sky-500 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-6">
                {quizQuestions[currentQuestion].question}
              </h3>

              <div className="mb-6 p-4 bg-sky-50 rounded-xl border border-sky-200">
                <div className="font-semibold text-sky-800 mb-2">Пояснение:</div>
                <p className="text-sky-700">{quizQuestions[currentQuestion].explanation}</p>
              </div>

              <div className="space-y-3 mb-8">
                {quizQuestions[currentQuestion].answers.map((answer, index) => (
                  <QuizAnswer
                    key={index}
                    text={answer.text}
                    index={index}
                    isCorrect={answer.correct}
                    isSelected={selectedAnswer === index}
                    isDisabled={selectedAnswer !== null}
                    onSelect={handleAnswer}
                    showResult={selectedAnswer !== null}
                  />
                ))}
              </div>

              <div className="flex justify-end">
                {selectedAnswer !== null && (
                  <button
                    onClick={nextQuestion}
                    className="inline-flex items-center justify-center gap-2 gradient-primary text-white font-bold py-3 px-6 rounded-xl shadow-glow hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    {currentQuestion < quizQuestions.length - 1
                      ? 'Следующий вопрос'
                      : 'Увидеть результаты'}
                    <ArrowRightIcon className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
              <div className="p-8 sm:p-12 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center animate-bounce-soft">
                  <span className="text-6xl">{result.emoji}</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-2">{result.title}</h3>
                <p className="text-slate-600 mb-4">{result.message}</p>

                <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-200 mb-8">
                  <GiftIcon className="w-8 h-8 text-amber-600" />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-amber-700">Скидка 10%</div>
                    <div className="text-sm text-amber-600">на первое посещение</div>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 mb-8">
                  <div className="text-5xl font-bold text-sky-600 mb-2">
                    {correctAnswers}/{quizQuestions.length}
                  </div>
                  <div className="text-slate-500">правильных ответов</div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={resetQuiz}
                    className="inline-flex items-center justify-center gap-2 border-2 border-sky-400 text-sky-700 font-bold py-3 px-6 rounded-xl hover:bg-sky-50 transition-colors"
                  >
                    <RefreshCwIcon className="w-4 h-4 mr-2" />
                    Пройти ещё раз
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
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQQuiz;
