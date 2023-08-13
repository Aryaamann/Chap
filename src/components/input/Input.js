import React from "react";

const Input = ({
    label='',
    name='',
    type='text',
    className='',
    Inputclassname='',
    isRequired= false,
    placeholder='',
    value='',
    onChange =()=> {},
}) => {
    return (
    <div className={className}>
        <label for={name} className="block mb-1 text-sm font-medium" >{label}</label>
        <input type={type} id={name} className={`bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg
         focus:ring-blue-200 focus:border-blue-100 block w-full p-2.5 ${className}`} placeholder={placeholder} 
         required={isRequired} value={value} onChange={onChange}/>
    </div>
    )
}

export default Input;