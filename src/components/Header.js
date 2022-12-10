import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi"

const Header = ({ setQuery }) => {
        const [text , setText] = useState("")

        const handleForm = (e) => {
            e.preventDefault()
            setQuery(text)
            setText("")
        }

        return(
        <form onSubmit={(e) => handleForm(e)} className="w-full flex items-center justify-center relative">
            <input type="text" className="w-full mx-3 md:w-1/2 h-9 px-3 rounded-md focus-within:outline-none focus-within:shadow-md " value={text} onChange={e => setText(e.target.value)} />
            <button type="submit" onSubmit={(e) => handleForm(e)} className="absolute right-2.5 text-2xl mr-2 md:right-1/4"><BiSearchAlt /></button>
        </form>
    )
}

export default Header;