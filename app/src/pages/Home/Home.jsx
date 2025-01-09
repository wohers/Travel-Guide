import React from 'react'
import Header from '../../components/Header/Header'
import { Slider } from './Slider/Slider'
import { CityInfo } from './CityInfo/CityInfo'

const Home = () => {
  return (
    <div>
        <Header />
        <Slider />
        <CityInfo />
    </div>
  )
}

export default Home