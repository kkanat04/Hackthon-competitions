import React, { useState } from 'react';
import Globe from './Globe';
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import './Statistics.css'
import StatisticInfrm from './StatisticInfrm';
import defaultMarkers from "./markers";

function markerTooltipRenderer(marker) {
    return `Страна: ${marker.city}. Заболевшие: ${marker.value}. Вакцинированных: ${marker.vaccinated}`;
}

const options = {
    markerTooltipRenderer
};

const Statistics = () => {

    const [markers, setMarkers] = useState([]);
    const [event, setEvent] = useState(null);
    const [details, setDetails] = useState(null);

    const randomMarkers = defaultMarkers.map((marker) => ({
        ...marker,
        // value: Math.floor(Math.random() * 100)
    }));

    function onClickMarker(marker = defaultMarkers[0], markerObject, event) {
        setEvent({
            marker
        });

        setDetails(markerTooltipRenderer(marker));
    }

    function onDefocus(previousFocus) {
        setEvent({
            type: "DEFOCUS",
            previousFocus
        });
        setDetails(null);
    }

    return (
        <div className="stat__row">
            <div className="stat__item">
                <StatisticInfrm
                    markers={markers}
                    setMarkers={setMarkers}
                    event={event}
                    setEvent={setEvent}
                    details={details}
                    setDetails={setDetails}
                    onClickMarker={onClickMarker}
                    onDefocus={onDefocus}
                    options={options}
                    randomMarkers={randomMarkers}
                />
            </div>
            <div className="stat__item">
                <Globe
                    markers={markers}
                    setMarkers={setMarkers}
                    event={event}
                    setEvent={setEvent}
                    details={details}
                    setDetails={setDetails}
                    onClickMarker={onClickMarker}
                    onDefocus={onDefocus}
                    options={options}
                    randomMarkers={randomMarkers}
                />
            </div>
        </div>
    )
}

export default Statistics