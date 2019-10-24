import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import ToDos from './components/todos'
import Banner from './components/banner'


class App extends React.Component {
  render() {
    console.log('App.js renders')
    return(
      <div>
        <Banner />
        <BrowserRouter>
          <main>
            <Route exact path="/" component={ ToDos }/>
          </main>
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
