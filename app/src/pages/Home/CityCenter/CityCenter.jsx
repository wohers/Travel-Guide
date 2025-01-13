import React from "react";
import '../CityCenter/cityCenter.scss'
import Grid from "./CityCenterComponents/Grid";
import GridTitle from "./CityCenterComponents/CityTitle";

export const CityCenter = () => {
    return (
        <section className="news">
            <div className="container">
                <GridTitle className="news__title">
                    Сити - Центры
                </GridTitle>
                <Grid />
            </div>
        </section>
    );
};
