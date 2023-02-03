import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";
import MarkerList from "../components/MarkerList";
import { useEffect, useState } from "react";
// import Preloader from "../components/Preloader";
import axios from "axios";

const Map = () => {
    let DefaultIcon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
        iconSize: [30, 45],
    });

    L.Marker.prototype.options.icon = DefaultIcon;

    const [db, setDb] = useState([]);
    const [loading, setLoading] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const data = (
                    await axios.get("/api/new_buildings/getallnewbuildings")
                ).data;

                setDb(data);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        fetchData();
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
                <MarkerList db={db} />
            </MapContainer>
        </>
    );
};

export default Map;
