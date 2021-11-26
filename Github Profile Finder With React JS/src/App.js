import './App.css';
import React, {useState, useEffect} from 'react';
import GitPro from './Gitpro';
export default function HooksComponent() {
  
  const [link , setLink] = useState([]);//For String url
  const [userName , setUserName] = useState("");//For Input
  const [data , setdata]= useState([]); //Fetching Data
  const [display, setDisplay]=useState(false); 

  function getDetails(){
    setLink(userName);
    setUserName();
  }
  useEffect(() => {
      return new Promise(()=>{
      fetch(link)
      .then(response => response.json())
      .then(getdata => setdata(getdata))
      .catch(err=>console.log(err))
      }),[]})
  
function Display(){
  if(display==true){
    return(<GitPro data={data}/>)
  }
}
  
  return (
    <>
      <center>

        <div className="text"><b><u>Github~Profile</u></b></div>
        <p>
        <input type="text"placeholder="@profile_name"onChangeCapture={(e)=>{setUserName("https://api.github.com/users/"+e?.target.value);}} />
        <span><button onClick={()=>{getDetails();setDisplay(true)}}>Search</button></span>
        </p>
        <p>
          {Display()}
        {/* <GitPro data={data}/> */}
        </p>
      </center>
    </>
  )
}

