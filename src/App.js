import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Data from "./Components/Data";

function App() {
  // Toggle Logic
  const [isForm, setIsForm] = useState(true);
  const handleIsFrom = () => {
    setIsForm(!isForm);
  };
  // Adding value to array logic here
  const [EmpData, setEmpData] = useState([]);
  const [data, setData] = useState({
    name: "",
    dept: "",
    rating: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    let newObj = {
      name: data.name,
      dept: data.dept,
      rating: data.rating,
    };
    setEmpData([...EmpData, newObj]);

    setData({ name: "", dept: "", rating: "" });
    console.log(EmpData);
  };

  return (
    <div className="App">
      {isForm ? (
        <Form
          data={data}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleIsFrom={handleIsFrom}
        />
      ) : (
        <Data EmpData={EmpData} handleIsFrom={handleIsFrom} />
      )}
    </div>
  );
}

export default App;
