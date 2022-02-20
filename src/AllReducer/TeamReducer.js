const initialState=[]
export const TeamReducer=(state=initialState,action)=>{
if(action.type=='addMember'){
    console.log('something')
    console.log(action.payload)
    const newState=[...state,action.payload]
    return newState
}
if(action.type==='removeMember'){
    console.log(action.payload)
    const newState=state.filter(text=>text!==action.payload)
    console.log(newState)
    return newState
}
return state
}

