import React from 'react'
import HomeContainer from '../Components/Home'
import { title } from '../utils/function';


const Home = () => {
  title('Inicio');
  return (
    <main>
      <HomeContainer />
    </main>
  )
}

export default Home