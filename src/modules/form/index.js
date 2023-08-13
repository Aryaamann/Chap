import { useState } from "react";
import Button from "../../components/buttons/Button";
import Input from "../../components/input/Input";
import { useNavigate } from "react-router-dom";
const Form = (
    { isSigninpage =true,}
) => {
    const [data,setdata]=useState({
        ...(!isSigninpage && {
            name:''
        }),
        email:'',
        password:''
    });
    console.log('data:>>',data);
     const navigate = useNavigate();
    return (
    <div className='bg-light h-screen flex items-center justify-center'>
        <div className="bg-white w-[40%] h-[90%] shadow-lg rounded-lg flex flex-col justify-center items-center p-7">
                <div className="text-4xl font-bold"> WELCOME { isSigninpage && 'to CHAP!'}</div>
                <div className="text-2xl font-light mb-12">
                    {isSigninpage? 'Sign-up to get started':'Sign-in to explore'}
                </div>
                <form className="flex flex-col justify-center items-center w-full" onSubmit={()=> console.log('Submitted')}>
                {!isSigninpage && <Input label="Username" name="name" placeholder="Enter Username" 
                mb-4 classname='w-[50%] mb-6' value={data.name} onChange={(e)=>setdata({...data, name:e.target.value})}/>}
               
                <Input label="Email" name="email" placeholder="xxxx@gmail.com" 
                mb-4 classname='w-[50%] mb-6' value={data.email} onChange={(e)=>setdata({...data, email:e.target.value})}/> 
                
                <Input label="password"  type="password" name="password" placeholder="password" 
                mb-8 value={data.password} onChange={(e)=>setdata({...data, password:e.target.value})}/>
                
                <Button label={isSigninpage?"log in":"sign up"} className=" pt-2 mt-2 w-full" type="submit"/>
                </form>
                <div>{isSigninpage?"didn't have an account? ":"Already have an account?"}
                <span className="cursor-pointer underline text-primary" onClick={()=>navigate(`/users/${isSigninpage?'signup':'signin'}`)}>{isSigninpage?"Log in":"sign up"}</span></div>
        </div>
    </div>
    );
};
export default Form;