import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export default function UserMoreInfo(){
    const {id}=useParams()
    const [user,setUser]=useState({})
    const [preloader,setLoader]=useState(false)
    const [error,setError]=useState('')
    const navigate=useNavigate()
    const getUserInfo=async()=>{
        try {
            setLoader(true)
            const response=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            if(response.status>=200 && response.status<=204){
                
                const userResponse=await response.json()
                setUser(userResponse)
                return
            }
                throw `error: ${response.status}: пользователь не найден`
            
        } catch (error) {
            setError(error)
            setUser({})
        }
        finally{
            setLoader(false)
        }

    }
    useEffect(()=>{
        getUserInfo()
    },[])
    return(
        <>
                <button onClick={()=>navigate(-1)}>go to back</button>
            {
                preloader
                ?
                <div>Загрузка...</div>
                :
                error
                ?
                <h5>{error}</h5>
                :
                <>
                    <h5>name: {user?.name}</h5>
                    <p>username: {user?.username}</p>
                    <p>email: {user?.email}</p>
                    <p>website: {user?.website}</p>
                    <p>phone: {user?.phone}</p>
                </>
            }
        </>
    )
}