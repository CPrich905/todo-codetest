import React, { Component } from 'react'
import axios from 'axios'

class ToDos extends Component {
  constructor(props) {
    super(props)

    this.state = { data: null, completed: null, incomplete: null, nextTask: null }
  }

  getData() {
    axios.get('../data.json')
      .then((res) => {
        const completed = res.data.filter(data => data.completed)
        this.setState({ completed: completed })
        const incomplete = res.data.filter(data => !data.completed)
        this.setState({ incomplete: incomplete })
        const nextTask = this.state.incomplete[this.state.incomplete.length -1]
        this.setState({ nextTask: nextTask})
        res.data.sort((a, b) => b.id - a.id)
        this.setState( { data: res.data })
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    if(!this.state.data || !this.state.completed || !this.state.incomplete || !this.state.nextTask) return null
    console.log(this.state.nextTask)
    return (
      <main>
        <div className="todo-counter">
          <h2>You have completed {this.state.completed.length} of {this.state.data.length} tasks</h2>
          <span>Your next task is: {this.state.nextTask.title}</span>
        </div>
        <div className="col-50 remaining">
          <div className="taskbox-header">
            <h3>Remaining Tasks</h3>
            <p>The following tasks remain on your todo list:</p>
          </div>
          <div className="scrolls">
            {this.state.data.filter(data => !data.completed).map((todo) => (
              <span
                key={todo.id}
                className="todo-item"><p>{todo.title}</p></span>
            ))}
          </div>
        </div>
        <div className="col-50 completed">
          <div className="taskbox-header">
            <h3>Completed tasks</h3>
            <p>Strong work! So far you have completed the following:</p>
          </div>
          <div className="completed-items scrolls">
            {this.state.data.filter(data => data.completed).map((todo) => (
              <span key={todo.id}
                className="todo-item completed-item"><p>{todo.title}</p></span>
            ))}
          </div>
        </div>

      </main>
    )
  }

}

export default ToDos
