import create from 'zustand'

export interface QuizQuestion {
  id: string
  order: number
  response: null | string
  response_correctness: null | 'CORRECT' | 'INCORRECT'
  question: {
    answer_type: string
    id: string
    input_label: string
    input_options: string[]
  }
}

interface ActiveQuizState {
  quizId: string | null
  questions: QuizQuestion[]
  isLoading: boolean
  isCompleted: boolean
  setActiveQuiz: (questions: QuizQuestion[], quizId: string) => void
  setCompleted: () => void
  updateActiveQuizQuestions: (questions: QuizQuestion[]) => void
}

export const useActiveQuizStore = create<ActiveQuizState>()((set) => ({
  quizId: null,
  questions: [],
  isLoading: true,
  isCompleted: false,
  setActiveQuiz: (questions, quizId) =>
    set(() => ({ questions, quizId, isLoading: false, isCompleted: false })),
  updateActiveQuizQuestions: (questions) => set(() => ({ questions })),
  setCompleted: () => set(() => ({ isCompleted: true }))
}))
