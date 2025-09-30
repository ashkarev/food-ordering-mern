import React, { useContext } from 'react'
import './verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';


const verify = () => {


    const [searchparams,setSearchParams]=useSearchParams();
    const success =searchparams.get("success")
    const orderId =searchparams.get("orderId")
  const {url}=useContext(StoreContext);
  const navigate=useNavigate();


  const verifyPayment =async ()=>{
    const response = await axios.post(url+"/api/order/verify",{success,orderId});
    if (response.data.success) {
     navigate("/myorders");
        
    }
    else{
        navigate("/")
    }
  }

  return (
    <div className='verify'>
        <div className="spinner"></div>
      
    </div>
  )
}

export default verify
