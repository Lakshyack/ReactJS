import React
// , 
// {useState} 
from "react";

export default function About(props) {
    
//     const [myStyle, setMyStyle] = useState({
//         color: 'black',
//         backgroundColor: 'white'
//     }) 
//     const [btnText,setBtnext] = useState("Enable Dark mode")

//  const toggleStyle = ()=>{
//     if(myStyle.color === 'white'){
//            setMyStyle({
//             color: 'black',
//             backgroundColor: 'white'
//            })
//            setBtnext("Enable dark Mode")
//     }
//     else{
//         setMyStyle({
//             color: 'white',
//             backgroundColor: 'black'
//            })
//            setBtnext("Enable light   Mode")
//     }
//  }
  return (
    <div className="container"  style={{ marginTop: "63px"}}>
      <h1
        className="my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        About Us
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              // style={myStyle}
              style={{color : props.mode === 'dark'? 'white' : '#202020' ,backgroundColor: props.mode === 'dark' ? '#202020' : 'white',fontSize:"20px"}}
     
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             About TextUtils
              {/* <strong>Analyze Your text </strong> */}
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" 
             style={{color : props.mode === 'dark'? 'white' : '#6191b0' ,backgroundColor: props.mode === 'dark' ? '#202020' : 'white'}}
            >
              This application is developed using React.js and offers various features such as converting text to uppercase and lowercase. It also provides two theme options: dark and light. We invite you to use and enjoy the functionality of this application.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              // style={myStyle}
              style={{color : props.mode === 'dark'? 'white' : '#202020' ,backgroundColor: props.mode === 'dark' ? '#202020' : 'white',fontSize:"20px"}}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
            About Developer
              {/* <strong>Free to use </strong> */}
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" 
            // style={myStyle} 
            style={{color : props.mode === 'dark'? 'white' : '#6191b0' ,backgroundColor: props.mode === 'dark' ? '#202020' : 'white'}}
            >This site was developed by Lakshya as a practice project to gain proficiency in React. Lakshya is a diploma graduate with expertise in Java backend development and frontend technologies including HTML, CSS, JavaScript, and React. For any inquiries, please contact Lakshya at Lakshyak7370@gmail.com.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              // style={myStyle}
              style={{color : props.mode === 'dark'? 'white' : '#202020' ,backgroundColor: props.mode === 'dark' ? '#202020' : 'white',fontSize:"20px"}}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Deployment
              {/* <strong>Browser Compatible </strong> */}
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"
            //  style={myStyle}
            style={{color : props.mode === 'dark'? 'white' : '#6191b0' ,backgroundColor: props.mode === 'dark' ? '#202020' : 'white'}}
            >
              This site was developed by Lakshya as a practice project to gain proficiency in React. Lakshya is a diploma graduate with expertise in Java backend development and frontend technologies including HTML, CSS, JavaScript, and React. For any inquiries, please contact Lakshya at Lakshyak7370@gmail.com.

This application is developed using React.js and offers various features such as converting text to uppercase and lowercase. It also provides two theme options: dark and light. We invite you to use and enjoy the functionality of this application. The site is deployed through Firebase.
            </div>
          </div>
        </div>
      </div>
     {/* <div className="container text-center">
     <button type="button" onClick={toggleStyle} className="btn btn-primary my-3 mx-2">{btnText}</button>
     </div> */}
    </div>
  );
}
