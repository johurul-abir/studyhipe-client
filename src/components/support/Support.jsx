
import { SupportData } from '../../faker/support.js';
import './support.scss';
import { FaHandshake } from "react-icons/fa";


const Support = () => {
  return (
<>
 <div className="support">
    <div className="container">
        <div className="row">
            <h1>Our best Supports</h1>
            <div className="support_item">


                {
                    SupportData.map((item, index)=> {
                        return(

                            <div className="card" key={index}>
                                <div className="card-body support_con">
                                    <i> <FaHandshake/></i>
                                    <div className="content">
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            
            </div>
        </div>
    </div>
 </div>
</>
  )
}

export default Support