import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    error?: {
        message: string;
    }
}

function Input(props: Props) {
    const { label, id, required, error } = props

    return (
        <div className=''>

            <label className={`block mb-2 text-sm ${error?.message ? 'text-red-600' : 'text-[#8D8D8D]'}`} htmlFor={id}>{label} {required && <small className='text-red-500'>*</small>}</label>
            <input
                type="text"
                className={`focus:ring-0 focus:outline-none border-b-2 transition-colors duration-200 focus:border-[#000000] placeholder-transparent w-full pb-1 ${error?.message ? 'border-red-600' : 'border-[#8D8D8D]'}`}
                {...props}

            />
            {error && <small className='text-red-600 text-xs'>{error.message}</small>}
        </div>
    )
}

export default Input
