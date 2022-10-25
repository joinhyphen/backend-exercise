import { ChakraProvider, Container } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useActiveQuiz } from '../hooks/useActiveQuiz'
import { useActiveQuizStore } from '../stores/activeQuiz'

const App = ({ Component, pageProps }: AppProps) => {
  const { quizId } = useActiveQuizStore()
  const { loadActiveQuiz } = useActiveQuiz()

  useEffect(() => {
    !quizId && loadActiveQuiz()
  }, [quizId, loadActiveQuiz])

  return (
    <ChakraProvider>
      <Container
        display='flex'
        height='100vh'
        maxW='1600px'
        justifyContent='center'
      >
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}

export default App
