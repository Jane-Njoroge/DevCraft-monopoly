import React from "react";

const Board = () => {
  return (
    <div className="monopoly-board">
      {/* Top Row */}
      <div className="row">
        <div className="corner go">GO </div>
        <div className="property brown">Mediterranean Ave $60</div>
        <div className="community-chest">Community Chest</div>
        <div className="property brown">Baltic Ave $60</div>
        <div className="tax">Income Tax</div>
        <div className="railroad">Reading RR</div>
        <div className="property light-blue">Oriental Ave$100</div>
        <div className="chance"><br />Chance</div>
        <div className="property light-blue">Vermont Ave $100</div>
        <div className="property light-blue">Connecticut Ave $120</div>
        <div className="corner jail">Jail</div>
      </div>

      {/* Middle Section */}
      <div className="middle">
        <div className="column">
          <div className="property purple">St. Charles Pl $140</div>
          <div className="utility">Electric Co.</div>
          <div className="property purple">States Ave $140</div>
          <div className="property purple">Virginia Ave $160</div>
          <div className="railroad">Pennsylvania RR</div>
          <div className="property orange">St. James Pl $180</div>
          <div className="community-chest">Community Chest</div>
          <div className="property orange">Tennessee Ave $180</div>
          <div className="property orange">New York Ave $200</div>
        </div>

        {/* Center Area */}
        <div className="center">
          <div className="card chance-card"> Chance</div>
          <div className="card community-card">Community Chest</div>
          <button className="btn roll"> Roll Dice</button>
          <button className="btn start"> Start Game</button>
        </div>

        <div className="column">
          <div className="property red">Kentucky Ave $220</div>
          <div className="chance">Chance</div>
          <div className="property red">Indiana Ave $220</div>
          <div className="property red">Illinois Ave $240</div>
          <div className="railroad">B&O RR</div>
          <div className="property yellow">Atlantic Ave $260</div>
          <div className="property yellow">Ventnor Ave $260</div>
          <div className="utility">Water Works</div>
          <div className="property yellow">Marvin Gardens $280</div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="row">
        <div className="corner free-parking">Free Parking</div>
        <div className="property green">Pacific Ave $300</div>
        <div className="property green">North Carolina Ave $300</div>
        <div className="community-chest">Community Chest</div>
        <div className="property green">Pennsylvania Ave $320</div>
        <div className="railroad">Short Line RR</div>
        <div className="chance">Chance</div>
        <div className="property blue">Park Place $350</div>
        <div className="luxury-tax">Luxury Tax</div>
        <div className="property blue">Boardwalk $400</div>
        <div className="corner go-to-jail">Go to Jail</div>
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