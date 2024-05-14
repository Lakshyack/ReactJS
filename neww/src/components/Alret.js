import React from 'react'

export default function Alret(props) {
  return (

    <div className="style" style={{height:"20px"}}>
    {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.msg}</strong> 
  
</div>}

</div>
 
  )
}
