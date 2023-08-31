import { ButtonBase, Card } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider"

const NewsItem = ({ item, params, marginNone }) => {

    const navigate = useNavigate()
    const { limitText } = useStateContext()
    const newsDetailRoute = `/news-detail/${params?.topic}&${params?.countries}&${params?.lang}`


    return (
        <Card elevation={4} className={`relative w-[16rem] h-[20rem] ml-0 inline-grid {marginNone ? "12px 0" : "12px"} `} sx={{ position: "", margin: `` }} >

            <ButtonBase onClick={() => navigate(`${newsDetailRoute}/${item._id}`)} className="overlay-parent" style={{ textDecoration: "none", color: "black", display: "flex", flexDirection: "column" }} >

                <div className='min-h-[26rem] w-full h-[60%] relative '  >
                    <img src={item.media} width="100%" height="100%" alt="image" />
                    <p className="w-auto text-white text-left absolute left-[5px] top-[5px] "  >{item.published_date}</p>
                </div>

                <div className="flex flex-col justify-between items-start w-full py-[4px] px-[8px] h-[40%] " >
                    <h5 className="text-[1rem] font-bold " >{limitText(item.title, 110)}</h5>
                    <p className="w-auto text-end " >By {item.author} {item.clean_url}</p>
                    <p className=" " >{item._id}</p>
                </div>

                <p className="overlay text-white " >{item.summary}</p>

            </ButtonBase>

        </Card>
    )
}

export default NewsItem;



