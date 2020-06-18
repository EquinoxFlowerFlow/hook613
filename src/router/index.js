import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Login, Home, Reg, Label } from './assembly'

const Root = ({ route }) => renderRoutes(route.routes)

const routes = [
      {
        path: '/reg',
        component: Reg
      },
      {
        path: '/home',
        component: Home
      },
      {
        path: '/label',
        component: Label
      },
      {
        path: '/',
        component: Login,
      },
    ]


export default class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    )
  }
}





