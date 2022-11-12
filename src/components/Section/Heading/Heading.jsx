import PropTypes from 'prop-types';
import css from './Heading.module.css';

const Heading = ({ level, children }) => {
  const Title = `h${level}`;
  return <Title className={css.sectionTitle}>{children}</Title>;
};

Heading.propTypes = {
  level: PropTypes.number,
};

export default Heading;
