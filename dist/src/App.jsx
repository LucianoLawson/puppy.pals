import { useState } from 'react';
import './App.css';
import { puppyList } from './data.js';

function App() {
  const [featPupId, setFeatPupId] = useState(null);
  const [puppies] = useState(puppyList);


  function handleClick(puppyId) {
    // Toggle feature: if the same puppy is clicked again, hide the details
    if (featPupId === puppyId) {
      setFeatPupId(null);
    } else {
      setFeatPupId(puppyId);
    }
  }

  const getImageUrl = (puppyName) => {
    const formattedName = puppyName;
    return `./assets/${formattedName}.jpg`; // Adjust as necessary for images
  };
  
  return (
    <div className="App">
      <div className="content-container">
        <h1>Puppy Pals</h1>
        {puppies.map((puppy) => (
          <div key={puppy.id}>
            <p 
              onClick={() => handleClick(puppy.id)}
              className={`puppy-item ${featPupId === puppy.id ? 'active' : ''}`}
            >
              {puppy.name}
            </p>
            {featPupId === puppy.id && (
              <div className="featured-puppy">
                <img src={getImageUrl(puppy.name)} alt={`Image of ${puppy.name}`} className="featured-image" />
                <h2>{puppy.name}</h2>
                <ul>
                  <li><h3>Age:</h3> {puppy.age}</li>
                  <li><h3>Email:</h3> {puppy.email}</li>
                  {puppy.tricks && puppy.tricks.length > 0 ? (
                    <div>
                      <li><h3>Tricks:</h3>
                        {puppy.tricks.map(trick => (
                          <ul key={trick.id}>{trick.title}</ul>
                        ))}</li>
                    </div>) 
                    : (
                    <div><li><h3>Tricks:</h3>None yet!</li></div>
                  )}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


