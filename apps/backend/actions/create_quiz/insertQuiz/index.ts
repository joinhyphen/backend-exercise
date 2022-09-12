import { randomUUID } from 'crypto'
import { CreateQuizOutput } from '..'
import { server } from '../../../sdk'
import { InsertQuizMutationVariables } from '../../../sdk/generated'
import { CreateQuizQuestionsOutput } from '../createQuizQuestions'

export const insertQuiz = async (
  userId: InsertQuizMutationVariables['userId'],
  questionIds: CreateQuizQuestionsOutput
): Promise<CreateQuizOutput['quizId']> => {
  const questions: InsertQuizMutationVariables['questions'] = questionIds.map(
    (item, index) => ({
      id: randomUUID(),
      question_id: item,
      order: index + 1
    })
  )

  const data = await server.InsertQuiz({
    quizId: randomUUID(),
    userId,
    questions
  })

  if (!data.insert_quizzes_one) {
    throw new Error('Failed to insert quiz')
  }

  const quizId = data.insert_quizzes_one.id
  return quizId
}
