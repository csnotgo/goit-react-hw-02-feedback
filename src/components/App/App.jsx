import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = evt => {
    const targetButton = evt.target.textContent;
    this.setState(prevState => ({
      [targetButton]: prevState[targetButton] + 1,
    }));
  };

  countTotalFeedback() {
    const total = Object.values(this.state).reduce((total, num) => {
      return (total += num);
    }, 0);
    return total;
  }

  countPositiveFeedbackPercentage() {
    const total = Object.values(this.state).reduce((total, num) => {
      return (total += num);
    }, 0);
    const percentage = Math.round((this.state.good / total) * 100);
    return percentage;
  }

  reset() {
    this.setState({ good: 0, neutral: 0, bad: 0 });
  }

  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={keys}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback yet ¯\_(ツ)_/¯" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </div>
    );
  }
}
