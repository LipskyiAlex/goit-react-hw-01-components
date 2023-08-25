import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import colorPaletteStat from 'utilites/colorPaletteStat';

export const Statistics = ({ items,title }) => {

  const width = {

    width: `calc(100% / (${items.length})`
  }


  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.list}>
        {items.map(({id,label,percentage},index) => (
          <li key={id} className={css.item} style={{width,backgroundColor:colorPaletteStat(index%4)}}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
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

