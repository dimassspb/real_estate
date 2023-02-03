import MarkerItem from "./MarkerItem";

const MarkerList = ({ db }) => {
    // console.log("Db:", db);
    return (
        <div className='list'>
            {db.map((marker) => (
                <MarkerItem key={marker.name} {...marker} />
            ))}
        </div>
    );
};

export default MarkerList;
