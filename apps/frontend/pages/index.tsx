import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect } from 'react'
import { useActiveQuiz } from '../hooks/useActiveQuiz'
import { useActiveQuizStore } from '../stores/activeQuiz'

const WelcomePage = () => {
  const router = useRouter()
  const { quizId, isLoading, isCompleted, questions } = useActiveQuizStore()
  const { createActiveQuiz } = useActiveQuiz()

  const redirectToActiveQuiz = useCallback(async () => {
    const activeQuestion = questions.find((item) => item.response === null)
    router.push(`/question/${activeQuestion?.id}`)
  }, [questions, router])

  useEffect(() => {
    if (isLoading) return // TODO: optimistic UI
    if (quizId && !isCompleted) redirectToActiveQuiz()
  }, [quizId, isLoading, isCompleted, redirectToActiveQuiz])

  const createQuizHandler = useCallback(
    async (e: React.MouseEvent) => {
      createActiveQuiz((e.target as HTMLButtonElement)?.value)
    },
    [createActiveQuiz]
  )

  return (
    <Box
      flexDirection='column'
      alignSelf='center'
      display='flex'
      alignItems='center'
    >
      <Heading as='h1' size='2xl'>
        Hey Jane, welcome to the quiz!
      </Heading>
      <Text m='7' fontSize='2xl'>
        Choose your difficulty:
      </Text>
      <Stack spacing='4' w='220px'>
        <Button
          name='difficulty'
          colorScheme={'teal'}
          size='lg'
          type='submit'
          value='EASY'
          onClick={createQuizHandler}
        >
          Easy
        </Button>
        <Button
          name='difficulty'
          colorScheme={'teal'}
          size='lg'
          type='submit'
          value='MODERATE'
          onClick={createQuizHandler}
        >
          Moderate
        </Button>
        <Button
          name='difficulty'
          colorScheme={'teal'}
          size='lg'
          type='submit'
          value='HARD'
          onClick={createQuizHandler}
        >
          Hard
        </Button>
      </Stack>
    </Box>
  )
}

export default WelcomePage
