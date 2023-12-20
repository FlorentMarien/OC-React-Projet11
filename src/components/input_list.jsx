import "./../styles/input_list.css";
import { useState } from "react";
import arrowDown from "./../assets/icon/arrow-down.svg"
import arrowUp from "./../assets/icon/arrow-up.svg"
export default function Input_list({ data }) {
  let [indexArrow, setArrowImg] = useState(arrowDown);
  let x = 0;
  let tampon;
  let elementbase;
  function displaylistbox(e){
    let list_listbox = e.currentTarget.parentNode.parentNode.children[1];
    if(list_listbox.style.display === "none"){list_listbox.style.display = "block"; setArrowImg(arrowUp)} else {list_listbox.style.display = "none";setArrowImg(arrowDown)}
  }
  return (
    <>
      <div
        name={typeof data !== "object" ? data : data[0]}
      >
        
        {typeof data !== "object" ? (
          <>
            <div 
            className="input-listbox"
            >
              <p>Description</p>
              <img className="icon-listbox" src={indexArrow} onClick={(e) => displaylistbox(e)}/>
            </div>
            <div className="list-listbox" style={{display:'none'}}>
              <p>{data}</p>
            </div>
          </>
        ) : (
          data.map((element) => {
             if(x === 0) elementbase=element;
              x++;
              tampon =  (
              <>
              {tampon}
              <p>{element}</p>
              </>);

          })
        )}
        {
          typeof data !== "object" ? "" : tampon = (
          <>
            <div className="input-listbox">
              <p>{elementbase}</p>
              <img className="icon-listbox" src={indexArrow} onClick={(e) => displaylistbox(e)}/>
            </div>
            <div className="list-listbox" style={{display:'none'}}>
              {tampon}
              </div>
          </>)
        }
        
      </div>
    </>
  );
}
/*
<select name={typeof data !== "object" ? data : data[0]}>
        {typeof data !== "object" ? (
          <>
            <option value="Description">Description</option>
            <option value={data}>{data}</option>
          </>
        ) : (
          data.map((element) => {
            //if (x !== 0) {
            return <option value={element}>{element}</option>;
            //}
            x++;
          })
        )}
      </select>
*/
