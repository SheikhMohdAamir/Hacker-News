import { Context } from "../context"
import { useContext } from "react"

const Pagination = () => {

  const {page, nbPages, prevPageHandler, nextPageHandler} = useContext(Context)

  return (
    <div className="pagination-btn">
      <button className="button" onClick={()=> prevPageHandler()}>PREV</button>
      <p style={{color:'#035552'}}>
        {page + 1} of {nbPages}
      </p>
      <button className="button" onClick={()=> nextPageHandler()}>NEXT</button>
    </div>
  )
}

export default Pagination
