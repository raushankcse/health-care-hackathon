import './App.css'
import landing from './components/landingPage/landing'
import about from './components/aboutPage/about'
import contact from './components/contactPage/contact'

// Import React router dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Creating router
const router = createBrowserRouter([
  {
    path: '/',
    element: <div ><landing /></div>
  },
  {
    path: '/about',
    element: <div ><about /></div>
  },
  {
    path: '/contact',
    element: <div ><contact /></div>
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
