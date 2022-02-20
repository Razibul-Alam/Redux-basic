export const addMember=(input)=>{
    return{

        type:'addMember',
        payload:input

    }
}
export const removeMember=(input)=>{
    return{

        type:'removeMember',
        payload:input

    }
}