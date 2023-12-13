import Banner from "./../components/banner";
import Input_list from "../components/input_list";
import "./../styles/about.css"
export default function About() {
  return (
    <>
      <section>
        <Banner />
        <div className="list-input">
          <Input_list data={["Fiabilité"]} />
          <Input_list data={["Respect"]} />
          <Input_list data={["Services"]} />
          <Input_list data={["Sécurité"]} />
        </div>
        
      </section>
    </>
  );
}
