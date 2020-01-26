import React from 'react';
import NavbarComponent from './components/navbar/navbar';
import DashboardComponent from './components/dashboard/dashboard';
import ConfirmationModalComponent from './components/modals/confirmationModal/confirmationModal';
import { Switch , Route } from "react-router-dom";

const App = () => {

  const places = ['Austin', 'College Station', 'Dallas', 'Houston', 'San Antonio'];
  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState(''); 
  const [ships, setShips] = React.useState('');
  const [displayedShips, setDisplayedShips] = React.useState([]);
  const [spawnModal, toggleSpawnModal] = React.useState(false);
 
  const filterShips = (place_from, place_to) => {
    let filteredShips = []
    for(let i in ships){
      const ship =ships[i];
      if(from != '' && ship.origin.city === place_from){
        if(to != '' && ship.destination.city === place_to){
          filteredShips.push(ship);
        }
      }
    }
    setDisplayedShips(filteredShips);
  };

  const handleFrom = (place) => {
    setFrom(place);
    filterShips(place, to);
  }
  
  const handleTo = (place) => {
    setTo(place);
    filterShips(from, place);
  }

  const handleToggleModal = (val) => {
    toggleSpawnModal(!val);
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

  const PendingComponent = () => {
    return (
      <div>
        TODO!!
      </div>
    )
  }

  return (
    <div>
      <ConfirmationModalComponent
        handleToggleModal={handleToggleModal}
      />
      <NavbarComponent />
      <Switch>
        <Route
        exact
              path="/"
              render={props => (
                <DashboardComponent 
                places={places}
                from={from}
                handleFrom={handleFrom}
                to={to}
                handleTo={handleTo}
                displayedShips={displayedShips}
                />
                )}
        />
        <Route
              path="/pending"
              render={props => (
                <PendingComponent
                />
                )}
        />
        <Route
              path="/approvals"
              render={props => (
                <PendingComponent
                />
                )}
        />

              </Switch>
      
    </div>
  );
};

export default App;