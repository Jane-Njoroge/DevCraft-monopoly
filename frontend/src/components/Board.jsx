import React from "react";

const Board = () => {
  return (
    <div className="monopoly-board">
      {/* Top Row */}
      <div className="row">
        <div className="corner go">GO 🚗</div>
        <div className="property brown">Mediterranean Ave<br />$60</div>
        <div className="community-chest">🎁<br />Community Chest</div>
        <div className="property brown">Baltic Ave<br />$60</div>
        <div className="tax">💰<br />Income Tax</div>
        <div className="railroad">🚂<br />Reading RR</div>
        <div className="property light-blue">Oriental Ave<br />$100</div>
        <div className="chance">❓<br />Chance</div>
        <div className="property light-blue">Vermont Ave<br />$100</div>
        <div className="property light-blue">Connecticut Ave<br />$120</div>
        <div className="corner jail">🚔<br />Jail</div>
      </div>

      {/* Middle Section */}
      <div className="middle">
        <div className="column">
          <div className="property purple">St. Charles Pl<br />$140</div>
          <div className="utility">💡<br />Electric Co.</div>
          <div className="property purple">States Ave<br />$140</div>
          <div className="property purple">Virginia Ave<br />$160</div>
          <div className="railroad">🚂<br />Pennsylvania RR</div>
          <div className="property orange">St. James Pl<br />$180</div>
          <div className="community-chest">🎁<br />Community Chest</div>
          <div className="property orange">Tennessee Ave<br />$180</div>
          <div className="property orange">New York Ave<br />$200</div>
        </div>

        {/* Center Area */}
        <div className="center">
          <div className="card chance-card">❓ Chance</div>
          <div className="card community-card">🎁 Community Chest</div>
          <button className="btn roll">🎲 Roll Dice</button>
          <button className="btn start">🚀 Start Game</button>
        </div>

        <div className="column">
          <div className="property red">Kentucky Ave<br />$220</div>
          <div className="chance">❓<br />Chance</div>
          <div className="property red">Indiana Ave<br />$220</div>
          <div className="property red">Illinois Ave<br />$240</div>
          <div className="railroad">🚂<br />B&O RR</div>
          <div className="property yellow">Atlantic Ave<br />$260</div>
          <div className="property yellow">Ventnor Ave<br />$260</div>
          <div className="utility">💦<br />Water Works</div>
          <div className="property yellow">Marvin Gardens<br />$280</div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="row">
        <div className="corner free-parking">🅿️<br />Free Parking</div>
        <div className="property green">Pacific Ave<br />$300</div>
        <div className="property green">North Carolina Ave<br />$300</div>
        <div className="community-chest">🎁<br />Community Chest</div>
        <div className="property green">Pennsylvania Ave<br />$320</div>
        <div className="railroad">🚂<br />Short Line RR</div>
        <div className="chance">❓<br />Chance</div>
        <div className="property blue">Park Place<br />$350</div>
        <div className="luxury-tax">💎<br />Luxury Tax</div>
        <div className="property blue">Boardwalk<br />$400</div>
        <div className="corner go-to-jail">🚓<br />Go to Jail</div>
      </div>

      {/* CSS Styling Inside JSX */}
      <style>
        {`
          .monopoly-board {
            display: grid;
            grid-template-rows: 120px 1fr 120px;
            grid-template-columns: 120px 1fr 120px;
            width: 720px;
            height: 720px;
            background: limegreen;
            border: 15px solid black;
            margin: auto;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
          }

          .row {
            display: grid;
            grid-template-columns: repeat(11, 1fr);
            grid-column: 1 / 4;
          }

          .middle {
            display: grid;
            grid-template-columns: 120px 1fr 120px;
            grid-column: 1 / 4;
            grid-row: 2 / 3;
          }

          .column {
            display: grid;
            grid-template-rows: repeat(9, 1fr);
          }

          .corner {
            width: 100%;
            height: 100%;
            background-color: white;
            border: 3px solid black;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-weight: bold;
          }

          .property, .community-chest, .tax, .railroad, .chance, .utility, .luxury-tax {
            width: 100%;
            height: 100%;
            border: 3px solid black;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-size: 12px;
            transition: transform 0.2s ease-in-out;
          }

          .property.brown { background: #8B4513; color: white; }
          .property.light-blue { background: #ADD8E6; color: black; }
          .property.purple { background: #DDA0DD; color: white; }
          .property.orange { background: #FFA500; color: white; }
          .property.red { background: #FF4500; color: white; }
          .property.yellow { background: #FFD700; color: black; }
          .property.green { background: #228B22; color: white; }
          .property.blue { background: #1E90FF; color: white; }

          .property:hover {
            transform: scale(1.1);
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
          }

          .chance-card, .community-card {
            width: 140px;
            height: 70px;
            background: white;
            border-radius: 10px;
            box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            transition: transform 0.2s ease;
            margin: 10px;
          }

          .chance-card:hover, .community-card:hover {
            transform: rotate(5deg);
          }

          .btn {
            background-color: #FF4500;
            color: white;
            padding: 12px;
            border: none;
            cursor: pointer;
            font-weight: bold;
            transition: 0.3s;
            border-radius: 5px;
            margin: 10px;
          }

          .btn:hover {
            background-color: #FF6347;
          }

          .center{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
};

export default Board;