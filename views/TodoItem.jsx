import styled from '@emotion/styled'
import { todosState } from 'atoms'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import tw from 'twin.macro'

const Todo = styled.li(_ => [
  tw`border border-gray-200 p-3 font-medium rounded-md text-lg`,
  tw`hover:shadow duration-200`,
  tw`flex justify-between items-center`,
])

const TodoText = styled.h2(({ isComplete }) => [
    tw`text-gray-500 font-medium`,
    isComplete && tw`line-through font-bold`
])

const Button = styled.button(({ color , isComplete }) => [
  tw`py-2 font-medium text-white text-center text-sm px-3 rounded-md shadow bg-gray-300`,
  color === 'danger' && tw`bg-red-500`,
  isComplete && tw`bg-green-400`
])

const TodoAction = styled.div(_ => tw`flex gap-3`)

export default ({ data }) => {

    const todos = useRecoilValue(todosState)

    const setTodos = useSetRecoilState(todosState)

    const isCompleteSubmit = (todoId) => {
        const newList = [...todos]
        newList.map(item => {
          if (item.id === todoId) {
            item.isComplete = !item.isComplete
          }
          return item
        })

        setTodos(newList)
    }

    const removeTodo = (todoId) => setTodos(todos.filter(item => item.id !== todoId))

  return (
    <Todo>
      <TodoText isComplete={data.isComplete}>{data.text}</TodoText>
      <TodoAction>
        <Button onClick={() => isCompleteSubmit(data.id)} isComplete={data.isComplete} color="default">Complete</Button>
        <Button onClick={() => removeTodo(data.id)} color="danger">Delete</Button>
      </TodoAction>
    </Todo>
  )
}
