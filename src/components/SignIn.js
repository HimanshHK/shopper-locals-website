// import * as React from 'react';
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

// export default function SignIn() {



//   // const handleSubmit = (values) => {
//   //   const errors = {}

//   //  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//   //   alert("Invalid Email address")
//   // }


//   // return errors
//   // };

// //   const validate = (values) => {
// //   const errors = {}

// //   if (!values.email) {
// //     errors.email = 'Required'
// //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
// //     errors.email = 'Invalid email address'
// //   }

// //   return errors
// // }

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs" >
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 13,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box component="form" noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
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
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="/signin" variant="body2">
//                   {"Don't have an account?"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 7}} />
//       </Container>
//     </ThemeProvider>
//   );
// }





import * as React from 'react';
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
import {Formik,useFormik} from 'formik'
// import * as Yup from 'yup'
import {useState} from 'react';

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

export default function SignIn() {
  const [inputs, setInputs] = useState({});
  const [submitted,setSubmitted]= useState(false);

  const handleSubmit = (values) => {
    console.log(values)
  //   const errors = {}
        
  //  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   alert("Invalid Email address")
  // }


  // return errors
  };

  const formik = useFormik({
    initialValues : {
      name: '',
      mobile: '',
      email: '',
      password:'',
      confirmPassword:''
    },
    handleSubmit : (event) => {
      
  
    }
  })

//   const validate = (values) => {
//   const errors = {}

//   if (!values.email) {
//     errors.email = 'Required'
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address'
//   }

//   return errors
// }
// const handleChange = (event) => {

//   const name = event.target.name;
//   const value = event.target.value;
//   setInputs((values) => ({ ...values, [name]: value }));
// }
// const initialValues = {
//   name:'',
//   email:'',
//   password:'',
//   // confirmPassword:''
// }

// const validationSchema = Yup.object().shape({
//   name:Yup.string().min(3,"too short").required("Name is required"),
//   email:Yup.string().email("Incorrect Format").required("email is required"),
//   password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
//   // confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Required"),

// })
const validate = (values)=>{
  const errors = {}
  if(!values.name){
    errors.name = "Name is required"
  }
  if(!values.email){
    errors.email = "Email is required"
  }
  else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email = "Invalid Email"
  }
  if(!values.password){
    errors.password = "Password is required"
  }
  else if(values.password.length <8){
    errors.password = "Password must contain at least 8 characters"
  }
  return errors;
}


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 13,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Formik initialValues = {{name: '',mobile: '',email: '',password:'',confirmPassword:''}} onSubmit = {(values)=>{ setSubmitted(true)
            return fetch('http://localhost:3001/users', {
                method: 'POST',
                body: JSON.stringify(inputs),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => res.json())
                .then((data) => console.log(data));
        }} validate = {validate}>
            {(formik)=>(
              <form onSubmit={formik.handleSubmit}>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
              sx={{
                width: 400
              }}
              margin="normal"
              // required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              onBlur = {formik.handleBlur} 
              onChange={formik.handleChange}
              // value={inputs.name}
              // onChange={handleChange}
            />
            <div>
            {formik.touched.name && formik.errors.name && (<span style = {{color:'red',fontSize:'12px'}}>{formik.errors.name}</span>)}
          </div>

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            // autoFocus
            onBlur = {formik.handleBlur} 
            onChange={formik.handleChange}
          />
          <div>
                {formik.touched.email && formik.errors.email && (<span style = {{color:'red',fontSize:'12px'}}>{formik.errors.email}</span>)}
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
            onBlur = {formik.handleBlur} 
            onChange={formik.handleChange}
          />
          <div>
                {formik.touched.password && formik.errors.password && (<span style = {{color:'red',fontSize:'12px'}}>{formik.errors.password}</span>)}
              </div>
          
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onSubmit={handleSubmit}
            // disabled={props.isSubmitting}
            color='primary'>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signin" variant="body2">
                {"Don't have an account?"}
              </Link>
            </Grid>
          </Grid>
        </Box>
        </form>
            )}
          </Formik>
          
        </Box>
        <Copyright sx={{ mt: 8, mb: 25}} />
      </Container>
    </ThemeProvider>
  );
}