import { NextApiRequest, NextApiResponse } from 'next'
import { Quizzes } from '../../sdk/generated'
import { HasuraEventPayload } from '../../sdk/helpers'

export type QuizzesUpdateCompletedAtEvent = Omit<NextApiRequest, 'body'> & {
  body: HasuraEventPayload<
    Pick<Quizzes, 'id' | 'user_id' | 'started_at' | 'completed_at'>
  >
}

export const quizzes_update_completed_at = async (
  req: QuizzesUpdateCompletedAtEvent,
  res: NextApiResponse
) => {
  try {
    const updatedQuizzesRecord = req.body.event.data.new

    // Task 2
    // ...

    return res.status(200).end()
  } catch (error) {
    console.error(error)
    return res.status(400).end()
  }
}
