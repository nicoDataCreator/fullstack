import React from "react";

const Map = () => {
    return (
        <article className="mapa">
            <iframe
                className="stream-map"
                src="https://destinomap.streamlit.app/?embed=true"
                height={500}
            >
            </iframe>
        </article>
    );
};

export default Map;
