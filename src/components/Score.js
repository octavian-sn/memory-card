import React, { Component } from 'react';

function Score({ current, best }) {
  return (
    <div className="score">
      <p>Memory Card game</p>
      <p>Top score: 18</p>
      <p>Best score: {best}</p>
      <p>Current score: {current}</p>
    </div>
  );
}

export default Score;
