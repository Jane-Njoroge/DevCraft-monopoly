import React from 'react';

const Board = () => {
  return (
    <div style={{
      position: 'absolute',
      top: '0px',
      right: '0px',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid black',
      width: '770px',
    }}>
     
      <div style={{ display: 'flex' }}>
        <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', fontSize: '10px', lineHeight: '1.2' }}>FREE PARKING</div>
        <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', backgroundColor: 'red', fontSize: '10px', lineHeight: '1.2' }}>Kentucky<br />$220</div>
        <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', fontSize: '10px', lineHeight: '1.2' }}>Chance</div>
        <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', backgroundColor: 'red', fontSize: '10px', lineHeight: '1.2' }}>Indiana<br />$220</div>
        <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', fontSize: '10px', lineHeight: '1.2' }}>Illinois<br />$240</div>
        <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', fontSize: '10px', lineHeight: '1.2' }}>B&O<br />$200</div>
        <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', backgroundColor: 'yellow', fontSize: '10px', lineHeight: '1.2' }}>Atlantic<br />$260</div>
        <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', fontSize: '10px', lineHeight: '1.2' }}>Ventnor<br />$260</div>
        <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', fontSize: '10px', lineHeight: '1.2' }}>Water<br />$150</div>
        <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', backgroundColor: 'green', fontSize: '10px', lineHeight: '1.2' }}>Marvin<br />$280</div>
      </div>

      <div style={{ display: 'flex' }}>
       
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', backgroundColor: 'orange', fontSize: '10px', lineHeight: '1.2' }}>New York<br />$200</div>
          <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', backgroundColor: 'orange', fontSize: '10px', lineHeight: '1.2' }}>Tennessee<br />$180</div>
          <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', fontSize: '10px', lineHeight: '1.2' }}>Community</div>
          <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', backgroundColor: 'orange', fontSize: '10px', lineHeight: '1.2' }}>St. James<br />$180</div>
          <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', fontSize: '10px', lineHeight: '1.2' }}>Pennsylvania<br />$200</div>
          <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', backgroundColor: 'fuchsia', fontSize: '10px', lineHeight: '1.2' }}>Virginia<br />$160</div>
          <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', fontSize: '10px', lineHeight: '1.2' }}>States<br />$140</div>
          <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', fontSize: '10px', lineHeight: '1.2' }}>Electric<br />$150</div>
          <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', backgroundColor: 'fuchsia', fontSize: '10px', lineHeight: '1.2' }}>St. Charles<br />$140</div>
          <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', fontSize: '10px', lineHeight: '1.2' }}>Just Visiting</div>
        </div>

        <div style={{ width: '570px', height: '570px' }}>
          <button>New game</button>
          <button>Roll the dice</button>
          <button>Trade with Player 2</button>
          <button>Trade with Player 3</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', fontSize: '10px', lineHeight: '1.2' }}>Go to Jail</div>
          <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', backgroundColor: 'green', fontSize: '10px', lineHeight: '1.2' }}>Pacific<br />$300</div>
          <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', backgroundColor: 'green', fontSize: '10px', lineHeight: '1.2' }}>North Carolina<br />$300</div>
          <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', fontSize: '10px', lineHeight: '1.2' }}>Community</div>
          <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', backgroundColor: 'green', fontSize: '10px', lineHeight: '1.2' }}>Pennsylvania<br />$320</div>
          <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', fontSize: '10px', lineHeight: '1.2' }}>Short Line<br />$200</div>
          <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', fontSize: '10px', lineHeight: '1.2' }}>Chance</div>
          <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', backgroundColor: 'blue', fontSize: '10px', lineHeight: '1.2' }}>Park Place<br />$350</div>
          <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', fontSize: '10px', lineHeight: '1.2' }}>Luxury Tax<br />$75</div>
          <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', backgroundColor: 'blue', fontSize: '10px', lineHeight: '1.2' }}>Boardwalk<br />$400</div>
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', fontSize: '10px', lineHeight: '1.2' }}>Go</div>
        <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', backgroundColor: 'brown', fontSize: '10px', lineHeight: '1.2' }}>Mediterranean<br />$60</div>
        <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', fontSize: '10px', lineHeight: '1.2' }}>Community</div>
        <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', backgroundColor: 'brown', fontSize: '10px', lineHeight: '1.2' }}>Baltic<br />$60</div>
        <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', fontSize: '10px', lineHeight: '1.2' }}>Income Tax<br />10% or $200</div>
        <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', fontSize: '10px', lineHeight: '1.2' }}>Reading<br />$200</div>
        <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', backgroundColor: 'lightblue', fontSize: '10px', lineHeight: '1.2' }}>Oriental<br />$100</div>
        <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', fontSize: '10px', lineHeight: '1.2' }}>Chance</div>
        <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', backgroundColor: 'lightblue', fontSize: '10px', lineHeight: '1.2' }}>Vermont<br />$100</div>
        <div style={{ width: '70px', height: '70px', border: '1px solid black', textAlign: 'center', backgroundColor: 'lightblue', fontSize: '10px', lineHeight: '1.2' }}>Connecticut<br />$120</div>
      </div>
    </div>
  );
};

export default Board;
