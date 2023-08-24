import PropTypes from 'prop-types';

const Statistics = ({ items,title }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list list">
        {items.map(({id,label,percentage}) => (
          <li key={id} className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

// PropTypes

Statistics.propTypes = {

  title: PropTypes.string,
    items:PropTypes.arrayOf(
     PropTypes.shape({
    id:PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }))
};

export default Statistics;