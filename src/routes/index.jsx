import Block_Logement from "./../components/block_logement";
import Banner from "./../components/banner";
import "./../styles/index.css";
import React from "react";

export default function Index() {
  let data = {
    type: "visible",
  };

  /* 
  let nbrblocklogement = 5;
  nbrblocklogement % 3 = 2
  hidden last
  */
  return (
    <>
      <div>
        <Banner />
      </div>

      <div className="list-logement">
        <Block_Logement data={data} />
        <Block_Logement data={data} />
        <Block_Logement data={data} />
        <Block_Logement data={data} />
      </div>
    </>
  );
}
