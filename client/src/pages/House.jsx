import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import Preloader from "../components/Preloader";

const House = () => {
    // const [db, setDb] = useState([]);
    // const [loading, setLoading] = useState();
    // const[slides, setslides] = useState([])

    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate();
    const [filteredObject, setFilteredObject] = useState();
    const [loading, setLoading] = useState(true);
    const [slides, setSlides] = useState();

    // = db.filter((item) => item._id === id);
    // console.log("mp", match.params.buildingid);
    const containerStyles = {
        width: "728px",
        height: "420px",
        margin: "0 auto",
    };

    // const getbBuildingById = async (id) => {
    //     const response = await fetch("/api/new_buildings/getnewbuildingbyid/" + id,
    //     );
    //     const data = await response.json();
    //     console.log("data", data);
    //     return data;
    // };

    useEffect(() => {
        async function fetchData() {
            try {
                // setLoading(true);
                const data = (
                    await axios.post("/api/new_buildings/getnewbuildingbyid", {
                        buildingid: id,
                    })
                ).data;
                console.log("DATA", data);
                setFilteredObject(data);
                setSlides(data.imageurls);

                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);


    console.log("filteredObject", filteredObject);
    console.log(slides)

    // const slides = filteredObject.imageurls;
    // console.log("slides", slides);

    return (
        <>
            
                {loading ? (
                    <Preloader />
                ) : (
<div style={containerStyles}>
                        <ImageSlider slides={slides} />
                        </div>
 )}
               

            

            {/* <div className='recipe'>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                <h1>{recipe.strMeal}</h1>
                <h5>Category: {recipe.strCategory}</h5>
                {recipe.strArea ? <h5>Area: {recipe.strArea}</h5> : null}
                <p>{recipe.strInstructions}</p>
                <table className='centered'>
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(recipe).map((key) => {
                            if (key.includes("Ingredient") && recipe[key]) {
                                return (
                                    <tr key={key}>
                                        <td>{recipe[key]}</td>
                                        <td>
                                            {
                                                recipe[
                                                    `strMeasure${key.slice(13)}`
                                                ]
                                            }
                                        </td>
                                    </tr>
                                );
                            }
                            return null;
                        })}
                    </tbody>
                </table>
                {recipe.strYoutube ? (
                    <div className='row'>
                        <h5 style={{ margin: "2rem 0 1.5rem" }}>
                            Video recipe
                        </h5>
                        <iframe
                            title={id}
                            src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                                -11,
                            )}`}
                            allowfullscreen
                        />
                        <iframe
                            width='1238'
                            height='696'
                            src=''
                            title='⚡️ФЕЙГИН: Ксению Собчак охранял Золотов. Медведева недаром нарядили в женское кожаное пальто'
                            frameborder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        ></iframe>
                    </div>
                ) : null}
            </div>
             */}
            <button className='btn' onClick={() => navigate(-1)}>
                Go back
            </button>
        </>
    );
};

export default House;
