import { Context } from "./context"
import { useContext } from "react"

const Search = () => {

  const {query, searchHandler} = useContext(Context)

  return (
    <>
    <h1>Get Your Latest Hacker News Here</h1> 
    <form>
      <input type="text" placeholder="search here..." value={query} onChange={(e) => searchHandler(e.target.value)}/>
    </form>
    </>
  )
}

export default Search
