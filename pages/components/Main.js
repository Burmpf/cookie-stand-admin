

export default function Main() {
    return (
        <main className='bg-green-100 py-20'>
            <div className="flex  bg-green-200 w-3/4 justify-center m-auto">

                <form className="flex w-3/4 p-6 mx-auto my-6 justify-center">
                    <fieldset>
                        <legend className='content-center text-center w-1/4 mx-auto my-4 font-medium text-2xl '>Create Cookie Stand</legend>
                        <label className='content-center mx-4 my-2'>Location
                            <input className='content-center mx-2 my-2 w-10/12' type="text" name="location" placeholder=" Location" required />
                        </label>
                        <label className='inline-grid content-center text-center p-3 my-6'>Min Customers per Hour
                            <input className='w-56 inline-block mx-2 my-2' type="number" name="min" required />
                        </label>
                        <label className='inline-grid text-center p-3 my-9'>Max Customers per Hour
                            <input className='w-56 mx-2 my-2' type="number" name="max" required />
                        </label>
                        <label className='inline-grid text-center p-3 my-6'>Avg Cookies per Customer
                            <input className='w-56 mx-2 my-2' type="number" name="avg" required />
                        </label>
                        <button className="inline-grid text-center w-48 mx-2 my-2 px-6 py-4 bg-green-500 text-gray-50">Create</button>
                    </fieldset>
                </form>
            </div>
            <p className='text-center text-gray-600 font-medium'>Report Table Coming Soon...</p>
        </main>
    )
}