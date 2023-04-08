import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'
import Home from './components/Layout/Home';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Inventory/Login/Login';

import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import CartProductsLoader from './Loaders/CartProductsLoaders'


function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children:[
        { path:'/',
          element:<Shop/>
        },
        {
          path:'/order',
          element:<Orders/>,
          loader:CartProductsLoader
        },
        {
          path:'/inventory',
          element:<Inventory/>
        },
        {
          path:'/login',
          element:<Login/>
        },
      ]
    },
    
  ]);

  return (
    <div className="App">


<RouterProvider router={router}/>
    </div>
  )
}

export default App
