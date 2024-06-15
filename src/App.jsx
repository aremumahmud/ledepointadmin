import { useEffect, useState } from 'react'


// import {} from ''

// import './App.css'
import Home from './components/home'
import './css/responsive.css'
import loadImage from './utils/images.js';
import Loader from './components/loader';
import Insert from './components/Insert.jsx';
import ClientsList from './components/clientsList.jsx';
import SendEmailToClient from './components/sendEmailTo.jsx';
function App() {

// Dynamically import all images from the 'images' directory
const images = import.meta.glob('/src/assets/*.{png,jpg,jpeg,svg}', { eager: true });

console.log(images)
  let [load , setLoading] = useState(true)
  useEffect(()=>{
   

    Promise.all(Object.values(images).map(img => loadImage(img.default)))
    .then(() => setTimeout(()=>setLoading(false)),5000)
    .catch(err => console.error('Failed to load images', err));

  },[])
  
  return (
    <>
    {
      load && <Loader />
    }
{/*     
     <Home /> */} 
     <Insert />
    <ClientsList /> 
      <SendEmailToClient />  {/* */}
    </>
  )
}

export default App
