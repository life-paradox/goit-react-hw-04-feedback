import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="feedbackStatistic">
      <p className={css.statisticItem}>Good: {good}</p>
      <p className={css.statisticItem}>Neutral: {neutral}</p>
      <p className={css.statisticItem}>Bad: {bad}</p>
      <p className={css.statisticItem}>Total: {total}</p>
      <p className={css.statisticItem}>
        Positive feedback: {positivePercentage}
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};

export default Statistics;
