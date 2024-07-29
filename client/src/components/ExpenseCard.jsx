import { formatDateString } from "../compute/formatDateString";


export default function ExpenseCard({group, expense}){
    return(
        <div className="p-4 cursor-pointer hover:bg-stone-900 rounded ">
            <div className="flex justify-between">
                <p className=" font-semibold">{expense.expenseTitle}</p>
                <p className="font-bold">{`${group.symbol} ${expense.amount}`}</p>
            </div>
            <div className="flex justify-between">
                <p 
                    className="text-sm text-gray-500"
                >
                    Paid by <span className="font-semibold text-gray-400">{expense.paidBy}</span> for 
                    &nbsp;{expense.paidFor.map((ex) => <span className="font-semibold text-gray-400">{`${ex}, `}</span>)}
                </p>
                <p className="text-sm">{formatDateString(expense.time)}</p>
            </div>
            
        </div>
    )
}

// createdAt
// : 
// "2024-07-28T17:11:57.338Z"
// expenseTitle
// : 
// "ex"
// paidBy
// : 
// "66a67bae673dd03e704d2b93"
// paidFor
// : 
// (3) ['om', 'ram', 'laksman']
// time
// : 
// "2024-07-02T22:41"
// updatedAt
// : 
// "2024-07-28T17:11:57.338Z"
// _id
// : 
// "66a67bdd673dd03e704d2b9e"