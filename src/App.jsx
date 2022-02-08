import { useEffect, useState } from 'react'
import './App.css'
import Layout from './views/Layout/Layout'
import Home from './views/Home/Home'
import fetchUser from './services/user'

function App() {
  // inital value should match the data type of end value

  return (
    <Layout user={user}>
      <Home user={user} />
    </Layout>
  )
}

export default App
