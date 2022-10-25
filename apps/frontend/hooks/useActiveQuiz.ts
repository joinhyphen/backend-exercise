import { gql } from 'graphql-request'
import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'
import { client } from '../server'
import { useActiveQuizStore } from '../stores/activeQuiz'

const getActiveQuizQuery = gql`
  query GetActiveQuiz {
    quizzes(
      limit: 1
      order_by: { started_at: desc }
      where: { completed_at: { _is_null: true } }
    ) {
      id
      questions(order_by: { order: asc }) {
        id
        order
        response
        response_correctness
        question {
          answer_type
          id
          input_label
          input_options
        }
      }
    }
  }
`

const submitResponseMutation = gql`
  mutation SubmitResponse($questionId: String!, $response: String!) {
    submit_question_response(
      question_response: { quiz_question_id: $questionId, response: $response }
    ) {
      quiz_question {
        id
        response
        response_correctness
      }
    }
  }
`

const completeQuizMutation = gql`
  mutation CompleteQuizMutation($quizId: String!) {
    complete_quiz(quiz_id: $quizId) {
      quiz_id
    }
  }
`

const createQuizMutation = gql`
  mutation CreateQuiz($difficulty: Create_Quiz_Difficulty!) {
    create_quiz(difficulty: $difficulty) {
      quiz {
        id
        questions(order_by: { order: asc }) {
          id
          order
          response
          response_correctness
          question {
            answer_type
            id
            input_label
            input_options
          }
        }
      }
    }
  }
`

export const useActiveQuiz = () => {
  const router = useRouter()
  const {
    questions,
    setActiveQuiz,
    updateActiveQuizQuestions,
    quizId,
    setCompleted
  } = useActiveQuizStore()

  const selectedQuestion = useMemo(
    () => questions.find((item) => item.id === router.query.id),
    [router.query.id, questions]
  )

  const createActiveQuiz = useCallback(
    async (difficulty: string) => {
      try {
        const response = await client.request(createQuizMutation, {
          difficulty
        })
        setActiveQuiz(
          response.create_quiz.quiz.questions || [],
          response.create_quiz.quiz.id
        )
      } catch (e) {
        // TODO: sad path
      }
    },
    [setActiveQuiz]
  )

  const loadActiveQuiz = useCallback(async () => {
    try {
      if (!router.isReady) return

      const response = await client.request(getActiveQuizQuery)
      setActiveQuiz(
        response.quizzes[0]?.questions || [],
        response.quizzes[0]?.id
      )
    } catch (e) {
      // TODO: sad path
    }
  }, [router, setActiveQuiz])

  const submitQuestionResponse = useCallback(
    async (value: string) => {
      try {
        const submitResponse = await client.request(submitResponseMutation, {
          questionId: selectedQuestion?.id,
          response: value
        })
        const updatedQuestion =
          submitResponse.submit_question_response.quiz_question
        const updatedQuestions = questions.map((item) =>
          item.id === updatedQuestion?.id
            ? {
                ...item,
                ...updatedQuestion
              }
            : item
        )
        updateActiveQuizQuestions(updatedQuestions)
      } catch (e) {
        // TODO: sad path
      }
    },
    [updateActiveQuizQuestions, questions, selectedQuestion]
  )

  const submitQuizCompletion = useCallback(async () => {
    try {
      await client.request(completeQuizMutation, {
        quizId
      })
      setCompleted()
    } catch (e) {
      // TODO: sad path
    }
  }, [quizId, setCompleted])

  return {
    selectedQuestion,
    createActiveQuiz,
    loadActiveQuiz,
    submitQuestionResponse,
    submitQuizCompletion
  }
}
