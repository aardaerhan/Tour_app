import React, {useState, useEffect} from "react";
import './App.css';
import Loading from "./Loading";
import Tours from "./Tours";

const url = 'https://course-api.com/react-tours-project';



function App() {

  const [loading, setloading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async() => {
    setloading(true);
    try{
      const response = await fetch(url);
      const tours = await response.json();
      setloading(false);
      setTours(tours);
    }catch(error) {
      setloading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTours();
  },[]);

  if(loading) {
    return(
      <Loading/>
    )
  }

  if(tours.length === 0) {
    return(
      <main>
        <div className="refresh-title">
            <h2>no tours left</h2>
            <button onClick={() => fetchTours()}>refresh</button>
        </div>
      </main>
    )
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}/>
    </div>
  );
}

export default App;
