import {useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {useGoBackHook} from '../../common/hooks';

export interface IQuestion {
  question: string;
  correctAnswer: string;
  answers: string[];
}

export type ICurrentQuestion = IQuestion & {index: number; userChoice: number};

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const useQuizHook = () => {
  const goBack = useGoBackHook();

  const {params} = useRoute();
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [score, setScore] = useState(-1);
  const [currentQuestion, setCurrentQuestion] = useState<ICurrentQuestion>({
    answers: [],
    question: '',
    correctAnswer: '',
    index: 0,
    userChoice: -1,
  });
  const [answers, setAnswers] = useState<ICurrentQuestion[]>([]);
  const effect = async () => {
    try {
      //@ts-ignore
      let res = await axios.get(params?.test);
      //@ts-ignore
      let q = res.data.values.reduce((p, c, i) => {
        if (i == 0) {
          return p;
        }
        let [question, correctAnswer, ...answers] = c;
        return [
          ...p,
          {
            question,
            correctAnswer,
            answers: shuffleArray([correctAnswer, ...answers]),
          },
        ];
      }, []);
      setQuestions(shuffleArray(q));
      setCurrentQuestion({...currentQuestion, ...q[0]});
    } catch (error) {
      console.error(error);
    }
  };

  const onAnswerPress = (userChoice: number) => {
    setCurrentQuestion({...currentQuestion, userChoice});
  };

  const onNextPress = () => {
    if (score !== -1) {
      goBack();
    }
    if (currentQuestion.index >= questions.length - 1) {
      let s = [...answers, currentQuestion].reduce((p, c) => {
        if (c.correctAnswer === c.answers[c.userChoice]) {
          return p + 1;
        }
        return p;
      }, 0);
      console.log(s, questions.length);

      setScore((s * 100) / questions.length);
    } else {
      setAnswers([...answers, currentQuestion]);
      setCurrentQuestion({
        ...questions[currentQuestion.index + 1],
        index: currentQuestion.index + 1,
        userChoice: -1,
      });
    }
  };

  useEffect(() => {
    effect();
  }, []);
  return {
    questions,
    //@ts-ignore
    title: params.title,
    currentQuestion,
    nextAllowed: currentQuestion.userChoice !== -1,
    score,
    onNextPress,
    onAnswerPress,
  };
};
