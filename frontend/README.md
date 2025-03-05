# DEVCRAFT MONOPOLY- FRONTEND
## CONTRIBUTORS
1. Titus Kipchirchir
2. Jane Njoroge
3. Joy Wahome
4. Ian Kigwa

## OVERVIEW
**Monopoly** is a real estate trading board game where players buy, sell, and trade properties, aiming to bankrupt their opponents. The game is typically played by 2-8 players and involves rolling dice, purchasing properties, and dealing with various game events, such as paying rent, drawing Chance or Community Chest cards, or landing on "Go to Jail."

- This is the frontend for the **DevCraft Monopoly** game, a web-based implementation of the classic board game **Monopoly**. The frontend allows users to play the game in a browser, interact with various game components, and manage game state.

## KEY FEATURES
1. Game Setup: Start new games, join existing ones, choose tokens, and configure rules.
2. Player Interaction: Dice rolls, property management, trades, and player actions.
3. Game State Management: Real-time updates, player profiles, bankruptcy, and game synchronization.
4. Multiplayer: Support for multiple players in real-time with a lobby system and chat functionality.
5. Property Management: Buying, trading, and building houses/hotels on properties.
6. Jail & Special Events: Jail mechanics, Chance and Community Chest cards, and tax payments.
7. Winning Conditions: Bankruptcy, game end, and declaring the winner.

## KEY ACTIONS
- Roll Dice: Move around the board.
- Buy Property: When you land on an unowned property, you can buy it.
- Pay Rent: When you land on an owned property, you pay rent.
- Build Houses/Hotels: Once you own a full color set, you can build houses to increase rent.
- Chance/Community Chest Cards: Draw cards that affect your game, for better or worse.
- Bankruptcy: You lose if you can’t pay debts or afford to stay in the game.


## TABLE OF CONTENTS

- Description
- Technologies Used
- Setup
- Usage
- How to contribute
- Contact
- License

## DESCRIPTION

The frontend of the Monopoly game provides a user interface for players to interact with the game. The game features include:

- **Game Setup**: Players can start a new game or join an existing one.
- **Gameplay**: Players can roll dice, buy properties, pay rent, and interact with various game features.
- **Game State**: Real-time game updates and player actions are reflected on the board.
  
This frontend communicates with the backend API to synchronize game state across players.

## TECHNOLOGIES USED

- **React.js**: A JavaScript library for building user interfaces.
- **CSS**: Styling for the game board and user interface.
- **React Router**: For routing between pages and components.
- **Axios**: For making API requests to the backend.

## SETUP

### PREREQUISITES

Make sure you have the following installed:

- Node.js(Recommended version: LTS)
- npm (Usually comes with Node.js)
- Git(To clone the repository)

### INSTALLATION

1. **Clone the repository**: 
   git clone https://github.com/Jane-Njoroge/DevCraft-monopoly-frontend.git
   cd DevCraft-monopoly-frontend
2. **Install the dependencies**:
    npm install
3. **Run the development server**:
     npm start

### USAGE
- New Game: Start a new monopoly game.
- Join Game: Join an existing game by entering a game link.
- Player actions: Roll dice, buy properties, manage money, and more!

### HOW TO CONTRIBUTE
- **Project Name**: If your project is called something different than "DevCraft Monopoly," change the title and sections accordingly.
- **Dependencies**: If your frontend uses other technologies or tools not listed, include them in the **Technologies Used** section.
- **API URL**: If you need to specify where the backend is hosted, you could add a note under **Usage** or **Setup**.

## CONTACT
- Titus Kipchirchir
- Jane Njoroge
- Joy Wahome
- Ian Kigwa

### License
MIT License Copyright (c) 2024 Titus Kipchirchir,Jane Njoroge, Joy Wahome, Ian Kigwa