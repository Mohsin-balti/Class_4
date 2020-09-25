import React,{useState} from 'react';
import "./Room.css"

function Room() {
    let [islit,setlit] =useState(false);
     let [age,setage]=useState(23)
   
     function INA(){
        console.log("Button clicked");
       setage(++age);
    }
  return (
    <div>
          This is Room Componat;Lit={islit ?"LIT":"Dark" } 
          <br/>
          Age={age} 
          <br/>
         < button onClick ={INA} className="button"> incarese age </button>
          <br/>
          <button onClick ={()=>setlit(!islit)} className="button"> Toggle Light </button>
        
    </div>
  );
}

export default Room;
