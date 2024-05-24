import React from 'react'

export default function home(props) {
  return (
    <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color={props.mode === 'dark' ? 'white': "black"} fill="none">
    <circle cx="17.75" cy="6.25" r="4.25" stroke="currentColor" stroke-width="1.5" />
    <circle cx="6.25" cy="6.25" r="4.25" stroke="currentColor" stroke-width="1.5" />
    <circle cx="17.75" cy="17.75" r="4.25" stroke="currentColor" stroke-width="1.5" />
    <circle cx="6.25" cy="17.75" r="4.25" stroke="currentColor" stroke-width="1.5" />
</svg>
      
    </div>
  )
}
