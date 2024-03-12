import styles from './Description.module.css';
import React from 'react';

class RecipeDescription extends React.Component
{
   render()
   {
      return (<div>
   <div>
      <h1>Authentic Fire-Roasted Tex-Mex Salsa</h1>
      <p> Feel free to use 8 small Roma tomatoes.

          For a spicier salsa, feel free to add more jalapenos. </p>
   </div>
   <RecipeAuthor />
</div>);
   }
}

function RecipeAuthor()
{
    let authorLink = "https://www.allrecipes.com/recipe/274556/authentic-fire-roasted-tex-mex-salsa/";
    let authorPhoto = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F743983.jpg&q=60&c=sc&poi=auto&orient=true&h=512";
    let authorName = "severlysnaped";
return (
   <div className = {styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
      <div>
         <h3>{authorName}</h3>
         <a href={authorLink}>allrecipes</a>
      </div>
   </div>
);

}
export default RecipeDescription;
