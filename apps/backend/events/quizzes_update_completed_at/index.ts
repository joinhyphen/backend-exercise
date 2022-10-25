import { NextApiRequest, NextApiResponse } from 'next'
import { Quizzes } from '../../sdk/generated'
import { HasuraEventPayload } from '../../sdk/helpers'

export type QuizzesUpdateCompletedAtEvent = Omit<NextApiRequest, 'body'> & {
  body: HasuraEventPayload<
    Omit<Quizzes, 'user' | 'questions' | 'questions_aggregate' | '__typename'>
  >
}

export const quizzes_update_completed_at = async (
  req: QuizzesUpdateCompletedAtEvent,
  res: NextApiResponse
) => {
  try {
    const updatedQuizzesRow = req.body.event.data.new

    // Task 2
    // ...

    return res.status(200).end()
  } catch (error) {
    console.error(error)
    return res.status(400).end()
  }
}
