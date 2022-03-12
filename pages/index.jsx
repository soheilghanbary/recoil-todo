import Container from "components/Container"
import AddTodo from "views/AddTodo"
import TodoList from "views/TodoList"

export default () => {
  return (
   <Container>
     <AddTodo />
     <TodoList />
   </Container> 
  )
}