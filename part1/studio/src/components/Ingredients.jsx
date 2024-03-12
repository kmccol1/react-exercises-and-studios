import styles from './Ingredients.module.css';
export default
function RecipeIngredients()
{
     let ingredients = ['5 large Roma tomatoes, halved lengthwise', '¼ large white onion', '1 jalapeno pepper, stem removed','⅓ cup chopped fresh cilantro', '1 lime, juiced'];
     return (<div>
   <h3>Recipe Ingredients</h3>
   <ul className = {styles.ingredientList}>
      <li>{ingredients[0]}</li>
      <li>{ingredients[1]}</li>
      <li>{ingredients[2]}</li>
      <li>{ingredients[3]}</li>
      <li>{ingredients[4]}</li>
   </ul>
</div>);
}
