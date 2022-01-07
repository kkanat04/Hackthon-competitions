import React, { useState, useEffect } from "react";
import ReactGlobe from "react-globe";

function Globe(props) {

    useEffect(() => {
        props.setMarkers(props.randomMarkers)
        return () => {
            props.setMarkers(props.markers.slice(0, props.markers.length - 1))
        }
    }, [])

    return (
        <div style={{ width: '50vw', height: '70vh', position: 'relative', borderRadius: '50px', overflow: "hidden" }}>
            {props.details && (
                <div
                    style={{
                        letterSpacing: '1px',
                        wordSpacing: '2px',
                        width: '400px',
                        background: "#45464c",
                        position: "absolute",
                        fontSize: 20,
                        bottom: '15px',
                        right: '15px',
                        padding: '5px',
                        borderRadius: '10px',
                        boxShadow: '0px 0px 5px 2px #000',
                        color: 'white',
                    }}
                >
                    <p>{props.details}</p>
                </div>
            )}
            <ReactGlobe
                height="70vh"
                markers={props.markers}
                options={props.options}
                width="50vw"
                onClickMarker={props.onClickMarker}
                onDefocus={props.onDefocus}
            />
        </div>
    );
}

export default Globe
