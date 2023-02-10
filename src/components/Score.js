import React, { Component } from 'react';

function Score({ current, best }) {
  return (
    <div className="score">
      <p>Top score: 18</p>
      <p>Current score: {current}</p>
      <p>Best score: {best}</p>
    </div>
  );
}

export default Score;
