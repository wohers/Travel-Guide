import React from 'react'
import '../CityInfo/cityInfo.scss'
import CityHistory from './CityInfoComponents/CityHistory'

export const CityInfo = () => {
  return (
    <section className="history">
    <div className="history__container">
        <CityHistory />
    </div>
</section>
  )
}
