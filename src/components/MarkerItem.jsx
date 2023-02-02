import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

const MarkerItem = (props) => {
    const { id, name, position } = props;
    return (
        <Link to={`/houses/${id}`}>
            <Marker key={id} id={id} position={position}>
                <Popup>
                    <p className='popup'>{name}</p>
                </Popup>
            </Marker>
        </Link>
    );
};

export default MarkerItem;
