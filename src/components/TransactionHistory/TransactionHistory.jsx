import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import { getTransactionColor } from 'utilites/colorPaleteTrans';

export const TransactionHistory = ({transactions}) => {

   return ( <table className={css.table}>
    <thead className={css.head}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  
    <tbody className={css.body}>
        {transactions.map(({id,type,amount,currency}) => (
      <tr key={id} style={{backgroundColor: getTransactionColor(type)}}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
        ))}
    </tbody>
  </table> 
   )
}

TransactionHistory.propTypes = {

  transactions: PropTypes.arrayOf(
    PropTypes.shape({

      id:PropTypes.string.isRequired,
      type:PropTypes.string.isRequired,
       amount:PropTypes.string.isRequired,
       currency: PropTypes.string.isRequired
    }
    )
  )
}




