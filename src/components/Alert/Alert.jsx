
import './Alert.scss'

const Alert = ({hide, type, children }) => {

  //const [showAlert, setshowAlert] = useState(true);

  return (
    <>
    <div className="container">
        <div className="row justify-content-center">
           
              {/* alert-part */}
                <p className={`alert alert-${type}`}>
                    {children} <button className="btn-close" onClick={()=>hide(false)} ></button>
                </p>               
        </div>
    </div>
    </>
  )
}

export default Alert