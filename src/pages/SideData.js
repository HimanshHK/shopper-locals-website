// import React from 'react';
// // import * as FaIcons from 'react-icons/fa';
// // import * as AiIcons from 'react-icons/ai';
// // import * as IoIcons from 'react-icons/io';
// import HomeIcon from '@material-ui/icons/Home';
// import PersonIcon from '@material-ui/icons/Person';

// import RedeemIcon from '@material-ui/icons/Redeem';

// import CategoryIcon from '@material-ui/icons/Category';
// import ReceiptIcon from '@material-ui/icons/Receipt';

// export const SideData = [
//   {
//     title: 'Home',
//     path: '/',
//     icon: <HomeIcon />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Profile',
//     path: '/Profile',
//     icon: <PersonIcon  />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Orders',
//     path: '/orders',
//     icon: <RedeemIcon />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Billing',
//     path: '/Bill',
//     icon: <CategoryIcon />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Items',
//     path: '/items',
//     icon: <ReceiptIcon />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Support',
//     path: '/support',
//     icon: <ReceiptIcon/>,
//     cName: 'nav-text'
//   }
// ];


import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

import RedeemIcon from '@mui/icons-material/Redeem';

import CategoryIcon from '@mui/icons-material/Category';
import ReceiptIcon from '@mui/icons-material/Receipt';
export const SideData = [
    {
        title:"Home",
        icon:<HomeIcon/>,
        link:"/dashboard"
    },
    {
        title:"Profile",
        icon:<PersonIcon/>,
        link:"/profile"
    },
    {
        title:"Orders",
        icon:<RedeemIcon/>,
        link:"/orders"
    },
    {
        title:"Support",
        icon:<ReceiptIcon/>,
        link:"/support"
    },
    {
        title:"Items",
        icon:<CategoryIcon/>,
        link:"/Items"
    }
]
