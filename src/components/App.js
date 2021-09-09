import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyData, setToyData] = useState([])
  

  useEffect(()=>{
    fetch("http://localhost:3001/toys")
    .then(r => r.json())
    .then(data => setToyData(data))
  },[])
  console.log(toyData)

  function handleFormToggle() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddCard(newToy){
    setToyData([...toyData, newToy])
  }

  function handleDelete(id){
    const updatedToys = toyData.filter(toy => toy.id !== id)
    setToyData(updatedToys)
  }

  function handleUpdate(id, likes){
    console.log(id, likes)
    const updatedToys = toyData.map(toy => {
      if(toy.id === id) {
        return {...toy, likes}
      } else {
        return toy
      }
    })
    setToyData(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddCard={handleAddCard}/> : null}
      <div className="buttonContainer">
        <button onClick={handleFormToggle}>{showForm ? "Hide Form" : "Add a Toy"}</button>
      </div>
      <ToyContainer onUpdate={handleUpdate} onDelete={handleDelete} toys={toyData} />
    </>
  );
}

export default App;
