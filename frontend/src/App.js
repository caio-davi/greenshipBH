import React from 'react';
import NavbarComponent from './components/navbar/navbar';
import DashboardComponent from './components/dashboard/dashboard';
import ConfirmationModalComponent from './components/modals/confirmationModal/confirmationModal';
import { Switch , Route } from "react-router-dom";
import PendingComponent from './components/pending/pending';
import ApprovalsComponent from './components/approvals/approvals';

const App = () => {

  const truckTypes = ['Lowboy Trailer', 'Refrigerated Trailers', 'Flatbed Truck']
  const places = ['Austin', 'College Station', 'Dallas', 'Houston', 'San Antonio'];
  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState(''); 
  const [ships, setShips] = React.useState('');
  const [displayedShips, setDisplayedShips] = React.useState([]);
  const [spawnModal, setSpawnModal] = React.useState(false);
  const [selectedShip, setSelectedShip] = React.useState(false); 

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

  const toggleModal = () => {
    setSpawnModal(!spawnModal);
  }

  console.log(selectedShip);  
  const handleSelectedShip = (id) => {
    setSelectedShip(getShipById(id));
    toggleModal();
  }

  const getShipById = (id) => {
    for(let i in ships){
      if(ships[i].shipNumber === id){
        return ships[i];
      }
    }
  }

  const goToPending = (id) => {
    toggleModal();
    for(let i in ships){
      if(ships[i].shipNumber === id){
        return ships[i].stage = 1;
      }
    }
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


  return (
    <div>
      <ConfirmationModalComponent
        spawnModal={spawnModal}
        toggleModal={toggleModal}
        ship={selectedShip}
        goToPending={goToPending}
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
            handleSelectedShip={handleSelectedShip}
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
            <ApprovalsComponent />
            )}
        />
      </Switch>
      
    </div>
  );
};

export default App;