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



export default function Dashboard() {
 
  const [data,setData]=useState([]);
  
  useEffect(()=>{
    axios.get('http://localhost:3001/orders')
        .then(response => {
            console.log(response)
            setData(response.data)
        })
   },[])
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
     
    <div className='profile'>
      <h3>Name  :  {localStorage.getItem("Name")}</h3>
      <h5>Email :{localStorage.getItem("Email")}</h5>
      <h5>Phone :9991375659</h5>
      <h5>Address :{localStorage.getItem("Address")}</h5>
      </div>
    <div className="orders">
      {console.log(data)}
      <ul>
         {/* {
          data.map((msg)=>(
            msg.map((msg1)=>(
              <> */}
              {/* <div className='profile'>
                <h3>Himanshu HK</h3>
                <h5>Type: Seller</h5>
                <h5>Address:Opp. Dhanush Supermarket,Sri City Chitoor,104636</h5>
                <h5>Phone: 1234567890</h5>
                <h5>Email:himanshu.h20@iiits.in</h5>
                <h5>Rating: 4.5</h5>
                <h5>Reviews: 100</h5>
                <h5>Orders: 100</h5>
                <></>
                </div> */}


      {/* <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {msg1.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {msg1.amount} Pieces
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {msg1.price}RS
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
             dispatched
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image={msg1.image}
        alt="hai hi nhi"
        />
    </Card> */}
              {/* </>
            ))
          ))
         } */}
        </ul>
    </div>
                
    </div>
  );
}


