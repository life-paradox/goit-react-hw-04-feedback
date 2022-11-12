import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import css from './App.module.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  incrementValue = evt => {
    const curId = evt.target.textContent.toLowerCase();

    this.setState(prevState => {
      return {
        [curId]: prevState[curId] + 1,
      };
    }, this.countTotalFeedback);
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return { total: prevState.good + prevState.neutral + prevState.bad };
    }, this.countPositiveFeedbackPercentage);
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {
        positivePercentage:
          Math.round((prevState.good / prevState.total) * 100) + '%',
      };
    });
  };

  render() {
    return (
      <div className={css.feedbackContainer}>
        <Section title="Please leave feedback" level={1}>
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.incrementValue}
          />
        </Section>
        <Section title="Statistics" level={2}>
          {!this.state.total ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }

  state = {};
}
