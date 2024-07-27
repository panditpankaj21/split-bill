
export default function Balances(){
    return(
        <div className="mt-5 w-full pb-5">
            <div className="bg-stone-900 rounded-lg p-5">
                <div>
                    <p className="font-bold text-lg">Balances</p>
                    <p className="text-sm text-gray-500">This is the amount that each participant paid or was paid for.</p>
                </div>
                <div className="flex justify-center items-center mt-5">
                    <ul>
                        <li className="mb-2">John: $30</li>
                        <li className="mb-2">John: $30</li>
                        <li className="mb-2">John: $30</li>
                        <li className="mb-2">John: $30</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}