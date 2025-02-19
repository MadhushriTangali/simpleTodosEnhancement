import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {todosList: initialTodosList, todo: ''}

  deleteTodo = id => {
    const {todosList} = this.state
    const filteredlist = todosList.filter(todo => todo.id !== id)

    this.setState({todosList: filteredlist})
  }

  onChangeTodo = event => {
    this.setState({todo: event.target.value})
  }

  addTodo = () => {
    const {todo, todosList} = this.state

    const newTodo = {
      id: todosList.length + 1,
      title: todo,
    }
    this.setState(prevState => ({
      todosList: [...prevState.todosList, newTodo],
      todo: '',
    }))
  }

  onEditTask = (id, taskTitle) => {
    const {todosList} = this.state
    const updatedList = todosList.map(each => {
      if (each.id === id) {
        return {...each, title: taskTitle}
      }
      return each
    })
    this.setState({todosList: updatedList})
  }

  render() {
    const {todosList, todo} = this.state
    return (
      <div className="outer-container">
        <div className="todo-container">
          <h1 className="heading">Add Todo</h1>
          <div>
            <input
              type="text"
              placeholder="Enter a todo"
              className="input-text"
              onChange={this.onChangeTodo}
              value={todo}
            />
            <button type="button" className="add-btn" onClick={this.addTodo}>
              Add Todo
            </button>
          </div>
        </div>
        <div className="inner-container">
          <h1 className="heading">Simple Todos</h1>
          <ul className="ul-container">
            {todosList.map(todos => (
              <TodoItem
                todos={todos}
                key={todos.id}
                onEditTask={this.onEditTask}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
