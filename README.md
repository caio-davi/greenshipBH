# Greenship

GreenShip functions as an application for ride-sharing freight of raw materials between suppliers and customers. The application is supposed to encourage companies to combine shipments if there is empty space on one of their trucks.
This project was created during [TAMUHACK2020](https://tamuhack.com/).

### TAMUHACK2020:

- 3rd Best Project Overall. 
- Winner of the Baker Hughes's Taking Energy Forward Challenge.

## Getting Started

The project have 3 major components:

- The **MongoDB Server** Database
- The **Python Flask** Backend
- The **React.js** Frontend

You have to have all of them working to properly run the app. The two first ones are independent docker containers, but they are handled by the same composer `docker-compose.yml`.

To run the docker containers:

```bash
docker-compose docker-compose.yml up
```

Also, you will have to populate the database. There is a script in python to create some fake data, just execute it:

```bash
python seedData.py
```

and it will create a number of JSON objects in `data.json`. You can use Mongo Compass to import it into your database.

At this point you have the database and the backend already running. Now you just need to go to the `app` folder and start the frontend app:

```
cd frontend/
yarn
yarn start
```

Good luck! If you need any help, let us know!
