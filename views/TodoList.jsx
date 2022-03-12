import tw, { styled } from 'twin.macro'
import { filteredTodoListState, todosState } from "atoms"
import { useRecoilValue } from "recoil"
import TodoItem from "./TodoItem"

const TodoContainer = styled.ul(_ => [
    tw`flex flex-col gap-2`
])

export default () => {

    // const todos = useRecoilValue(todosState)
    const todos = useRecoilValue(filteredTodoListState);

    const renderTodos = () => todos.map(todo => <TodoItem key={todo.id} data={todo} />)

    if (!todos.length) return <h2 tw='text-2xl text-gray-600 font-medium'>List is Empty</h2>

    return (
        <TodoContainer>
            {renderTodos()}
        </TodoContainer>
    )
}