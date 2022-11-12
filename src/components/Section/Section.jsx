import PropTypes from 'prop-types';
import Heading from './Heading/Heading';
import css from './Section.module.css';

const Section = ({ children, title, level }) => {
  return (
    <section className={css.section}>
      <Heading level={level}>{title}</Heading>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  level: PropTypes.number,
};

export default Section;
