import React from "react";
import { useNavigate } from 'react-router-dom';
 function Plan(){

  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/next");
  };

    return(

   
     
      <div className="container text-center" >
        <p style={{fontSize:'25px'}}>
          <b>
        Choose the Plan </b>
        </p>
  <div className="row align-items-start">
    <div className="col">
         
    <div style={{ color: 'red', marginTop: '10px', border: '2px solid black', borderRadius: '10px' }}>
  <div className="card-body">
    <h5 className="card-title" style={{ border: '1px solid black', padding: '20px', borderRadius: '5px' }}>Free Trail</h5>
   
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">  Price : Free
   </li>
    <li className="list-group-item">Video and sound quality :
    Normal</li>
    <li className="list-group-item">Resolution : 360p</li>

    <li className="list-group-item">Supported devices :
    Mobile phone</li>
  </ul>
  <div className="card-body">
  <button className="btn btn-primary" style={{ fontSize: '20px' }} onClick={handleNext}>Next</button>
  </div>
</div>



         
    </div>
    <div className="col">
      

    <div style={{ color: 'red', marginTop: '10px', border: '2px solid black', borderRadius: '10px' }}>
  <div className="card-body">
    <h5 className="card-title" style={{ border: '1px solid black', padding: '20px', borderRadius: '5px' }}>Monthly</h5>
    
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">  Price :₹199
   </li>
    <li className="list-group-item">Video and sound quality :
    Good</li>
    <li className="list-group-item">Resolution : 720p</li>

    <li className="list-group-item">Supported devices :
    Mobile phone, tablet</li>
  </ul>
  <div className="card-body">
  <button className="btn btn-primary" style={{ fontSize: '20px' }} onClick={handleNext}>Next</button>
  </div>
</div>


    </div>
    <div className="col">


    <div style={{ color: 'red', marginTop: '10px', border: '2px solid black', borderRadius: '10px' }}>
  <div className="card-body">
    <h5 className="card-title" style={{ border: '1px solid black', padding: '20px', borderRadius: '5px' }}>Yearly</h5>
   
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">  Price :₹1449
   </li>
    <li className="list-group-item">Video and sound quality :
    Fair</li>
    <li className="list-group-item">Resolution : 1080p</li>

    <li className="list-group-item">Supported devices :
    Mobile phone, tablet</li>
  </ul>
  <div className="card-body">
  <button className="btn btn-primary" style={{ fontSize: '20px' }} onClick={handleNext}>Next</button>
  </div>
</div>
</div>


  </div>
</div>
    );
};
export default Plan;