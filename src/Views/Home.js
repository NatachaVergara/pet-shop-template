import React from 'react'
import HomeContainer from '../Components/Home'
import { gotoTop, title } from '../utils/function';


const Home = () => {
  gotoTop()
  title('Inicio');
  return (
    <main>
      <HomeContainer />
    </main>
  )
}

export default Home