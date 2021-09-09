import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({onUpdate, toys, onDelete}) {
  const toyCards = toys.map(toy => <ToyCard onUpdate={onUpdate} onDelete={onDelete} key={toy.id} toy={toy} />)
  return (
    <div id="toy-collection">
      {toyCards}
      </div>
  );
}

export default ToyContainer;
