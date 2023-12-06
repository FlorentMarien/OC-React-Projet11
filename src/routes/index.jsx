import Block_Logement from "./../components/block_logement";
import Banner from "./../components/banner";
import "./../styles/index.css";
import React from "react";
import mockeddata from "./../assets/data/logements.json";

export default function Index() {
  let data = {
    type: "visible",
  };
  let x = 0;
  return (
    <>
      <section>
        <div>
          <Banner />
        </div>

        <div className="list-logement">
          {mockeddata.map((element) => {
            x++;
            if (mockeddata.length % 3 === 2 && x === mockeddata.length) {
              //Ajout element caché pour l'alignement via flex
              return (
                <>
                  <Block_Logement data={element} />
                  <Block_Logement data={element} hidden={true} />
                </>
              );
            } else {
              return <Block_Logement data={element} />;
            }
          })}
        </div>
      </section>
    </>
  );
}
