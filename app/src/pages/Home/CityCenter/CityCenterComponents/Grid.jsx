import React from 'react'

import rm from '../../../../assets/images/rm11.jpg'
import GridImages from './GridImages'
import olimp from '../../../../assets/images/olimp11.jpg'
import Img from '../../../../components/ImgComponents/Img'
import GridText from './GridText'
import Text from '../../../../components/Text/Text'


const Grid = () => {
  return (
    <div className="news__grid">
        <GridImages className="news__grid news__grid-item_1">
            <Img src={olimp} alt='news0'/>
            <Img src="https://shopandmall.ru/images/offers/2020-01/gb_5350e5d7e104a13be307bf3acd5d0456.jpg" alt="news1" />
        </GridImages>
        <GridText className="news__grid news__grid-item_2">
            <Text className="news__grid-text">
                Олимп – это 6 этажей шоппинга, <br />
                развлечений и ресторанов для <br />
                всей семьи, а так же удобная <br />
                подземная парковка с <br />
                автомойкой. Олимп относится к рубрикам: <br />
                детские спортивные секции. <br />
                Вы можете узнать всю интересующую вас <br />
                информацию, позвонив по телефону <br />
                +7 (917) 898-80-66.
            </Text>
        </GridText>
        <GridText className="news__grid news__grid-item_3">
            <Text className="news__grid-text">
                Суперрегиональный многофункциональный комплекс
                <br />
                Рамус молл – один из крупнейших проектов в
                <br />
                республике Татарстан и самый крупный проект
                <br />
                в городе Нижнекамск. Город Нижнекамск <br />
                это крупнейший центр нефтехимической <br />
                промышленности России.
            </Text>
        </GridText>
        <GridImages className="news__grid news__grid-item_4" >
            <Img src={rm} alt="news1" />
            <Img src="https://www.malls.ru/upload/medialibrary/84f/v_galereyu_7.jpg" alt="news1" /> 
        </GridImages>
    </div>
  )
}

export default Grid


