import "./../styles/block_logement.css";
export default function Block_logement({ data, hidden }) {
  function handleClick() {
    window.location = "/logement?id=" + data.id;
  }
  return (
    <>
      <article
        className={
          hidden === true ? "container-logement -hidden" : "container-logement"
        }
        onClick={handleClick}
      >
        <img src={data.cover} />
        <div className="container-logement-about">
          <p>{data.title}</p>
        </div>
      </article>
    </>
  );
}
