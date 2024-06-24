
import { useState } from "react"
import Alert  from "../../components/Alert/Alert"
import './about.scss'
import LoginModal from "../../components/loginModal/loginModal";

const About = () => {
  const [counter, setCounter] = useState(0);
  const [bg,setBg] = useState("red");
  const colorgroup = [
    'skyblue','red','green','tomato','yellow','black','purple','pink','#3333','blue','gold'
  ]


  const incrise = ()=> {

    setCounter((prevData) => counter >= 11 ? 0 : prevData + 1 )
   setBg(colorgroup[counter]);

  }

  const decrise = () => {

    setCounter ((prevData) => counter <= 0? 11 : prevData - 1)
  }

  const reset = () => {
    setCounter(0)
  }
  
  const [loginModelShow, setloginModel] = useState(false);

  //alert state
  const [showAlert, setshowAlert ] = useState(false);
  


  return (
    <>
    <h1>About us page</h1>
    <br /><br />
    {loginModelShow && <LoginModal hide = {setloginModel}/>}

    <button onClick={()=>setloginModel(true)}>model</button>


    
    <br /><br />
     <button className="btn btn-primary m-3" onClick={(()=> setshowAlert(true))}> alert</button>
    <br /> <br />

    <div className="container my-5">
      <div className="row">
        <div className="col-md-12">
          {
            showAlert && <Alert type="warning" hide={setshowAlert}> what are you doing now </Alert>
          }
          <Alert type="info"> Are you sure??</Alert>
          <Alert type="success"/>
        </div>
      </div>


      <div className="counter justify-content-center" style={{backgroundColor:bg}}>

        
        <div className="counter-box">
            <h1 style={{color: counter === 6 && "white"}}>{counter}</h1> 
        </div>

        <div className="counter-control">
          <button className="btn btn-primary m-1" onClick={incrise} >++</button>
          <button className="btn btn-info m-1" onClick={decrise}>--</button>
          <button className="btn btn-danger m-1" onClick={reset}>reset</button>
        </div>
        <div className="color">
              <button onClick={() => setBg("green")}>green</button>
              <button onClick={() => setBg("red")}>red</button>
              <button onClick={() => setBg("yellow")}>yellow</button>
              <button onClick={() => setBg("purple")}>purple</button>
              <button onClick={() => setBg("blue")}>blue</button>
        </div>
      </div>

 
    </div>
   

    </>
  )
}

export default About 