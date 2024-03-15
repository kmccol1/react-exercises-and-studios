let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props)
{
    let result = null;
    function giveRating(props)
    {
        props.rating >= 1 && props.rating <= 5 ? result = {<h3>{starts[props.rating - 1]}} : '';
        return result;
    }
    return <giveRating/>;
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
