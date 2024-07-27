
export default function CreateExpenseForm({
    setIsFormPageActive
}){
    return(
        <div className="mt-5 w-full pb-5">
            <div className="bg-stone-800 rounded-lg p-5">
                <h3 className="font-bold text-xl mb-5">Create expense</h3>
                <div className="flex gap-5">
                    <div className="w-full">
                        <p className="font-semibold mb-2">Expense title</p>
                        <input type="text" placeholder="Summer Vacations" className="bg-black px-2 w-full rounded-md pt-2 pb-1" />
                    </div>
                    <div className="w-full">
                        <p className="font-semibold mb-2">Expense date</p>
                        <input type="text" placeholder="$, ¥, ₹..." className="bg-black px-2 w-full rounded-md pt-2 pb-1" />
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="w-full">
                        <p className="font-semibold mb-2">Category</p>
                        <input type="text" placeholder="Summer Vacations" className="bg-black px-2 w-full rounded-md pt-2 pb-1" />
                    </div>
                    <div className="w-full">
                        <p className="font-semibold mb-2">Amount</p>
                        <input type="text" placeholder="$, ¥, ₹..." className="bg-black px-2 w-full rounded-md pt-2 pb-1" />
                    </div>
                </div>
                <div className="mr-5">
                    <p className="font-semibold mb-2">Paid by</p>
                    <select name="" id="" className="w-1/2 bg-black px-2 rounded-md pt-2 pb-1">
                        <option value="user1">user1</option>
                        <option value="user2">user2</option>
                        <option value="user3">user3</option>
                    </select>
                </div>
            </div>

            <div className="bg-stone-800 rounded-lg p-5 mt-3">
                <h3 className="font-bold text-xl">Paid for</h3>
                <p className="">Select who the expense was paid for.</p>
                <div className="">
                    <div className="flex gap-3 pb-2 border-stone-700 border-b-[0.1px] mt-5">
                        <input type="checkbox" />
                        <p className="">John</p>
                    </div>
                    <div className="flex gap-3 pb-2 border-stone-700 border-b-[0.1px] mt-5">
                        <input type="checkbox" />
                        <p className="">John</p>
                    </div>
                    <div className="flex gap-3 pb-2 border-stone-700 border-b-[0.1px] mt-5">
                        <input type="checkbox" />
                        <p className="">John</p>
                    </div>
                    
                </div>
            </div>

            <div className="mt-4">
                <button className="bg-[#0BDA99] text-black px-5 py-2 rounded mr-5">Create</button>
                <button 
                    className="text-red-700 hover:bg-stone-800 px-5 py-2 rounded"
                    onClick={() => setIsFormPageActive(false)}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}