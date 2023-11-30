import "./../styles/banner.css";
import bannerIndex from "./../assets/banner/bannerIndex.png";
export default function Banner() {
  //console.log(data.type);
  //console.log(hidden);
  return (
    <>
      <div className="container-banner">
        <img src={bannerIndex} />
        <p>Chez vous, partout et ailleurs</p>
      </div>
    </>
  );
}
