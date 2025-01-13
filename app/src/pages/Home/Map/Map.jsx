import React from "react";
import '../Map/map.scss'
import MapTitle from "./MapComponents/MapTitle";
import MapIframe from "./MapComponents/MapIframe";
import Iframe from "./MapComponents/Iframe";

export const Map = () => {
    return (
        <section id="map">
            <div className="container">
                <MapTitle className="map__title">КАРТА ГОРОДА</MapTitle>
                <MapIframe className='map__google-map'>
                    <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72104.61733379864!2d51.81018509596906!3d55.61472983429741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415fecad116124e1%3A0x62ec0a5ee724e1cc!2z0J3QuNC20L3QtdC60LDQvNGB0LosINCg0LXRgdC_LiDQotCw0YLQsNGA0YHRgtCw0L0!5e0!3m2!1sru!2sru!4v1728819387697!5m2!1sru!2sru" title="Карта города" />
                </MapIframe>
            </div>
        </section>
    );
};
