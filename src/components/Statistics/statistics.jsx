import PropTypes from 'prop-types';

const Statistics = ({ items,title }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {items.map(el => (
          <li key={el.id} className="item">
            <span className="label">{el.label}</span>
            <span className="percentage">{el.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

// PropTypes

Statistics.propTypes = {

  title: PropTypes.string,
  items:PropTypes.shape({

    id:PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  })
};
