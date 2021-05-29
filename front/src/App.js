import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Airline from './components/Airline/Airline'
import Airlines from './components/Home/Airlines'


const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Airlines} />
      <Route exact path="/airlines/:slug" component={Airline} />
    </Switch>
  )
}

export default App
