import React, {useState} from "react";

function App() {
const [fullName, setFullName] = useState({fName:"", lName: ""});
const [submitName, setSubmitName]= useState("");
//console.log(fullName);





function handleChange(event){
  const {name, value} =event.target;
  //console.log(value);
  //console.log(name.fName);
   
setFullName(preName => { if(name==="fName"){
  return {...preName, fName: value}//. preName learned from https://www.youtube.com/watch?v=O6P86uwfdR0
} else if(name==="lName") {
return{...preName, lName: value}
}
}
);
  
  
  
//console.log(inputValue);
  
}
//console.log(fullName);

function newSubmit(event){
  const newName = fullName;
setSubmitName(newName)
event.preventDefault();
}







  return (
    <div className="container">
      <h1>Hello {submitName.fName} {submitName.lName} </h1>
      <form>
        <input onChange={handleChange}  name="fName" placeholder="First Name" />
        <input onChange={handleChange} name="lName" placeholder="Last Name" />
        <button type="submit" onClick={newSubmit}>Submit</button>
       </form>
    </div>
  );
}

export default App;
