import React from 'react';
import { CheckCircleIcon, XIcon } from './icons';

interface QuizAnswerProps {
  text: string;
  index: number;
  isCorrect: boolean;
  isSelected: boolean;
  isDisabled: boolean;
  onSelect: (index: number) => void;
  showResult: boolean;
}

const QuizAnswer: React.FC<QuizAnswerProps> = ({
  text,
  index,
  isCorrect,
  isSelected,
  isDisabled,
  onSelect,
  showResult,
}) => {
  return (
    <button
      onClick={() => onSelect(index)}
      disabled={isDisabled}
      className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
        !showResult
          ? 'hover:scale-[1.02] hover:shadow-md cursor-pointer'
          : 'cursor-not-allowed'
      } ${
        showResult
          ? isCorrect
            ? 'bg-green-100 border-2 border-green-500'
            : isSelected
              ? 'bg-red-100 border-2 border-red-500'
              : 'bg-slate-50'
          : 'bg-slate-50 border-2 border-transparent hover:border-sky-200'
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
            showResult
              ? isCorrect
                ? 'border-green-500 bg-green-500'
                : isSelected
                  ? 'border-red-500 bg-red-500'
                  : 'border-slate-300'
              : 'border-slate-300'
          }`}
        >
          {showResult && isCorrect && <CheckCircleIcon className="w-4 h-4 text-white" />}
          {showResult && isSelected && !isCorrect && <XIcon className="w-4 h-4 text-white" />}
        </div>
        <span
          className={`text-slate-700 transition-all duration-300 ${
            showResult && isCorrect ? 'text-lg font-bold' : ''
          }`}
        >
          {text}
        </span>
      </div>
    </button>
  );
};

export default QuizAnswer;
