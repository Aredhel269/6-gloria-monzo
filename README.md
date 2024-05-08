```markdown
# Dice Game

Welcome to the Dice Game! This project was developed during Sprint 6 of the Backend Bootcamp on Node.js at ItAcademy Barcelona.

## Overview

The Dice Game is a web application that allows users to play a dice game. The game involves rolling two six-sided dice, and if the sum of their values is 7, the player wins; otherwise, they lose. Users can register with a unique name and keep track of their game rolls and success rate. If the user does not provide any name, their username will be set to "Anonymous".

## Technologies Used

- Node.js
- Express.js
- Sequelize (ORM)
- MySQL (Database)
- TypeScript
- EsLint

## Setup

1. Clone the repository:

```
git clone https://github.com/Aredhel269/Sprint6DiceGame.git
```

2. Navigate to the project directory:

```
cd Sprint6DiceGame
```

3. Install dependencies:

```
npm install
```

4. Start the Docker containers for the MySQL database and phpMyAdmin:

```
docker-compose up -d
```

5. Run Sequelize migrations to create the necessary tables:

```
sequelize db:migrate
```

6. Starting the Server

To start the server in a production environment, run:

```
npm run start
```

This command will start the server using the compiled file `dist/server.js`.

For development and testing purposes with automatic restarts upon changes in the source code, use:

```
npm run dev
```

This command will start the server in a development environment using `nodemon`, which automatically restarts the server when changes are made to files in the `src` directory.

Make sure to install the dependencies before starting the server by running `npm install`.

## Endpoints

- `POST /players`: Create a player.
- `PATCH /players/{id}`: Modify a player's name.
- `GET /players`: Get a list of all players with their success rates.
- `POST /games/{id}`: Make a dice roll for a specific player.
- `DELETE /games/{id}`: Delete a player's game history.
- `GET /games/{id}`: Get the game history for a player.
- `GET /ranking`: Get a ranking of players ordered by success rates and the average success rate of all players.
- `GET /ranking/loser`: Get the player with the worst success rate.
- `GET /ranking/winner`: Get the player with the best success rate.

### Accessing phpMyAdmin

You can access phpMyAdmin through the browser by visiting [http://localhost:8090](http://localhost:8090). Use "root" as the username and "1234" as the password.

## Persistence

The project uses MySQL as the database with Sequelize as the ORM.

## Design

The project follows the main design patterns.

## Documentation

- Diagram of the database structure.
- Docker instances for the databases.
- Documentation of endpoints and examples using ThunderClient.

## Contributing

Contributions to the Dice Game Project are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`
3. Make your changes and commit them: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request.

## License

This project is licensed under the MIT License.
```