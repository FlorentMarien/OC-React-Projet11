import "./../styles/block_logement.css";
export default function Block_logement({ data, hidden }) {
  //console.log(data.type);
  //console.log(hidden);
  return (
    <>
      <article
        className={
          hidden === true ? "container-logement -hidden" : "container-logement"
        }
      >
        <div className="container-logement-about">
          <p>Titre</p>
          <p>De la location</p>
        </div>
      </article>
    </>
  );
}
