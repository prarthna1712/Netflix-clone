import React, { useEffect, useState } from 'react'
import './Titlecarts.css'
import cards_data from '../../assets/cards/Cards_data'


const Titlecarts = ({title,category}) => {

  const [apiData, setApiData] = useState([]);


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmNjZjYyYTU5M2ZlMTEzNDQzNzhhYjNhZTE4NDc0MyIsIm5iZiI6MTc0NTgzODk0My44MjA5OTk5LCJzdWIiOiI2ODBmNjM1ZjcxZGVkY2I4YWNlYjM5ZjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xMb6jsDb78INP7pyckzeSYmM3e08tfnNPFuQxmxYjjg'
    }
  };
  useEffect (()=>{
    
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
  },[])

  return (
    <div className='title-carts'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="cart-list">
        {apiData.map((card, index)=>{
          return <div className='cart' key={index}>
            <img src= {`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt=''/>
            <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Titlecarts
