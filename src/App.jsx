import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './App.css';
import events from './events.jsx';

function App() {

  return (
    <>
      <h1>Community Board</h1>
      <h2>Welcome to our vibrant community event board, your go-to hub for exciting happenings in our neighborhood! 
        Check out the upcoming events that cater to a variety of interests and bring us all together. Mark your
         calendars and get ready for some fun!</h2>
      <div className="card-container">
      {
        events.map((event, i) => {
          return (<Card className="card-box"
            img={event.img}
            name={event.name} 
            day={event.day}
            location={event.location}
            description={event.desc}
            key={i} />)
        })
      }
      </div>

    </>
  )
}

export default App
