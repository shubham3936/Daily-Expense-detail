import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses'
import NewExpenses from './components/NewExpenses/NewExpenses';
function App()
{
    //  let expenseDate = new Date(2022,2,20);
    //  let expenseTitle = "Schol Fee";
    //  let expenseAmount = 300;

    let expense = [
        {
            id:'e1',
            title: 'School fees',
            amount:250,
            date : new Date(2021, 5, 12) 
        },
        {
            id:'e2',
            title: 'books',
            amount:200,
            date : new Date(2021, 5, 22) 
        },
        {
            id:'e3',
            title: 'dress',
            amount:150,
            date : new Date(2021, 5, 2) 
        }
    ]
    return (
        <div>
            
            <h2>Let's get started</h2>
            <NewExpenses/>
            <Expenses item = {expense} />    


        </div>
    );
}

export default App;