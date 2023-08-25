export function getTransactionColor(transaction) {
    
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
  