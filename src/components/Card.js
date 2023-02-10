import React, { Component } from 'react';

function Card({ data, click }) {
  return (
    <div className="card" onClick={click}>
      <img src={data.source} alt={data.name}></img>
      <p>{data.name}</p>
      <p>{data.description}</p>
    </div>
  );
}

export default Card;
