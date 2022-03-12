import { atom, selector } from 'recoil'

export const todosState = atom({
  key: 'todos',
  dangerouslyAllowMutability: true,
  default: [
    { id: 1, text: 'this is a example task', isComplete: false },
    { id: 2, text: 'i have working react developer', isComplete: true },
    { id: 3, text: 'this is a basic todo app', isComplete: false },
  ],
})

const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'all',
})

const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  dangerouslyAllowMutability: true,
  get: ({ get }) => {
    const filter = get(todoListFilterState)
    const list = get(todosState)

    switch (filter) {
      case 'completed':
        return list.filter(item => item.isComplete)
      case 'uncompleted':
        return list.filter(item => !item.isComplete)
      default:
        return list
    }
  },
})

export {
    todoListFilterState , filteredTodoListState
}