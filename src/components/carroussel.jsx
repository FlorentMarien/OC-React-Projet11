import "./../styles/carroussel.css";
import arrowLeft from "./../assets/icon/arrow-left.svg";
import arrowRight from "./../assets/icon/arrow-right.svg";
import React, { useState } from "react";

export default function Banner({ arrayImg }) {
  let [indexImg, setindexImg] = useState(0);
  console.log(arrayImg.length)
  function carrousselBack() {
    indexImg === 0
      ? setindexImg(arrayImg.length - 1)
      : setindexImg(indexImg - 1);
    console.log(indexImg);
  }
  function carrousselForward() {
    indexImg === arrayImg.length - 1
      ? setindexImg(0)
      : setindexImg(indexImg + 1);
    console.log(indexImg);
  }
  return (
    <>
      <div className="logement-carroussel">
        {
          arrayImg.length > 1 && 
          <img
          className="carroussel-back"
          src={arrowLeft}
          onClick={carrousselBack}
        />
        }
        <img className="carroussel-img" src={arrayImg[indexImg]} />
        {
          arrayImg.length > 1 &&
          <img
          className="carroussel-forward"
          src={arrowRight}
          onClick={carrousselForward}
        />
        }
        
      </div>
    </>
  );
}
