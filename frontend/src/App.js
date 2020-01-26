import React from 'react';
import NavbarComponent from './components/navbar/navbar';
import DashboardComponent from './components/dashboard/dashboard';

const App = () => {

  const places = ['Austin', 'Houston', 'College Station'];
  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState(''); 
  const [ships, setShips] = React.useState('');
  const [displayedShips, setDisplayedShips] = React.useState([]);

  const filterShips = () =>{
    let filteredShips = []
    for(let i in ships){
      const ship =ships[i];
      if(from != '' && ship.origin.city === from){
        filteredShips.push(ship);
      }
      if(to != '' && ship.destination.city === to){
        filteredShips.push(ship);
      }
    }
    setDisplayedShips(filteredShips);
  };

  const handleFrom = (place) =>{
    filterShips();
    setFrom(place);
  }
  
  const handleTo = (place) =>{
    filterShips();
    setTo(place);
  }

  React.useEffect(() => {
    const fetchData = async () => {
      const shipsResponse = await fetch("ships");
      const shipsContents = await shipsResponse.json();
      setDisplayedShips(shipsContents.data);
      setShips(shipsContents.data);
    };
    fetchData();
  }, []);

  console.log(displayedShips)

  return (
    <div>
      <NavbarComponent />
      <DashboardComponent 
        places={places}
        from={from}
        handleFrom={handleFrom}
        to={to}
        handleTo={handleTo}
        displayedShips={displayedShips}
        />
    </div>
  );
};

export default App;