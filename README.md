# Dice Game Project

Welcome to the Dice Game Project! This project was developed during Sprint 6 of the Backend Bootcamp on Node.js at ItAcademy Barcelona.

## Overview

The Dice Game Project is a web application that allows users to play a dice game. The game involves rolling two six-sided dice, and if the sum of their values is 7, the player wins; otherwise, they lose. Users can register with a unique name and keep track of their game rolls and success rate.

## Technologies Used

- Node.js
- Express.js
- Sequelize (ORM)
- MySQL (Database)
- TypeScript
- Jest (Testing)

## Features

- User registration: Users can register with a unique name to play the game.
- Game rolls: Registered users can roll the dice and see the outcome of their rolls.
- Success rate tracking: The application keeps track of each user's success rate in the game.
- Leaderboard: Users can view a leaderboard displaying the success rates of all players in the system.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/dice-game-project.git`
2. Navigate to the project directory: `cd dice-game-project`
3. Install dependencies: `npm install`
4. Set up the MySQL database and configure the connection in `config/database.ts`
5. Run the database migrations: `npm run migrate`
6. Start the server: `npm start`

## Usage

- Access the application in your web browser at `http://localhost:3000`
- Register as a new player and start playing the dice game.
- View your game rolls and success rate in your player profile.
- Check the leaderboard to see how you rank compared to other players.

## Contributing

Contributions to the Dice Game Project are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`
3. Make your changes and commit them: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.