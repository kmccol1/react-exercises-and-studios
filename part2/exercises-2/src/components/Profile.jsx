import './styles.css';
import Button from './Button';
import oceans from './oceans.json';


function Profile()
{

   const listItem = oceans.map(ocean =>
                               <div key= {ocean.id} className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>
                                   <h1> {ocean.name} </h1>
                                    <h5>Fun Facts:</h5>
                                    <ol>
                                       <li>{ocean.fact1}</li>
                                       <li>{ocean.fact2}</li>
                                       <li>{ocean.fact3}</li>
                                    </ol>
                                   <img src={ocean.image} alt={ocean.name}
                                   className = "img"/>
                                   <Button />
                               </div>
   );





   return(
         <ul>
           {listItem}
         </ul>
   );
}

export default Profile;
