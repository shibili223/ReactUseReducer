// context is used to avoid props drilling, context used to pass values to its childrens
import React, { useReducer } from 'react'    // useReducer step:1 import useReducer
import { createContext } from 'react'
import { dashbordData } from "../Globaldata/dashboardData"


// CONTEXT CREATION  set these 2 items as global data
export const DashboardDataContext = createContext();
export const DispatchContext = createContext()


const DashboardContext = ({children}) => {
  
  //reducer callback
  const reducerCallback = (state, {type, payload}) => {       //here state we can write stateValue instead of state //reducerCallback ne invoke cheyyanam enkil dispatch ne vilichukodukkanam
    // console.log("reducer now executed...")
    // console.log({payload})
    // console.log(stateValue)
    switch(type) {
      case "MOVE TO FINISHED" :
        // const finalState = stateValue?.map((item) => {                                           //here stateValue is an array of object [{},{},{}]. then we map stateValue and the "item" is object {}. console.log(item) so item objectile status ne false ullathu true aakki return cheyyanam enkil item objectne spread cheyyanam. oru array le value change cheyyanam enkil spread method use cheyyanam
        //   if(item.id === payload) {
        //     return {...item, status:true}                        //this return is map return      //item object le status nte current value change cheythu updated value aakkan(false set to true) item object ne spread cheythu status: new value kodukkuka
        //   } else {
        //     return item                                       //this return also map return  //here else condition koduthittillenkil ee  error kaanikkum(DashboardMain.jsx:29 Uncaught TypeError: Cannot destructure property 'id' of 'undefined' as it is undefined.)
        //                                                        // id 101 ullathu click cheyyumbol  stateValue.map(item) keri if varumbol 1st varunna id 100 aanu 100 === 101 aano check cheyyum codition false aanu so ivide else block illenkil aa object ne vittu, 2nd if check cheyyumbol 101 === 101 condition true aayi so aa object ne spread cheythu update(changes varuthi) cheythu return cheyyum ennittu finalState lekku store cheyyum, map nakathu aareyokke aano return cheyyunnathu athu maathrame puthiya array(fianlState) lekku keru, so ivde else block illenkil condition true aavunathu maathram return aayi finalState lekku store aavullu condition false aayathokke undefined aayi finalState store aavum athaanu error varunnathu. so else block "return item" ennu kodukkumbol map il keri if vanna condition false aayathine athupole thanne return cheyyanam so undefined varilla error varilla ennittu finalState lekku store cheyyunnu.
        //   } 
        // })
        // return finalState                                       // this return is swith return  map cheythu kittunna result oru new array aanu so aa map cheythu kittunna result ne oru new variable kku store cheyyanm ie:finalState ennittu must return finalState

  // PRO CODING 
        return state?.map((item) => (
            item.id === payload ? {...item, status:true} : item
        ))
        case "DELETE_TASK":
          return state?.filter(x => x.id !== payload)
        default:
          throw new Error();
         
    }
  }


  // useReducer step:2
  const [state, dispatch] = useReducer(reducerCallback, dashbordData)               //reducerCallback ithinu pakaram verum reducer ennu koduthal mathi, reducerCallback oru updateted state ne aanu finally return cheyyunnathu.

  
  return (
    <DashboardDataContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
         {children}                                                               {/* here Dashboard is the children of DashboardContext  */}
      </DispatchContext.Provider>
    </DashboardDataContext.Provider>
  )
}

export default DashboardContext