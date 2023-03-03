import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <App/>,
    children: [
      {
        path: "/es",
        element: <App/>,
      },
      {
        path: "/en",
        element: <App/>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>

      <RouterProvider router={router} />


    </Provider>
  </React.StrictMode>
)
