import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Body from './Body.jsx'
import Cart from "./Cart.jsx"
import RestaurantMenu from './RestaurantMenu.jsx'
import "./index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu/>,
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
