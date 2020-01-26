import React from 'react';
import NavbarComponent from './components/navbar/navbar';
import DashboardComponent from './components/dashboard/dashboard';

const App = () => {

  const places = ['Austin', 'Houston', 'College Station'];
  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState(''); 
  const [ships, setShips] = React.useState('');
  const [displayedShips, setDisplayedShips] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const shipsResponse = await fetch("ships");
      const shipsContents = await shipsResponse.json();
      setShips(shipsContents.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <NavbarComponent />
      <DashboardComponent 
        places={places}
        from={from}
        setFrom={setFrom}
        to={to}
        setTo={setTo}
        />
    </div>
  );
};

export default App;