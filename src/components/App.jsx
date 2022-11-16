import React from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import css from './App.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const incrementValue = evt => {
    const currentButton = evt.target.textContent;

    switch (currentButton) {
      case 'Good':
        setGood(prevState => prevState + 1);
        setTotal(prevState => prevState + 1);
        break;
      case 'Neutral':
        setNeutral(prevState => prevState + 1);
        setTotal(prevState => prevState + 1);
        break;
      default:
        setBad(prevState => prevState + 1);
        setTotal(prevState => prevState + 1);
    }
  };

  const countPositiveFeedbackPercentage = () => {
    setPositivePercentage(Math.round((good / total) * 100) + '%');
  };

  useEffect(countPositiveFeedbackPercentage, [good, neutral, bad, total]);

  return (
    <div className={css.feedbackContainer}>
      <Section title="Please leave feedback" level={1}>
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={incrementValue}
        />
      </Section>
      <Section title="Statistics" level={2}>
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
