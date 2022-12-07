import React,{useEffect,useState} from 'react';
import { FaBeer, FaWindows } from 'react-icons/fa';
import './Dashboard.css';
import { SideData } from './SideData';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios'


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
          })

      
      axios.get('http://localhost:3001/users')
          .then(response => {
              // console.log(response.data)
              setState(response.data)
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

  return (
    <div className="divid">
    <div className="sidebar">
      <div className="image">
        <div className="img">
          <AccountCircleIcon style={{ width: '40px', height: '40px' }} />
        </div>
        <div className="top-heading">The User</div>
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
                
    </div>
  );
}
