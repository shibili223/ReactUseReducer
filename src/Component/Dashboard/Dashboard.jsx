import React from 'react'
import DashboardMain from './DashboardMain'
import DashboardAside from './DashboardAside'
import { DashboardDataContext } from '../../Context/DashboardContext'
import { DispatchContext } from '../../Context/DashboardContext'
import { useContext } from 'react'
const Dashboard = () => {
   //CONTEXT
   const dashbordData = useContext(DashboardDataContext)
   console.log(dashbordData)
   const dispatch = useContext(DispatchContext)
   // handle Functions
    const handleMove = (id) => {
       dispatch( {
           type: "MOVE TO FINISHED", 
           payload: id,
       } )
    }
    const handleDelete = (id) => {
      dispatch( {
        type: "DELETE_TASK",
        payload: id
      })
    }
  return (
    <div className='flex gap-4'>
      <DashboardMain dashbordData={dashbordData} handleMove={handleMove} handleDelete={handleDelete}/>
      <DashboardAside dashbordData={dashbordData} handleDelete={handleDelete} />
    </div>
  )
}
export default Dashboard