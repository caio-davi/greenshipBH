import React from 'react';
import NavbarComponent from './components/navbar/navbar';
import DashboardComponent from './components/dashboard/dashboard';
import ConfirmationModalComponent from './components/modals/confirmationModal/confirmationModal';
import PendingComponent from './components/pending/pending';
import ApprovalsComponent from './components/approvals/approvals';

const App = () => {

  const places = ['Austin', 'College Station', 'Dallas', 'Houston', 'San Antonio'];
  const [from, setFrom] = React.useState('College Station');
  const [to, setTo] = React.useState('Dallas'); 
  const [ships, setShips] = React.useState('');
  const [displayedShips, setDisplayedShips] = React.useState([]);
  const [spawnModal, toggleSpawnModal] = React.useState(false);

  const filterShips = () => {
    let filteredShips = []
    for(let i in ships){
      const ship = ships[i];
      if(from !== '' && ship.origin.city === from){
        if(to !== '' && ship.destination.city === to){
          filteredShips.push(ship);
        }
      }
    }
    setDisplayedShips(filteredShips);
  };

  const handleFrom = (place) => {
    setFrom(place);
    filterShips();
  }
  
  const handleTo = (place) => {
    setTo(place);
    filterShips();
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

  return (
    <div>
      <ConfirmationModalComponent
        handleToggleModal={handleToggleModal}
      />
      <NavbarComponent />
      {/* <DashboardComponent 
        places={places}
        from={from}
        handleFrom={handleFrom}
        to={to}
        handleTo={handleTo}
        displayedShips={displayedShips}
        />
    </div> */}
      {/* <PendingComponent /> */}
      <ApprovalsComponent />
    </div>
  );
};

export default App;