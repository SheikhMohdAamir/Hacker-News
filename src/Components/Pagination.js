import { Context } from "./context"
import { useContext } from "react"

const Pagination = () => {

  const {page, nbPages, prevPageHandler, nextPageHandler} = useContext(Context)

  return (
    <div className="pagination-btn">
      <button onClick={()=> prevPageHandler()}>PREV</button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button onClick={()=> nextPageHandler()}>NEXT</button>
    </div>
  )
}

export default Pagination
