import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.allrecipes.com/recipe/241920/easy-homemade-pasta-dough/";
   let authorPhoto = "https://www.allrecipes.com/thmb/GJ4KHUdyFY4-tA6F6IVnZIFCLbg=/160x90/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/241920-easy-homemade-pasta-dough-ddmfs-4x3-c7172fe3104e43868f928c077d3a3397.jpg";
   let authorName = "pho1962";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a>
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Two cups of flour", "Plenty of eggs", "Two Tbps of olive oil", "One tsp of salt", "A few mL of water for texture"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div>
         <div>
            <h1></h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F8fb4b54a3af37d13af913c973022674c%2F1684551509828C8256876-FBA1-4C5D-862B-BFAD6A40BC02.jpeg&q=60&c=sc&poi=auto&orient=true&h=512" alt="Pasta Image" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
