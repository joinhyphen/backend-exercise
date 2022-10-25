import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { Box, Stack } from '@chakra-ui/react'
import { useActiveQuiz } from '../../hooks/useActiveQuiz'
import { useActiveQuizStore } from '../../stores/activeQuiz'

const QuizProgress = () => {
  const { questions } = useActiveQuizStore()
  const { selectedQuestion } = useActiveQuiz()

  return (
    <Stack direction='row'>
      {questions.map((question) => (
        <Box
          key={question.id}
          width='26px'
          height='26px'
          borderRadius='50%'
          display='flex'
          alignItems='center'
          justifyContent='center'
          border={
            question.id === selectedQuestion?.id
              ? '2px solid #222222'
              : question.response_correctness
              ? 'none'
              : '1px solid #aaaaaa'
          }
          background={
            !question.response_correctness
              ? 'none'
              : question.response_correctness === 'CORRECT'
              ? '#579F6E'
              : '#D34C46'
          }
        >
          {question.response_correctness === 'CORRECT' ? (
            <CheckIcon color='white' w='2' h='2' />
          ) : (
            <CloseIcon color='white' w='2' h='2' />
          )}
        </Box>
      ))}
    </Stack>
  )
}

export default QuizProgress
