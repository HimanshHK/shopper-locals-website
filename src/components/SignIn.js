// import * as React from 'react';
// import {useState} from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Shopper
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function SignUp() {
//     const [inputs, setInputs] = useState({});

//     const [submitted,setSubmitted]= useState(false);




//   const handleSubmit = (event) => {
//     setSubmitted(true)
//     return fetch('http://localhost:3001/users', {
//         method: 'POST',
//         body: JSON.stringify(inputs),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })
//         .then((res) => res.json())
//         .then((data) => console.log(data));

//   };

//   const handleChange = (event) => {

//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs((values) => ({ ...values, [name]: value }));


// };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs" >
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 5,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign Up
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//           <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="name"
//               label="Name"
//               name="name"
//               autoComplete="name"
//               autoFocus
//               value={inputs.name}
//               onChange={handleChange}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               type="tel"
//               id="mobile"
//               label="Mobile Number"
//               name="mobile"
//               autoComplete="mobile"
//               autoFocus
//               value={inputs.mobile}
//               onChange={handleChange}

//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               value={inputs.email}
//               onChange={handleChange}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               value={inputs.password}
//               onChange={handleChange}
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}

//             >
//               Sign Up
//             </Button>
//             <Grid container>
//               <Grid item xs>

//               </Grid>
//               <Grid item>

//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 8}} />
//       </Container>
//     </ThemeProvider>
//   );
// }





import * as React from 'react';
import { useState} from 'react';
import useForm from './useForm'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik, Formik } from 'formik'
import './Signup.css';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Shopper
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


export default function SignUp() {
  const formLogin = () => {

    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  }

  const {handleChange, values,errors,handleSubmit,valuesss} = useForm(formLogin);
  const [inputs, setInputs] = useState({});




  return (
      <div className="login-root">
        <div className="box-root flex-flex flex-direction--column fi"  >
        {/*style="min-height: 100vh;flex-grow: 1;*/}

          <div className="box-root padding-top--24 flex-flex flex-direction--column fi1" >
            {/*style="flex-grow: 1; z-index: 9;"*/}
            <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
              <h1><a href="http://blog.stackfindover.com/" rel="dofollow">Log In</a></h1>
            </div>
            <div className="formbg-outer">
              <div className="formbg">
                <div className="formbg-inner padding-horizontal--48">
                  <span className="padding-bottom--15">Sign in to your account</span>
                  <form id="stripe-login" onSubmit={handleSubmit}>
                    
                    
                    
                    <div className="field padding-bottom--24">
                      <label htmlFor="email">Email</label>
                      <input type="email" name="email" onChange={handleChange}/>
                    </div>
                    {
                        errors.email && <h3 className='error'>{errors.email}</h3>
                    }
                    
                    
                    <div className="field padding-bottom--24">
                      <div className="grid--50-50">
                        <label htmlFor="password">Password</label>
                        <div className="reset-pass">
                          <a href="#">Forgot your password?</a>
                        </div>
                      </div>
                      <input type="password" name="password" onChange={handleChange}/>
                    </div>
                    {
                        errors.password && <h3 className='error'>{errors.password}</h3>
                    }
                    
                    
                    <div className="field padding-bottom--24">
                      <input type="submit" name="submit" value="Continue"/>
                    </div>
                    <div className="reset-pass">
                          <Link>Don't Have an account!</Link>
                        </div>

                  </form>
                </div>
              </div>
              <div className="footer-link padding-top--24">
                <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                  <span><a href="#">©Shopper</a></span>
                  <span><a href="#">Contact</a></span>
                  <span><a href="#">Privacy & terms</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

