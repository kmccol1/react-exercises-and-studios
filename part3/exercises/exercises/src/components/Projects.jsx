import data from './../data.json';
import { useState } from 'react';

export default function MyProjects () {
    const [index, setIndex] = useState(0);

    let item = data.planets[index];

   return(<><button onClick={() => {handleClick}}>Next</button><ol><li>{item.planet}</li><li>{item.distance}</li><li>{item.photoUrl}</li><li>{item.alt}</li></ol></>);
}

function handleClick() {
   if (index < data.projects.length-1)
   {
      setIndex(index + 1);
   }
   else
   {
      setIndex(0);
   }
}
