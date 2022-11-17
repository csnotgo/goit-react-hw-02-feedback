import { StatCategory } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <li>
        <StatCategory>Good: {good}</StatCategory>
      </li>
      <li>
        <StatCategory>Neutral: {neutral}</StatCategory>
      </li>
      <li>
        <StatCategory>Bad: {bad}</StatCategory>
      </li>
      <li>
        <StatCategory>Total: {total}</StatCategory>
      </li>
      <li>
        <StatCategory>Positive feedback: {positivePercentage}%</StatCategory>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
