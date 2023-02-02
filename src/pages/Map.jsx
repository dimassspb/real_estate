import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";
import { dataBase } from "../db";
import MarkerList from "../components/MarkerList";
import { useEffect, useState } from "react";
// import Preloader from "../components/Preloader";

const Map = () => {
    let DefaultIcon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
        iconSize: [30, 45],
    });

    L.Marker.prototype.options.icon = DefaultIcon;

        const [data, setData] = useState();

        useEffect(() => {
                setData(dataBase);
        }, []);

    return (
        <>
            <MapContainer
                center={[36.855373, 34.43279]}
                zoom={10}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <MarkerList data={data} />
            </MapContainer>
        </>
    );
};

export default Map;
