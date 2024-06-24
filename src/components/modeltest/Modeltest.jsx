
import './Modeltest.scss'
import bcs_icon from "../../assets/images/modeltest/bcs.png"
import { ModeltestData } from '../../faker/Modeltest'

const Modeltest = () => {
  return (
   <>
   <div className="modeltest">
    <div className="container">
        <h1>Our Online model test Porgram</h1>
        <div className="divider"></div>

        <div className="model_item">

            {
                ModeltestData.map((item, index) =>{
                    return(
                        <div className="card shadow" key={index}>
                        <div className="card-body">
                            <img src={bcs_icon} alt="" />
                            <h3>{item.title}</h3>
                            <p>Number of Model test : <span>{item.test}</span></p>
                            <h5>Price : {item.price}</h5>
                            <a href="" className='btn btn-info'> Enrole Now </a>
                        </div>
                    </div>
                    )
                })
            }

                
           

        </div>


    </div>
   </div>
   </>
  )
}

export default Modeltest