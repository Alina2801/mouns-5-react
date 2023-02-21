import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
export default function PortfolioPage(){
    const navigate=useNavigate()
    const [photos,setPhotos]=useState([])
    const [update, setUpdate] = useState(false);
    const [url,setUrl]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(resp=>resp.json())
            .then(photos=>setPhotos(photos))
    },[update])
    return(
        <div>
            <button onClick={()=>navigate(-1)}>go to back</button>
            <h1>Страница портфолио</h1>
            <button onClick={() => setUpdate(!update)}>update</button>
            <div style={{display: 'flex'}}>

                <div>
                {photos.slice(0,10).map(photos=><div>
                    <img src={photos.url} alt="" style={{width:'200px'}}/>
                   <p>{photos.title}</p>
                   <button onClick={()=>setUrl(photos.url)}>узнать url фото</button>
                    <p>------------------------------</p>
                </div>)}
            </div>
                <h2>
                    url фото: {url}
                </h2>
            </div>
        </div>
    )
}