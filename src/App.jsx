import React, { useState, useEffect } from 'react';
import items from './components/items';
import Card from './components/Card';
import Score from './components/Score';
import Credits from './components/Credits';
import uniqid from 'uniqid';

function App() {
  const [cards, setCards] = useState(
    items.map((item) => ({
      source: item.source,
      name: item.name,
      description: item.description,
      clicked: 0,
      id: uniqid(),
    }))
  );
  const [score, setScore] = useState({
    current: 0,
    best: 0,
  });

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (cards.some((card) => card.clicked === 2)) {
      setCards((prevCards) => {
        return prevCards.map((card) => ({ ...card, clicked: 0 }));
      });
      setScore({
        current: 0,
        best: score.current > score.best ? score.current : score.best,
      });
      return;
    }
    if (cards.some((card) => card.clicked !== 0))
      setScore({ ...score, current: score.current + 1 });
  }, [cards]);

  const clickCard = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) => {
        return card.id === id ? { ...card, clicked: card.clicked + 1 } : card;
      })
    );
    shuffleCards();
  };

  function shuffleCards() {
    setCards((prevCards) => {
      let oldArr = [...prevCards];
      let newArr = [];
      for (let i = 18; i > 0; i--) {
        newArr.push(
          oldArr.splice(Math.floor(Math.random() * oldArr.length), 1)[0]
        );
      }
      return newArr;
    });
  }

  return (
    <div className="app">
      <Score best={score.best} current={score.current} />
      <div className="cards">
        {cards.map((card) => (
          <Card data={card} click={() => clickCard(card.id)} key={card.id} />
        ))}
      </div>
      <Credits />
    </div>
  );
}

export default App;
