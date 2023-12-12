import { Context } from "../context"
import { useContext } from "react"

const Search = () => {

  const {query, searchHandler} = useContext(Context)

  return (
    <>
    <h1>The Hacker News <img src="verified-badge-fill.png" alt="" height="20px"/></h1> 
    <h3>| Get The Latest Updates On The Hacker News |</h3>
    <form>
      <input type="text" placeholder="search here..." value={query} onChange={(e) => searchHandler(e.target.value)}/>
    </form>
    </>
  )
}

export default Search
