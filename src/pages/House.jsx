import { useNavigate, useParams } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import { dataBase } from "../db";

const House = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const h = dataBase.filter((item) => item.id === id);
    const house = h[0];
    console.log(house);

    const slides = house.slides

    // const slides = [
    //     {
    //         url: "https://4.downloader.disk.yandex.ru/preview/9c8b004d0a6c7fb7597336b10f566423502522a9da31841494c53fec316aa34c/inf/87WYv4pFFoe4m9ttbhf5rPNDqe4k30kYwUuLLJSHhtTWyO_L3r8uylYRcRENO9XfIYpYJZXM2yD2FDkJ0ebh2w%3D%3D?uid=24371254&filename=2023-01-30%2017-07-55_1675105770905.JPG&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=24371254&tknv=v2&size=1920x969",
    //         title: "EMERALD HOMES",
    //     },
    //     {
    //         url: "https://3.downloader.disk.yandex.ru/preview/0f631268cea75f96a2b9f736f1cf2cd125ec112254dea834634062d48fa4a878/inf/WjWgPnBYoahNZ8uaAsD1CGGUgizoISgR4VtCMHsIJWRzc6gP51yUaS3IsJdFH1eDAj_QRSgEUVhSgFSRuU6kng%3D%3D?uid=24371254&filename=2023-01-30%2017-07-55_1675105766314.JPG&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=24371254&tknv=v2&size=3440x1329",
    //         title: "EMERALD HOMES",
    //     },
    // ];
    const containerStyles = {
        width: "728px",
        height: "420px",
        margin: "0 auto",
    };

    return (
        <>
            <div style={containerStyles}>
                <ImageSlider slides={slides} />
            </div>
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
