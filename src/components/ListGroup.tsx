import { useState } from "react";

interface props {
  data: string[];
  heading: string;
}

function ListGroup({ data, heading }: props) {
  let [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = () => {
    console.log("heyy");
  };

  return (
    <>
      <h1>{heading}</h1>
      {data.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {data.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item "
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
