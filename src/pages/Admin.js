import React,{useEffect,useState} from 'react';
import { FaBeer, FaWindows } from 'react-icons/fa';
import './Dashboard.css';
import { SideData } from './SideData';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios'
import UserCard from './userCard';

import Box from '@mui/material/Box';
import Card from './Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { CardActionArea } from '@mui/material';
import { validateYupSchema } from 'formik';
// import {userState} from '../components/index.js'



export default function Dashboard() {
 
  const [data,setData]=useState([]);
  const [state,setState]=useState("");
  const [state1,setState1]=useState([]);
  const [orders,setOrders]=useState([]);
  const [users,setUsers]=useState([]);
  const [final,setFinal]=useState({name:"",total:"",items:[]});
  useEffect(()=>{
    axios.get('http://localhost:3001/orders')
        .then(response => {
            console.log(response)
            setData(response.data)
        })
   },[])

   function loadData(){
      axios.get('http://localhost:3001/orders')
          .then(response => {
              // console.log(response.data)
                setData(response.data)
              setOrders(response.data)
          })

      
      axios.get('http://localhost:3001/users')
          .then(response => {
              // console.log(response.data)
              setState(response.data)
              setUsers(response.data)
          })
         
      const arr=[]

      for(let i=0;i<state.length;i++){
        for(let j=0;j<data.length;j++){
          if(state[i].name===data[j][0].buyerName || state[i].name===data[j][0].sellerName){
            arr.push(data[j])
          }
        }
      }
      // console.log(arr)
      setState1(arr)
      // console.log(state1);
 
      


   }
   


  //  function storeData(item){
  //   final.name=item[0].buyerName;
  //   const sum=0;
  //   const arr=[]
  //   for(let i=1;i<item.length;i++){
  //     arr.push(item[i]);
  //     // sum+=item[i].price;
  //   }


  //   const val={name:item[0].buyerName,total:sum,items:arr}
  //   setFinal(val)
  //     console.log(val)

  //  }

  // const [data1,setData1]=useState([]);
  //  useEffect(()=>{
  //   axios.get('http://localhost:3001/login')
  //       .then(response => {
  //           console.log(response)
  //           setData1(response.data)
  //       })
  //   },[data1])
  const [input,setInput]=useState("");
  const [input2,setInput2]=useState("");
  const [value,changeValue]=useState([]);

  function blockData(){
    alert("blocked")
    fetch('http://localhost:3001/blocked', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                input
            })
        })
  }

  function loadData(){
    //fetch daata from blocked
    fetch('http://localhost:3001/blocked')
    .then(response => response.json())
    .then(data => {
        // alert(data[0].input)
        changeValue(data)

        }
    )

  }


//   function deleteData(){
//     //delete data from blocked

//     alert(input2)
//     for (let i = 0; i < value.length; i++) {
//       if(value[i].input===input2){
//         axios({
//             method: 'DELETE',
//             url: 'http://localhost:3001/blocked/' + value[i].id
//           });
//       }
//     }
    
//   }





  return (
    <div className="divid">
    <div className="sidebar">
      <div className="image">
        <div className="img">
          <AccountCircleIcon style={{ width: '40px', height: '40px' }} />
        </div>
        <div className="top-heading">{localStorage.getItem('loggedIn')===null?"new user":localStorage.getItem('Name')}</div>
      </div>
      <hr className="hr" />
      <ul className="sidebar-list">
        {SideData.map((val, key) => {
          return (
            <li
              id={window.location.pathname == val.link ? 'active' : ''}
              className="row"
              key={key}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
      <div className="boxer">
        <div id="pro">UPGRADE TO PRO</div>
      </div>
    </div>
    
    
    <div className="orders" >
    {/* <h1>{userState}</h1> */}
    <button className="btn" onClick={loadData} >Show My Current Orders</button>
     {
          state1.map((item)=>{       
            return(<Card item={item} />)
          }
        )
     }
     {/* <Card/> */}
     
    </div>
    <div className='users'>
    <form onSubmit={blockData}>
    <input name="block"  value={input} onChange={e=>setInput(e.target.value)}/>
    {/* <input name='submit' type='submit' value='Block'/> */}
    <button className="btn" type="submit" >Block Users</button>
    </form>
    <button className="btn" onClick={loadData} >Blocked users</button>
     {
          value.map((item)=>{
            return(
                <h1>{item.input}</h1>
            )
          }
          )
     }

     {/* <form onSubmit={deleteData}>
    <input name="block2"  value={input2} onChange={e=>setInput2(e.target.value)}/>
  
    <button className="btn" type="submit" >UnBlock Users</button>
    </form> */}
     
    


    </div>
                
    </div>
  );
}
