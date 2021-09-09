import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ToyForm({onAddCard}) {
const [name, setToyName] = useState('')
const [image, setToyImage] = useState('')


function handleSubmit(e){
e.preventDefault()
const newToy = {
  id: uuid(),
  name,
  image,
  likes:0
}
fetch("http://localhost:3001/toys",{
  method:'POST',
  headers: {
    "Content-Type":"application/json"
  },
  body:JSON.stringify(newToy)
})
.then(r => r.json())
.then(data => onAddCard(data))
setToyName('')
setToyImage('')
}

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          value={name}
          onChange={(e)=>setToyName(e.target.value)}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          value={image}
          onChange={(e)=>setToyImage(e.target.value)}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
