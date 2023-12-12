import { useEffect } from 'react'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner';

const News = () => {
    let loading = true;
    let API = 'http://hn.algolia.com/api/v1/search?query=html'

    const fetchNewsData = async(url) => {
        try{
            const response = await axios.get(url)
            const data = response.data.hits
            console.log(data)
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchNewsData(API)
    },[])

    if(loading===true) return <Spinner animation="border" variant="dark" />
    
  return (
    <>
    {!loading && ''}
    </>
  )
}

export default News;