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
             About Application
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
             Welcome to our React.js application! The project titled "Single Page News Web Application Using React JS" encapsulates a modern approach to news consumption in today's digital age. With the exponential growth of information and the increasing reliance on digital platforms for news dissemination, this project endeavors to provide an efficient, user-centric, and dynamically updated news delivery system.
At its core, the project harnesses the capabilities of React JS, a powerful JavaScript library known for its component-based architecture and fast rendering capabilities. By leveraging React JS, the aim is to create a single-page application (SPA) that offers a seamless and engaging news browsing experience to users.
The primary objective of this project is to design and develop a news web application that not only presents the latest news in a structured and accessible manner but also enhances user interaction through intuitive features and functionalities. The application is designed to cater to a wide range of users, from casual news readers to avid followers of current events.
The significance of this project lies in its ability to address the evolving needs of news consumers, providing them with a platform that combines real-time updates, personalized preferences, and a visually appealing user interface. By utilizing APIs such as NewsAPI.com, the application ensures that users have access to a diverse range of news sources and categories, thereby enriching their news consumption experience.
As we delve deeper into the subsequent sections of this report, including the system architecture, implementation details, testing procedures, and future enhancements, a comprehensive understanding of the efforts undertaken to realize this Single Page News Web Application Using React JS will be presented. Through this project, we aim to contribute to the advancement of news delivery systems in the digital landscape, offering a solution that caters to the dynamic nature of news consumption in today's fast-paced world.


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
            About Developer Team
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
            >Our React frontend application, designed as a part of our college's final project, was a collaborative effort involving four team members, each contributing significantly to different aspects of the project. <p><b>Lakshya </b>was responsible for API integration and data fetching. They handled the integration of external APIs to fetch news data and managed asynchronous operations and state management related to data fetching, including pagination and infinite scrolling for a seamless user experience. </p> <p><b>Priyanshu and Dibyanshu </b>focused on UI design and component styling, ensuring a consistent and visually appealing design across all components. They styled the News component, TextForm component, and various buttons and input fields to provide a cohesive look and feel.</p><p><b> Lakshya</b> took charge of component development and interaction. They developed reusable React components like NewsItem and TextForm and implemented interactive features for text transformation, including converting text to uppercase, lowercase, and clearing text and extra spaces. Lastly, </p> <p><b>Deepak Kumar</b> worked on animation and performance optimization. They integrated the typing effect on headlines using Typed.js and optimized the overall performance to ensure smooth and responsive interactions. Together, these efforts resulted in a well-rounded and functional application, showcasing our teamwork and individual contributions.</p> 
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
              Technologies Used
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
            

Our application is built using modern web development technologies to ensure a robust and efficient user experience. Here are the key technologies, tools, and frameworks we used:
Frontend Frameworks

    React.js: A powerful JavaScript library for building user interfaces. React's component-based architecture allowed us to create reusable UI components, manage the application state efficiently, and ensure a responsive user experience.
    Bootstrap: A popular CSS framework that helped us design a responsive and mobile-first layout quickly. Bootstrap's pre-built components and grid system made it easier to create a consistent and visually appealing interface.

APIs and Data Sources

    NewsAPI: We used NewsAPI to fetch the latest news articles from various sources. NewsAPI provided us with a simple and easy-to-use interface to retrieve news data, which we then displayed on our application.

Development Tools

    Visual Studio Code: Our primary code editor. VS Code's extensive range of extensions and features, such as IntelliSense, debugging, and integrated terminal, greatly enhanced our productivity and coding efficiency.
    Git: A version control system that allowed us to collaborate effectively. We used Git for source code management, enabling us to track changes, work on different branches, and merge our work seamlessly.
    npm: The Node Package Manager was essential for managing the project's dependencies. npm allowed us to install, update, and manage the various packages and libraries used in our application.

Libraries

    Typed.js: A JavaScript library for creating animated typing effects. We used Typed.js to add a dynamic and engaging element to our headlines, enhancing the overall user experience.
    PropTypes: A type-checking library for React props. PropTypes helped us catch errors by validating the types of props passed to our components, ensuring that our components received the expected data types.
    Infinite Scroll: A library that allowed us to implement infinite scrolling. This enhanced the user experience by loading more articles as the user scrolled down, without requiring them to click on a "Load More" button.
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
