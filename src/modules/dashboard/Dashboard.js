import React from "react";
import accimg from "../../Asset/accimg.svg" ; 
import Input from "../../components/input/Input"
const Dashboard = () =>
{
    const contacts =[
        {
            name:'John',
            status:'available',
            img: accimg
        },
        {
            name:'Mary',
            status:'available',
            img: accimg
        },
        {
            name:'Adam',
            status:'available',
            img: accimg
        },
        
        
    ]
    return (
        <div className='w-screen flex'>
            <div className='w-[25%] border h-screen bg-secondary'>
                <div className='justify-center items-center flex my-8 flex-col'>
                    <div className='border rounded-full border-2px p-[2px]'>
                        <img src={accimg} width={50} height={50} alt="aimage"/>
                    </div>
                    
                    <div className='ml-8'>
                        <h3 className='text-2xl'>Username</h3>
                        <p className='text-lg font-light'>MyAccount</p>
                    </div>
                    <hr className='border-black '/>
                    
                   <div className='ml-14 mt-10'>
                        <div className='text-primary text-lg'>Messages</div>
                        <div className='overflow-scroll'>
                            {
                                contacts.map(({name,status,img})=> {
                                    return(
                                        <div className='flex py-8 border-b border-b-gray-600 items-center'>
                                            <div><img src={img} width={30} height={30}/></div>
                                            <div className='ml-8'>
                                                <h3 className='text-lg'>{name}</h3>
                                                <p className='text-sm font-light text-gray-500'>{status}</p>
                                            </div>

                                        </div>
                                    )
                                })
                            }

                        </div>
                   </div>
                    <div>
                                                 
                        
                    </div>
                </div>
            </div>
            
            <div className='w-[50%]  h-screen bg-white flex flex-col items-center'>
                <div className='w-[75%] bg-secondary h-[80px] mt-4 my-2 rounded-full flex items-center px-14'>
                    <div><img src={accimg} width={60} height={60}/></div>
                    <div className='ml-6'>
                     <h3 className='text-lg '>ARYAMAN</h3>  
                     <p className='text-sm font-light text-gray-600'>Online</p>
                     </div>          
                </div>
                <div className='h-[75%] w-full  overflow-scroll border-b-2'>
                                <div className='h-[1000px] p-14'>
                                    <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                                        lorem ipsum of the try hard is the lorem ipsum psych gone done for today
                                    </div>
                                    <div className='max-w-[40%] bg-primary text-white rounded-b-xl rounded-tl-xl p-4 ml-auto'>
                                        lorem ipsum of the try hard is the lorem ipsum psych gone done for today
                                    </div>
                                    <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                                        lorem ipsum of the try hard is the lorem ipsum psych gone done for today
                                    </div>
                                    <div className='max-w-[40%] bg-primary text-white rounded-b-xl rounded-tl-xl p-4 ml-auto'>
                                        lorem ipsum of the try hard is the lorem ipsum psych gone done for today
                                    </div><div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                                        lorem ipsum of the try hard is the lorem ipsum psych gone done for today
                                    </div>
                                    <div className='max-w-[40%] bg-primary text-white rounded-b-xl rounded-tl-xl p-4 ml-auto'>
                                        lorem ipsum of the try hard is the lorem ipsum psych gone done for today
                                    </div>
                                    
                                </div>
                </div>
                <div className='w-[75%]  p-[1.25%] flex items-center'>
                    <Input  placeholder='Type a message' className='w-full rounded-full shadow bg-secondary
                    outline-none'/>
                    <div className='flex ml-2 '>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="44" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M10 14l11 -11" />
                            <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                    </svg>
                    </div>
                    <div className='mr-1 cursor-point30'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-paperclip" width="44" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" />
                    </svg>
                    </div>
                </div>
            </div>
            
            <div className='w-[25%]  h-screen bg-light'></div>               
        </div>
    )
}
export default Dashboard;