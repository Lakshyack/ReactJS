import React from 'react'

 function Alert(props) {
    
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
       // Read and learn this syntax for future
       <div style={{height: '10px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show text-center`} role="alert">
                  {capitalize(props.alert.type)} : {props.alert.msg}
                    {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
                </div>}
                </div>
        
    )
}
export default Alert
