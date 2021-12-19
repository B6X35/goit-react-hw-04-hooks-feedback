import { useState } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickFeedback = (option) => {
    if (option === "good") {
      setGood((prevGood) => prevGood + 1);
    }
    if (option === "neutral") {
      setNeutral((prevNeutral) => prevNeutral + 1);
    }
    if (option === "bad") {
      setBad((prevBad) => prevBad + 1);
    }
  };

  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = Math.round((good / total) * 100);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onClick={onClickFeedback}
        />
        <h1>Statistics</h1>
        {!total ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </div>
  );
}

export default Feedback;
