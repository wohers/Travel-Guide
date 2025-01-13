import React from 'react'
import Search from './Search/Search'
import Filter from './Filter/Filter'
import Sort from './Sort/Sort'
import Text from '../../../components/Text/Text'

const Main = () => {
    return (
        <section className="main">
            <div className="main__container">
                <div className="main__title-container">
                    <Text className='main__titleText'>Достопримечательности</Text>
                    <Search />
                    <Filter />
                    <Sort />
                </div>
                <div class="card">
                    <div class="loader" id="loader">
                        <div class="spinner"></div>
                    </div>
                    <div class="card__articles" id="articles">

                    </div>
                    <ul class="pagination" id="pagination">

                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Main