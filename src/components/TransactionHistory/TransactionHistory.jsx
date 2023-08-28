import PropTypes from 'prop-types';
import {Table,TableRow} from './transactions.styled';

// import { getTransactionColor } from 'utilites/colorPaleteTrans';

export const TransactionHistory = ({transactions}) => {

   return ( <Table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  
    <tbody>
        {transactions.map(({id,type,amount,currency}) => (
      <TableRow key={id} type={type}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </TableRow>
        ))}
    </tbody>
  </Table> 
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




