import React, { Component} from "react";

import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Sections/Sections";
import { Notification } from "./Notification/Notification";


export class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, n) => {return acc + n}, 0);
  }

  countPositiveFeedbackPercentage = () => {
    const {good} = this.state;
    return good !== 0 ? Number.parseInt( good /(this.countTotalFeedback()) * 100) : 0;
  }
  
  onLeaveFeedback = key => {
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
      }
    })
  };

  render () {
    const {good, neutral, bad} = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        
        <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
        <Section title="Statistics">
        {total === 0 ? 
                <Notification message="There is no feedback" /> : 
                <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>}
        </Section>
        </div>
    );
  }
  };

