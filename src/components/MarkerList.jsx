import MarkerItem from "./MarkerItem"

const MarkerList = ({data}) => {
  return (
    <div className="list">
      {data.map((marker) =>(
        <MarkerItem key={marker.id} {...marker} />
      ))}
      </div>
  );
};
 
export default MarkerList;