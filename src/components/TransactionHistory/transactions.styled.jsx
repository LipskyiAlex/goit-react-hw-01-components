import styled from '@emotion/styled';

export const Table = styled.table`

width: 100%;

text-align: center;
font-size: 12px;

color: var(--primary-color);

border-collapse: collapse;

thead {
    border-top: 1px solid;
    font-weight: 700;

     text-transform: uppercase;
}

th {

    border-top: 0.5px solid;
}

td {

    border-top: 0.5px solid;

}

`;

export const TableRow = styled.tr`
  

background-color: ${props => getTransactionColor(props.type)};
`;

 function getTransactionColor(transaction) {
    
    const deposit = "#e0ffcd";

    const withdrawal = "#ffcab0";

    const payment = "#fdffcd";

    const invoice = "#ffebbb"; 
  
  
    switch(transaction) {

      case "deposit":

       return deposit;

       case "withdrawal":
 
       return withdrawal;

       case "payment":

       return payment;

       case "invoice":

       return invoice;

       default:

       return "#fff";
    }
  }
  