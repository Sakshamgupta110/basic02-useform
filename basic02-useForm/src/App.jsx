import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header,Contact,ContactForm } from './components/index'

function App() {
  return (
    <>
      <Header />
      <Contact />
      <ContactForm />
    </>
  )
}

export default App
