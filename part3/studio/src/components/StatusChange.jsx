import { useState } from 'react';

export default function StatusChange () {

   let result;

   let [notes, recipeStatus] = useState("", false);

   const handleChange = (event) => {
      notes = event.target.value;
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      recipeStatus = true;
   }

   recipeStatus == true? result= (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>

         <p>My Recipe Notes aren't here!</p>

         <p>I have not tried this recipe!</p>
      </div>
   ):result= (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>

         <p>My Recipe Notes aren't here!</p>

         <p>I have not tried this recipe!</p>
      </div>
   );

   return result;
}
