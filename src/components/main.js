import { useEffect, useState } from 'react'
import './css/main.css'
import axios from 'axios'; 
import 'react-multi-carousel/lib/styles.css';
import Main1 from './main/Main1'
import Main2 from './main/Main2'
import Main3 from './main/Main3'
import Main4 from './main/Main4'
import Main5 from './main/Main5';
import Main6 from './main/Main6'
import { Navigate } from 'react-router-dom';

function Main() {


  const [json, setJson] = useState([]);

  const getJson = async () => {
    await axios
    .get('https://dummyjson.com/products')
    .then(response => {
      setJson(response.data.products) 
      console.log(response.data.products)
    })
    .catch(error => {console.log(error) ;Navigate('/error')})
  }


  useEffect(() => {
    getJson()
  } , [])



  return (
    <div className='container'>
        <Main1
        json={json}
        />
        <div className='underline'></div>
        <Main2 />
        <div className='underline'></div>
        <Main3
        json={json}
        />
        <Main4 />
        <Main5
        json={json}
        />
        <Main6 />
    </div>
  )
}

export default Main;