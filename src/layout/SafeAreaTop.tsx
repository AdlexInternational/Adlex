import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

function SafeAreaTop({ className, children, ...props }: Props) {
    return (
        <div className={`safearea ${className}`} {...props}>
            {children}
        </div>
    )
}

export default SafeAreaTop
