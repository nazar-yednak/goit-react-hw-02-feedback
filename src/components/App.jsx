import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import React, { Component } from 'react';
import { Wrapper } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlelIcrement = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state);
    const totalFeddback = total.reduce((acc, elem) => acc + elem, 0);
    return totalFeddback;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedback = this.state.good;
    console.log(positiveFeedback);
    return Math.round((positiveFeedback / this.countTotalFeedback()) * 100);
  };

  render() {
    const optionsBtn = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <Wrapper>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={optionsBtn}
            onCountFeedback={this.handlelIcrement}
          />

          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </Wrapper>
    );
  }
}

export default App;
