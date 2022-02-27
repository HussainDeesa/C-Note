import React ,{useState}from 'react'

export const Alert = (props) => {

  return (
    // <div >
    //   {/* <div style={{ height: '60px' }}> */}
    //   {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    //     <strong>
    //       {props.alert.message}
    //     </strong>
    //   </div>}

    // </div>
    <div className='alert'>
      {props.alert&&<div className='alert'>{props.alert.message}</div>}

    </div>
  )
}
