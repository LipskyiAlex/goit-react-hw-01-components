import PropTypes from 'prop-types';
import {Statistic,Title,List,Item,Label,Percentage} from './statistic.styled';



export const Statistics = ({ items,title }) => {

  

  return (
    <Statistic>
      {title && <Title>{title}</Title>}
      <List>
        {items.map(({id,label,percentage},index) => (
          <Item key={id} index={index} item={items}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </Statistic>
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

