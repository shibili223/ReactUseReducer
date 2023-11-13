import React from 'react'

const DashboardAside = (props) => {
  return (
    <div className='text-red-500'>
        <h1 className='text-red-500'>Finished Task</h1>
       { 
        props.dashbordData?.map(({id, status, title, desc}) => (
          //map nu return vendathe cheyyan () kodukkuka. map nu return vachu cheyyan {} kodukkuka.
          status === true ? (
            <div key={id}>
              <h2>{title}</h2>
              <p>{desc}</p>
              <button onClick={() => props.handleDelete(id)}>Completed</button>
              </div>
          ) : null
        ))
       }
    </div>
  )
}

export default DashboardAside