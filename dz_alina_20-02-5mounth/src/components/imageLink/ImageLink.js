import { Link } from "react-router-dom"

function ImageLink({photoInfo}) {
  return (
    <>
    <Link to={`/photo/${photoInfo.id}`}>{photoInfo.title}</Link>
    <p>---------------------------------------------------------</p>
    </>
  )
}

export default ImageLink