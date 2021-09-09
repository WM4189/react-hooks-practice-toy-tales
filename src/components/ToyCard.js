import React, {useState} from "react";

function ToyCard({onUpdate, toy, onDelete}) {
  const {name, image, id, likes} = toy
  const [increaseLikes, setLikes] = useState(likes)
  

  function handleDelete(){
    fetch(`http://localhost:3001/toys/${id}`,{
      method:"DELETE"
    })
    onDelete(id)
  }

function handleUpdate(){
  setLikes(increaseLikes+1)
  const likesObj = {likes:increaseLikes}
  fetch(`http://localhost:3001/toys/${id}`,{
    method:"PATCH",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(likesObj)
  })
  .then(r => r.json())
  .then(data => onUpdate(data.id, data.likes))
}

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleUpdate} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
