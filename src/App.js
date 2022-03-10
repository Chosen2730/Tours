import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

const App = ()=>{
  const [loading, setLoading]=useState(false);
  const [tours, setTours] = useState([]);
  const removeTours = (id)=>{
    const newTours = tours.filter((tour)=> tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async ()=>{
    setLoading(true)
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false)
      
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  };
  useEffect(()=>{
    fetchTours();
  },[]) 
  
  if(loading){
    return<>
    <Loading />
  </>
  }
  if(tours.length===0){
    return<>
      <section className="main">
    <h2 className="main_title">No more Tours</h2>
    <hr className="underline" />
    <button className="remove" onClick={()=>fetchTours()}>Refresh</button>
    </section>
    </>
  }
  return<>
    <Tours tours={tours} removeTours={removeTours}/>
  </>
 
}
export default App;

