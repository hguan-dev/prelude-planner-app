### To preview and run the project on your device:
1. Open project folder in <u>Visual Studio Code</u>
2. Run  `npm install`  in the terminal
3. Run  `npm start`  in the terminal
4. Open Expo Go!

### Run both backend and frontend
1. Run `npm start` in the server directory
2. Open another terminal window, navigate to the server directory, and run `npm run tunnel` to get a public url for the server
3. Open yet another terminal window, navigate to the app directory, and then run `npm start` to run the app

## Setup database
1. Create a database by running `createdb prelude_planner`
2. Run the sql scripts `setup.sql` and `data.sql` with `psql -d prelude_planner -a -f "absolute path to script here"`
3. Make sure you have a .env file with the same keys as in `.env.example`
