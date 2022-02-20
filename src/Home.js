import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMember, removeMember } from './Action/Action';



const Home = () => {
    const [text,setText]=useState('')

    const getText=(e)=>{
setText(e.target.value)
    }
    console.log(text)

    const teamMembers=useSelector(state=>state.teams)
    console.log(teamMembers)

    const dispatch=useDispatch()
//    array.map(data=>console.log(data))
    return (
        <>
<p>{teamMembers.length}</p>
{teamMembers.map(member=><li>{member} <button onClick={()=>dispatch(removeMember(member))}>Remove</button></li>)}
       <input type="text" name="" id="" onBlur={getText} />
       <button onClick={()=>dispatch(addMember(text))}>Add Member</button>
        </>
    );
};

export default Home;