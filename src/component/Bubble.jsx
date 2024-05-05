import React, { useEffect, useState } from 'react';
import styles from './Game.module.css'; // Import CSS module for styling
import { Outlet } from 'react-router-dom';

const BubbleGame = () => {
  const [timer, setTimer] = useState(20);
  const [score, setScore] = useState(0);
  const [hit, setHit] = useState(1);

  useEffect(() => {
    const t = setInterval(() => {
      if (timer > 0) {
        setTimer(prevTimer => prevTimer - 1);
      } else {
        clearInterval(t);
      }
    }, 1000);

    return () => clearInterval(t);
  }, [timer]);

  const makeBubble = () => {
    let clutter = '';
    for (let i = 1; i <= 189; i++) {
      const rn = Math.floor(Math.random() * 10);
      clutter += `<div class="${styles.bubble}">${rn}</div>`;
    }
    return clutter;
  };

  const handleClick = (e) => {
    const clicknum = Number(e.target.textContent);
    if (clicknum === hit) {
      setScore(prevScore => prevScore + 10);
      setHit(Math.floor(Math.random() * 10));
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <div className={styles.innerDiv}>
          <div className={styles.elm}>
            <h2>Hit</h2>
            <div id="hitval" className={styles.box}>{hit}</div>
          </div>
          <div className={styles.elm}>
            <h2>Time</h2>
            <div id="timerVal" className={styles.box}>{timer}</div>
          </div>
          <div className={styles.elm}>
            <h2>Score</h2>
            <div id="scoreVal" className={styles.box}>{score}</div>
          </div>
        </div>
        <div id="outer-div" className={styles.outerDiv} onClick={handleClick}>
          {makeBubble()}
        </div>
      </div>
    </div>
  );
};

export default BubbleGame
