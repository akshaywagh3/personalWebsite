import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Route from './components/Route';
import Services from './components/services';

import Contact from './components/Contact';
import Home from './components/Home';


async function sendMessage (userMsg){
  const response=await fetch('https://portfolio-b2f01-default-rtdb.firebaseio.com/messages.json',{
      method:'POST',
      body:JSON.stringify(userMsg),
      headers:{
      'content-Type':'application/json'
    }
  });
}
function Invoice() {
  return <div>Happy </div>;
}
const router=createBrowserRouter([
  {
    path:'/',
    element:<Route/>,
    children:[
      
      {index:true,element:<Home/>},
      {path:'/project',element:<Projects/>},
      {path:'/about',element:<About/>,errorElement:<Invoice/>},
      {path:'/contact',element:<Contact onAddmsg={sendMessage}/>},
      
    ]
  }
])
function App() {


  return (
    <RouterProvider router={router}>
      <Header/>
    </RouterProvider>
  );
}

export default App;
