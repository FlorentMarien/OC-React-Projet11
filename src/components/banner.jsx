import "./../styles/banner.css";
import bannerIndex from "./../assets/banner/bannerIndex.png";
import bannerAbout from "./../assets/banner/bannerAbout.png";

export default function Banner() {
  return (
    <>
      <div className="container-banner">
        <img src={window.location.pathname === "/" ? bannerIndex : bannerAbout} />
        {
          window.location.pathname === "/" && <p>Chez vous, partout et ailleurs</p>
        }
      </div>
    </>
  );
}
