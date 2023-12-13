import "./../styles/logement.css";
import Input_list from "../components/input_list";
import mockeddata from "./../assets/data/logements.json";
import icon_star from "./../assets/icon/star.svg";
import icon_starfull from "./../assets/icon/star-full.svg";
import Carroussel from "./../components/carroussel";
export default function Logement() {
  const searchParams = new URLSearchParams(window.location.search);
  let id = searchParams.get("id");

  let focusdata = mockeddata.find((x) => x.id === id);
  if (focusdata === undefined) window.location = "/id-undefined";
  console.log(focusdata);
  return (
    <>
      <section id="section-logement">
        <Carroussel arrayImg={focusdata.pictures} />

        <div className="logement-information">
          <div>
            <p className="logement-information-title">{focusdata.title}</p>
            <p className="logement-information-location">
              {focusdata.location}
            </p>
          </div>
          <div className="logement-information-container-host">
            <p>{focusdata.host.name}</p>
            <img src={focusdata.host.picture} />
          </div>
        </div>
        <div className="logement-information">
          <div className="logement-information-tag">
            {focusdata.tags.map((element) => {
              return <span className="tag-span">{element}</span>;
            })}
          </div>
          <div className="logement-information-rating">
            {focusdata.rating === 0 ? (
              <img src={icon_star} />
            ) : (
              <img src={icon_starfull} />
            )}
            {focusdata.rating <= 1 ? (
              <img src={icon_star} />
            ) : (
              <img src={icon_starfull} />
            )}
            {focusdata.rating <= 2 ? (
              <img src={icon_star} />
            ) : (
              <img src={icon_starfull} />
            )}
            {focusdata.rating <= 3 ? (
              <img src={icon_star} />
            ) : (
              <img src={icon_starfull} />
            )}
            {focusdata.rating <= 4 ? (
              <img src={icon_star} />
            ) : (
              <img src={icon_starfull} />
            )}
          </div>
        </div>
        <div className="logement-information-container-input">
          <Input_list data={focusdata.equipments} />
          <Input_list data={focusdata.description} />
        </div>
      </section>
    </>
  );
}
