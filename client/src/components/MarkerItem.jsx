import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

const MarkerItem = (props) => {
    // console.log("props:",props);
    const { _id, name, position } = props;
    return (
        <Link to={`/houses/${_id}`}>
            <Marker key={_id} id={_id} position={position}>
                <Popup>
                    <p className='popup'>{name}</p>
                </Popup>
            </Marker>
        </Link>
    );
};

export default MarkerItem;
