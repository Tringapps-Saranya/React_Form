import './App.css';
import { useForm } from "react-hook-form";

function App() {
  const {register,formState:{errors},handleSubmit} = useForm();
  const onSubmit = uservalue => console.log(uservalue)


  return (
    <div className='login'>
      <h1>Login</h1>
      <form onSubmit = {handleSubmit(onSubmit)} method = "post" >
      <br/><br/>
      <span>EMAIL&nbsp;&nbsp;</span>  
      <input {...register('email',{required:true,pattern:/\S+@\S+\.\S+/ })} />

      {errors.email?.type === 'required' && 'email is required'}
      {errors.email?.type === 'pattern' && 'email is not valid'}<br/><br/>



      <span>User NAME &nbsp;&nbsp;</span>  
      <input {...register('username',{required:true,minLength:3,maxLength:30})} />
      {errors.username?.type === 'required' && 'User name is required'}<br/><br/>


      <span>GENDER &nbsp;&nbsp;</span>
      <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
      </select> <br/><br/>

      <span>PASSWORD&nbsp;&nbsp;</span>  
      <input type = "password" {...register('password',{required:true,minLength:8,maxLength:20})} />
      {errors.password?.type === 'required' && 'password is required'}
      {errors.password?.type === 'minLength' && 'password must be 8 characters'} <br/><br/>
      <input type = "submit" className = "next" value = "SUBMIT" {...register('submit')}/>
      <br/><br/>
    </form>
    </div>
    

  );
}

export default App;