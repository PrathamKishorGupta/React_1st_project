
import React, { useState } from "react";

const App2 = () => {

    const [username, setUsername] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(username)
        setUsername('')
    }

    return (
        <div>
            <form onSubmit={(e) => {submitHandler(e)}}>
                <input
                value = {username}
                onChange={(e) => setUsername(e.target.value)}
                className='px-4 rounded py-3 text-xl m-5'
                type="text"
                placeholder="Enter your name here"
                />
                <button className='px-4 text-white py-3 text-xl font-semibold bg-emrald-600 rounded'>Submit</button>
            </form>
        </div>
    )
}

export default App2