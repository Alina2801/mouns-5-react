import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ImageInfo() {
    const {id}=useParams()
    const [image,setImage]=useState({})
    const [loader,setLoader]=useState(false)
    const [error,setError]=useState('')
    const getImageInfo=async()=>{
        try {
            setLoader(true)
            const response=await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            if (response.status>=200 && response.status<=204) {
                
                const imageResponse=await response.json()
                setImage(imageResponse)
                
            }else{
                throw `error: ${response.status}`
            }
        } catch (error) {
            setError(error)
            setImage({})
            
        }finally{
            setLoader(false)
        }

    }
    useEffect(()=>{
        getImageInfo()
    },[])
  return (
    <>
        {
                loader
                ?
                <h3>Загрузка...</h3>
                :
                error
                ?
                <h3>{error}</h3>
                :
                <img src={image.url} style={{width:'200px'}}/>
        }
    </>
  )
}

export default ImageInfo