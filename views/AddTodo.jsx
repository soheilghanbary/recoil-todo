import { filteredTodoListState, todosState , todoListFilterState } from 'atoms'
import { useRef } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import tw, { styled } from 'twin.macro'
const Card = styled.div(_ => [tw`flex justify-between gap-5 mb-5 items-center`])

const TextField = styled.input(_ => [
  tw`py-2 px-3 rounded-md border border-gray-200 w-3/5 text-gray-600`,
  tw`focus:ring-2 focus:ring-indigo-400 duration-300`,
])

const AddButton = styled.button(() => [
  tw`py-2 px-3 font-medium text-white w-1/5 text-center rounded-md shadow bg-blue-600`,
])

const Select = styled.select(() => [
  tw`py-2 px-3 rounded-md border border-gray-200 w-1/5 text-gray-600`,
])

export default () => {
  const ref = useRef()
  const setTodos = useSetRecoilState(todosState)
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const addTodo = e => {
    e.preventDefault()
    if (!ref.current.value) return
    const newTodo = {
      id: Date.now(),
      text: ref.current.value,
      isComplete: false,
    }
    setTodos(prevTodos => [...prevTodos, newTodo])
    ref.current.value = ''
  }

  const handleFilter = ({target: {value}}) => setFilter(value)

  return (
    <form onSubmit={addTodo}>
      <Card>
        <TextField ref={ref} />
        <Select onChange={handleFilter}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">UnCompleted</option>
        </Select>
        <AddButton type="submit">Add Todo</AddButton>
      </Card>
    </form>
  )
}
