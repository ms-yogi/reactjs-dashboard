import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { routes } from './utils/routes'
import userdata from './data/user.json'
import './styles/common.scss'

const App = () => {
  return (
    <>
      <Router>
        <div className='wrapper'>
          <div className="sidebar-container">
            <Sidebar user={userdata.user}></Sidebar>
          </div>
          <div className='section-container'>
            <Navbar />
            <div className="section-view">
              <Switch>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                  />
                ))}
                <Route
                  exact
                  path='/dashboard'
                  render={() => <Redirect to='/dashboard/page-visitors' />}
                />
                <Route
                  exact
                  path='/'
                  render={() => <Redirect to='/dashboard/page-visitors' />}
                />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
