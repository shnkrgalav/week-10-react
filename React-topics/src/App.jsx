import { createContext, useContext, useState } from 'react'
 

const BulbContext = createContext();

function App() {
  const[bulbOn, SetBulbOn] = useState(true);
  return <div> 
  <BulbContext.Provider value={{
    bulbOn: bulbOn,
    SetBulbOn: SetBulbOn,
}}>
    <LightBulb />
</BulbContext.Provider>

</div>
 
   

   function LightBulb (){
     
  return  <div>
    <BulbState />
    <ToggleBulbState />
  </div>
   }

   function BulbState (){
    const {bulbOn} = useContext(BulbContext);

 return <div>
     { bulbOn ? "Bulb On" : "Bulb Off"}
    </div>

   }

   function ToggleBulbState(){
    const {bulbOn} = useContext(BulbContext);
    const {SetBulbOn} = useContext(BulbContext);
     function toggle(){
      SetBulbOn(x=>!x);
     }

    return <div>
      <button onClick={toggle}>Toggle the Bulb</button>
    </div>

   }

  
}

export default App
