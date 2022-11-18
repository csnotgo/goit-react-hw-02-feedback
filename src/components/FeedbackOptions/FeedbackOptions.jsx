import { BtnBox, FeedbackBtn } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnBox>
      {options.map(key => {
        return (
          <li key={key}>
            <FeedbackBtn type="button" onClick={onLeaveFeedback}>
              {key}
            </FeedbackBtn>
          </li>
        );
      })}
    </BtnBox>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
