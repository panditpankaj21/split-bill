
export default function CreateGroup({
    setIsSelect
}){

    return(
        <div className="mt-5 w-full px-56">
            <div className="bg-stone-800 rounded-lg p-5">
                <h3 className="font-bold text-xl mb-5">Group Information</h3>
                <div className="flex gap-5">
                    <div className="w-full">
                        <p className="font-semibold mb-2">Group Name</p>
                        <input type="text" placeholder="Summer Vacations" className="bg-black px-2 w-full rounded-md pt-2 pb-1" />
                    </div>
                    <div className="w-full">
                        <p className="font-semibold mb-2">Currency Symbol</p>
                        <input type="text" placeholder="$, ¥, ₹..." className="bg-black px-2 w-full rounded-md pt-2 pb-1" />
                    </div>
                </div>
            </div>

            <div className="bg-stone-800 rounded-lg p-5 mt-3">
                <h3 className="font-bold text-xl">Group Member's Name</h3>
                <p className="mb-5">Enter username</p>
                <div className="">
                    <div className="w-[90%] mb-4">
                        <input type="text" placeholder="e.g. John" className="bg-black px-2 w-full rounded-md pt-2 pb-1" />
                    </div>
                    <div className="w-[90%] mb-4">
                        <input type="text" placeholder="e.g. John" className="bg-black px-2 w-full rounded-md pt-2 pb-1" />
                    </div>
                    <div className="w-[90%] mb-4">
                        <input type="text" placeholder="e.g. John" className="bg-black px-2 w-full rounded-md pt-2 pb-1" />
                    </div>

                    <button className=" hover:bg-stone-900 bg-stone-600 px-4 py-2 rounded-md">Add member</button>
                </div>
            </div>

            <div className="mt-4">
                <button className="bg-[#0BDA99] text-black px-5 py-2 rounded mr-5">Create</button>
                <button 
                    className="text-red-700 hover:bg-stone-800 px-5 py-2 rounded"
                    onClick={() => setIsSelect(false)}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}