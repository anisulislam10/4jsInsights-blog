import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const News = () => {
    const apikey=`95c19467b6c3440bb931a5b7597e0942`;
const [Value, setValue] = useState()
  useEffect(() => {
    const fetch = async () => {
      const res =
      
        await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apikey}`)
        setValue(res.data.articles)
        console.log(res.data.articles)

    }
    fetch();
  }, [])

  return <div>
    <h1>Tech News</h1>
    <div>
        <h1>author: {Value[0]?.author}</h1>
        <h1>content: {Value[0]?.content}</h1>

    </div>
  </div>
}
