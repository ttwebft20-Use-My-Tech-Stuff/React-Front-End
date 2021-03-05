import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from './utils/axiosWithAuth'
import './App.css'
import Landing from './components/Landing'
import Signup from './components/Signup.js'
import Login from './components/Login'
import Items from './components/Items'
import Profiles from './components/Profiles'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import EditItemForm from './components/EditItemForm'

function App() {
  const [itemsList, setItemsList] = useState([])

  const getItemsList = () => {
    axiosWithAuth()
      .get('/tech_items')
      .then((res) => {
        setItemsList(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getItemsList()
  }, [])
  return (
    <div className='App'>
      <Switch>
        <Route path='/signup'>
          <Signup />
        </Route>
        <PrivateRoute
          exact
          path='/items'
          component={Items}
          items={itemsList}
          setItemsList={setItemsList}
        />
        <Route path='/login'>
          <Login />
        </Route>
        <PrivateRoute
          exact
          path='/profiles'
          component={Profiles}
          items={itemsList}
          setItemsList={setItemsList}
        />
        <Route path='/'>
          <Landing />
        </Route>
        <PrivateRoute exact path='tech_items/:id' component={EditItemForm} />
      </Switch>
    </div>
  )
}

export default App
