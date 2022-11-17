import { BtnBox, FeedbackBtn } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <BtnBox>
      <li>
        <FeedbackBtn type="button" onClick={onLeaveFeedback}>
          Good
        </FeedbackBtn>
      </li>
      <li>
        <FeedbackBtn type="button" onClick={onLeaveFeedback}>
          Neutral
        </FeedbackBtn>
      </li>
      <li>
        <FeedbackBtn type="button" onClick={onLeaveFeedback}>
          Bad
        </FeedbackBtn>
      </li>
    </BtnBox>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
