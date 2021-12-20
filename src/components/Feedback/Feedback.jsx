import { useState } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";

const initialState = { good: 0, neutral: 0, bad: 0 };
const options = ['good', 'neutral', 'bad']
function Feedback() {
  const [state, setState] = useState(initialState);
  const onClickFeedback = (option) => {
    setState({ ...state, [option]: state[option] + 1 });
  };

  const total = state.good + state.neutral + state.bad;

  const countPositiveFeedbackPercentage = Math.round(
    (state.good / total) * 100
  );

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onClick={onClickFeedback}
        />
        <h1>Statistics</h1>
        {!total ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </div>
  );
}

export default Feedback;
