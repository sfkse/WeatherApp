import React from 'react';
import { MapContainer, TileLayer, Popup, Marker, useMap } from 'react-leaflet';




function SetViewOnClick({ weather, coordinates }) {
    const map = useMap();
    map.setView([coordinates?.lat, coordinates?.lon], 8);
    const description = weather?.weather[0]?.description.charAt(0).toUpperCase() + weather?.weather[0]?.description.toLowerCase().slice(1)
    return (
        <Marker position={[coordinates?.lat, coordinates?.lon]}>
            <Popup>
                <img
                    src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}.png`}
                    alt="WeatherIcon"
                    style={{ width: "18px" }}
                /> {Math.floor(weather?.main?.temp)}°C<br /> {description}
            </Popup>
        </Marker>
    );
}

function ShowMap({ weather, coordinates }) {
    return (
        <MapContainer
            classsName="map"
            center={[coordinates?.lat, coordinates?.lon]}
            zoom={8}
            scrollWheelZoom={true}
            style={{ height: "270px" }}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <SetViewOnClick weather={weather} coordinates={coordinates} />
        </MapContainer>
    );
}

export default ShowMap;
