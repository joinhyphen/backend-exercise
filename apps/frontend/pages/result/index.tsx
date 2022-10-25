import { Box, Button, Heading } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import QuizProgress from '../../components/QuizProgress'
import { useActiveQuizStore } from '../../stores/activeQuiz'

const ResultPage = () => {
  const { isLoading, isCompleted } = useActiveQuizStore()
  const router = useRouter()

  useEffect(() => {
    if (isLoading) return
    if (!isCompleted) router.push('/')
  }, [isLoading, isCompleted, router])

  if (isLoading) {
    return null // TODO: optimistic UI
  }

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <QuizProgress />
      <Heading marginTop='8' marginBottom='7' textAlign='center'>
        Great job, you completed the quiz!
      </Heading>
      <NextLink href='/' passHref>
        <Button variant='outline'>Start a new quiz</Button>
      </NextLink>
    </Box>
  )
}

export default ResultPage
