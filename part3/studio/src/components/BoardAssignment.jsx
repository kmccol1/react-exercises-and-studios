import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [{label:"diy", value:"diy"}, {label:"fresh", value:"fresh"}, {label:"homemade", value:"homemade"}];
   let [boardName, setName] = useState("no boards yet!");

   const handleChange = (event) => {
      boardName = event.target.value;
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
      {boards.map(board => (<option key={board.label} value={board.value}>{board.label} </option>))}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
