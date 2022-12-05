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
import { useState, useForm } from 'react';
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
  const [inputs, setInputs] = useState({});

  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      mobile: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    handleSubmit: (event) => {
      return fetch('http://localhost:3001/users', {
        method: 'POST',
        body: JSON.stringify(formik.values),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
    ,
    handleChange : (event) => {

      const name = event.target.name;
      const value = event.target.value;
      setInputs((values) => ({ ...values, [name]: value }));
  
  
    }
  })



  // const validate = (fieldValues = values) =>{
  //   let temp = { ...errors }
  //     if ('name' in fieldValues)
  //         temp.fullName = fieldValues.fullName ? "" : "This field is required."
  //     if ('email' in fieldValues)
  //         temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
  //     if ('mobile' in fieldValues)
  //         temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
  //     setErrors({
  //         ...temp
  //     })
  //     if (fieldValues === values)
  //         return Object.values(temp).every(x => x === "")
  // }





  const handleChange = (event) => {

    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));


  };
  const validate = (values) => {
    const errors = {}
    if (!values.name) {
      errors.name = "Name is required"
    }
    if (!values.mobile) {
      errors.mobile = "Mobile Number is required"
    }
    else if (values.mobile.length < 10) {
      errors.mobile = "Mobile No must have 10 characters"
    }
    if (!values.email) {
      errors.email = "Email is required"
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid Email"
    }
    if (!values.password) {
      errors.password = "Password is required"
    }
    else if (values.password.length < 8) {
      errors.password = "Password must contain at least 8 characters"
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirmation is required"
    }
    else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Password does not match"
    }
    return errors;
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Formik initialValues={{ name: '', mobile: '', email: '', password: '', confirmPassword: '' }} onSubmit={formik.handleSubmit} validate={validate}>
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
                  <TextField
                    sx={{
                      width: 400
                    }}
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    // autoFocus
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div>
                    {formik.touched.name && formik.errors.name && (<span style={{ color: 'red', fontSize: '12px' }}>{formik.errors.name}</span>)}
                  </div>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="mobile"
                    label="Mobile Number"
                    name="mobile"
                    autoComplete="mobile"
                    // autoFocus
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div>
                    {formik.touched.mobile && formik.errors.mobile && (<span style={{ color: 'red', fontSize: '12px' }}>{formik.errors.mobile}</span>)}
                  </div>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div>
                    {formik.touched.email && formik.errors.email && (<span style={{ color: 'red', fontSize: '12px' }}>{formik.errors.email}</span>)}
                  </div>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div>
                    {formik.touched.password && formik.errors.password && (<span style={{ color: 'red', fontSize: '12px' }}>{formik.errors.password}</span>)}
                  </div>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="confirmPassword"
                    id="confirmPassword"
                    // autoComplete="current-password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <div>
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (<span style={{ color: 'red', fontSize: '12px' }}>{formik.errors.confirmPassword}</span>)}
                  </div>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="type"
                    label="Type S for Seller and B for Buyer"
                    type="type"
                    id="type"
                  // onBlur = {formik.handleBlur} 
                  // onChange={formik.handleChange}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}

                  >
                    Sign up
                  </Button>

                  <Grid container>
                    <Grid item xs>

                    </Grid>
                    <Grid item>

                    </Grid>
                  </Grid>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
        <Copyright sx={{ mt: 8, mb: 20 }} />
      </Container>
    </ThemeProvider>
  );
}