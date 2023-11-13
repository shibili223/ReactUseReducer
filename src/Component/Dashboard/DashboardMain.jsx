import React from 'react'
// const DashboardMain = ({handleMove, dashbordData}) => {
    // or
const DashboardMain = (props) => {
    const {handleMove, dashbordData, handleDelete} = props
  return (
    <div>
        <h1>Todays Task</h1>
        {dashbordData?.map(({id, title, desc, status}) => (
         // status === false ? (
                // or
                !status ? (    
            <div key={id}>
            <h2>{title}</h2>
            <p>{desc}</p>

            <div> 
                <button onClick={() => {handleMove(id)}}>Pending</button>     
{/* id argument aayi pass cheyyunnathu click cheyyunnatha item thinte status true/false nokki 
false ne true aaki move cheyyan vendiyaanu */}
                <button onClick={() => {handleDelete(id)}}>Delete</button>
            </div>

        </div>
            ) : null

        ))}
    </div>
  )
}

export default DashboardMain