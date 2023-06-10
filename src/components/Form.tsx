import { FormEvent, useRef } from "react";
import { categories } from "../App";

const From = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = {
    name: "",
    age: 0,
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) {
      person.name = nameRef.current.value;
    }
    if (ageRef.current !== null) {
      person.age = parseInt(ageRef.current.value);
      console.log(person);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Name
          </label>
          <input
            ref={nameRef}
            id="description"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Age
          </label>
          <input
            ref={ageRef}
            id="amount"
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <select  id="category" className="form-select">
            <option value=""></option>
            { categories.map( category => <option key={category} value={category}>{category}</option> ) }
          </select>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default From;
