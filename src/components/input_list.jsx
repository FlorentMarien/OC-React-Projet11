import "./../styles/input_list.css";
export default function Input_list({ data }) {
  console.log(typeof data);
  let x = 0;
  return (
    <>
      <select
        className="input-listbox"
        name={typeof data !== "object" ? data : data[0]}
      >
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
