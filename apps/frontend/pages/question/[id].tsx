import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, Input, Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ChangeEvent, useCallback, useState } from 'react'
import QuizProgress from '../../components/QuizProgress'
import { useActiveQuiz } from '../../hooks/useActiveQuiz'
import { useActiveQuizStore } from '../../stores/activeQuiz'

const QuestionPage = () => {
  const router = useRouter()
  const { questions } = useActiveQuizStore()
  const { submitQuestionResponse, submitQuizCompletion, selectedQuestion } =
    useActiveQuiz()
  const [inputValue, setInputValue] = useState('')

  const submitResponse = useCallback(
    async (value: string) => {
      submitQuestionResponse(value)
      setInputValue('')

      const finalQuestion = questions[questions.length - 1]

      if (selectedQuestion?.id === finalQuestion.id) {
        await submitQuizCompletion()
        router.push('/result')
      } else {
        const nextIndex =
          questions.findIndex((item) => item.id === selectedQuestion?.id) + 1
        selectedQuestion && router.push(`/question/${questions[nextIndex].id}`)
      }
    },
    [
      selectedQuestion,
      router,
      questions,
      submitQuizCompletion,
      submitQuestionResponse
    ]
  )

  const submitInputValue = useCallback(() => {
    submitResponse(inputValue)
  }, [submitResponse, inputValue])

  const submitInputOption = useCallback(
    (e: React.MouseEvent) => {
      submitResponse((e.target as HTMLButtonElement)?.value)
    },
    [submitResponse]
  )

  const inputChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }, [])

  const navigateToPrevious = useCallback(() => {
    const previousQuestion =
      selectedQuestion &&
      questions.find((item) => item.order === selectedQuestion.order - 1)
    router.push(`/question/${previousQuestion?.id}`)
  }, [questions, selectedQuestion, router])

  const navigateToNext = useCallback(() => {
    const nextQuestion =
      selectedQuestion &&
      questions.find((item) => item.order === selectedQuestion.order + 1)
    router.push(`/question/${nextQuestion?.id}`)
  }, [questions, selectedQuestion, router])

  if (!selectedQuestion) {
    return null // TODO: optimistic UI
  }

  const isAnswered = selectedQuestion.response !== null

  return (
    <Box
      display='flex'
      justifyContent='space-between'
      flexDirection='column'
      alignItems='center'
      w='100%'
    >
      <Box
        position='relative'
        marginTop='16'
        display='flex'
        alignItems='center'
        justifyContent='center'
        width='100%'
      >
        {selectedQuestion.order > 1 && (
          <Button
            leftIcon={<ChevronLeftIcon />}
            variant='outline'
            position='absolute'
            left='0px'
            onClick={navigateToPrevious}
          >
            Back
          </Button>
        )}
        {isAnswered && (
          <Button
            rightIcon={<ChevronRightIcon />}
            variant='outline'
            position='absolute'
            right='0px'
            onClick={navigateToNext}
          >
            Next
          </Button>
        )}
        <QuizProgress />
      </Box>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Heading marginBottom='8' textAlign='center'>
          {selectedQuestion.question.input_label}
        </Heading>
        {selectedQuestion.question.input_options ? (
          <Stack width='300px' spacing='4'>
            {selectedQuestion.question.input_options.map((item) => (
              <Button
                key={item}
                size='lg'
                onClick={submitInputOption}
                disabled={isAnswered}
                value={item}
                colorScheme={
                  item === selectedQuestion.response ? 'teal' : 'gray'
                }
              >
                {item}
              </Button>
            ))}
          </Stack>
        ) : (
          <Input
            type={selectedQuestion.question.answer_type}
            width='300px'
            name='response'
            onChange={inputChangeHandler}
            value={selectedQuestion.response ?? inputValue}
            disabled={isAnswered}
          />
        )}
      </Box>
      <Box marginBottom='16'>
        {!selectedQuestion.question.input_options && (
          <Button
            size='lg'
            width='300px'
            onClick={submitInputValue}
            colorScheme='teal'
            disabled={isAnswered}
          >
            Submit
          </Button>
        )}
      </Box>
    </Box>
  )
}

export default QuestionPage
