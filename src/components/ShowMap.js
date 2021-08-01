import React from 'react';
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'

const ShowMap = ({ coordinates }) => {
    // const [geoData, setGeoData] = useState({ lat: coordinates?.coord?.lat, lng: coordinates?.coord?.lon });

    // setGeoData({
    //     lat: coordinates?.coord?.lat,
    //     lng: coordinates?.coord?.lon
    // })
    // useEffect(() => {

    // }, [coordinates])

    // const map = useMapEvents({
    //     click: () => {
    //         map.locate()
    //     },
    //     locationfound: (location) => {
    //         console.log('location found:', location)
    //     },
    // })

    return (

        <MapContainer center={[coordinates?.coord?.lat, coordinates?.coord?.lon]} zoom={8} scrollWheelZoom={true} style={{ height: "270px" }}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[coordinates?.coord?.lat, coordinates?.coord?.lon]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>

    )
}

export default ShowMap
