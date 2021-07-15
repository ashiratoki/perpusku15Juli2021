//@ts-check
import  '../styles/Home.module.css'
import React, {useImperativeHandle, useState} from 'react' 
import LoginForm from '../components/LoginForm';
import Router, { useRouter } from 'next/router'
import useSWR from 'swr'


async function fetcher(url){
  const res = await fetch(url);
  return res.json();
}

export default function App() {
  const url ='http://localhost:3000/api/tb_user';
  const {data} = useSWR(url,fetcher);
  console.log(data);
  
  // {data.map((tblDat,index)=>
  
    
  //   {tblDat.username}
  //   {tblDat.password}
  
  //   )}
const adminUSer = {
username :"admin",
password : "admin123"

} 


// const [user , setUser] = useState ({username:''});
const [error , setError] = useState ('');
let setLoginUser = false

const Login = details => {
  console.log(details);
  if(details.username == adminUSer.username && details.password == adminUSer.password){
    console.log('LogIn');
    // setUser({
    //   username:details.username,

    // })
    Router.push('/admin/home')
  }

  else{
    for(let i=0;i<data.length;i++){
      if(details.username == data[i].username && details.password == data[i].password){
        setLoginUser = true
      }
    }
    if(setLoginUser){
      Router.push('/user/home')
    }else{
      console.log('details tidak ada ! ')
      setError('Username & Password Salah!')
    }
    
  }
}

const Logout =() =>{
  console.log('Logout')
 
}

  return (
    <div>

    <section className="login-clean">
       <LoginForm Login = {Login} error = {error} />
    </section>
  
  
    </div>
  )
  
}
