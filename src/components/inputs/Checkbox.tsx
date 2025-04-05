import React from 'react'
import { BiCheck } from 'react-icons/bi'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
}

function Checkbox(props: Props) {
    const { label, id, checked } = props;
    const isChecked = checked ? 'bg-black' : 'bg-gray-300'
    return (
        <label htmlFor={id} className='flex items-center gap-3'>
            <div className={`w-5 h-5 rounded-full  ${isChecked}`}>
                {checked && <BiCheck size={20} color='#ffffff' />}                
            </div>
            <div className='text-lg capitalize'>
                {label}
            </div>
            <input type='checkbox' className='hidden'  {...props} />
        </label>
    )
}

export default Checkbox