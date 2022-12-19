import styles from './Login.module.css';
import Nav from '../../components/nav/Nav';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { useState } from 'react';
import {MdVisibilityOff, MdVisibility} from "react-icons/md"
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { PulseLoader } from 'react-spinners';
import { useLogin } from '../../hooks/useLogin';


export default function Login() {
  const { authIsReady, user } = useAuth()
  const { login, isPending, error } = useLogin()
  const navigate = useNavigate()
  const [formError, setFormError] = useState({
    email: null,
    password: null,
  })
  const [values, setValues] = useState({
    password: '',
    email: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setFormError({ ...formError, [prop]: null })
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



  // handling login
  const handleLogin = (e) => {
    e.preventDefault()
    const data = {
      email: values.email,
      password: values.password,
    }
    
    if(values.email === "" || !values.email.includes("@") || values.email.length < 5) {
      setFormError({...formError, email: "Email is invalid"});
      return
    }
    if(values.password.length < 6) {
      setFormError({...formError, password: "Invalid Password"});
      return
    }

    login(data)
  }

  useEffect(() => {
    if(user) {
      navigate('/')
    }
  }, [user, navigate])


  return ((authIsReady && !user) &&
    <div className={styles.container}>
      <Nav black={true}/>
      <form className={styles.form} onSubmit={handleLogin}>
        <h1>Welcome Back!</h1>
        <TextField 
        id="email" 
        label="Email" 
        variant="outlined" 
        autoComplete = 'off' 
        onChange={handleChange('email')}
        {...(formError.email && {error: true, helperText: formError.email})}/>

        {/* password input and event */}
        <FormControl sx={{ width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            autoComplete = 'off'
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            {...(formError.password && {error: true, helperText: formError.password})}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                {values.showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        {!isPending && <button className={styles.btn}>Login</button>}
        {isPending && <button disabled className={styles.btn} style={{opacity: "50%"}}><PulseLoader color='#000000' size={10}/> </button>}
        {error && <p className={styles.error}>{error}</p>}
        
      <Link to="/signUp" className={styles.link}>Don't Have An Account?</Link>
      <Link to="/forgotPassword" className={styles.link2}>Forgot Password?</Link>
      </form>

    </div>
  )
}
