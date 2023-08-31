import { Search, Person } from "@mui/icons-material"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider"
import categories from './Categories.json'

const Navbar = () => {

    const [searchQuery, setSearchQuery] = useState("")

    const navigate = useNavigate()

    const { screenSize, setScreenSize, setActiveMenu, fetchHeadlines } = useStateContext()

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const handleSearchClick = async () => {
        // navigate(`/news/${searchQuery}&pk&en`)
        console.log('handleSearchClick')
        // setSearchQuery("")
        fetchHeadlines()
    }

    return (
        <div className="flex flex-col gap-[6px]  "  >

            <nav className='flex flex-col justify-center h-[64px] border-b-[1px] border-black  ' >
                <div className="flex justify-between items-center w-full px-[3rem] bg-inherit "   >
                    <Link to="/">
                        <h5 className='font-[monospace] text-[32px] font-bold text-blue ' >NEWZ</h5>
                    </Link>
                    <div className="flex items-center gap-[1rem] h-full py-[4px] "  >
                        {
                            categories.slice(0, 8).map((category, index) => (
                                <Link to='' key={index} className='font-[system-ui] font-light hover:text-blue text-white text-[18px] h-full flex justify-center items-center rounded-[4px] ' >
                                    {category.topic}
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </nav>

            <div className="flex justify-end items-center px-[3rem] pt-[4px] " >
                <div className="bg-black overflow-hidden relative flex items-center w-[18rem] h-[36px] border-[1px] rounded-[4px] border-gray-400 "   >
                    <input className="px-[12px] bg-inherit w-[90%] h-full text-white  " placeholder="Search..." value={searchQuery} onChange={handleChange} />
                    <button className="absolute cursor-pointer right-0 top-0 h-full w-[3rem] bg-blue text-white rounded-[4px] flex justify-center items-center " disabled={searchQuery === ""} onClick={handleSearchClick} >
                        <Search position="absolute" />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Navbar


    // < Avatar alt = { user.result.name } src = { user.result.imageUrl } > { user.result.name.charAt(0) }</ >
