import React from 'react'

/**
 * Thin wrapper to ensure we always have hover functionality
 * @param param0 Html Button props
 * @returns Styled Button
 */
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, children, ...rest }) => {
    return (
        <button className={`cursor-pointer ${className}`} { ...rest }>
            {children}
        </button>
    )
}

export default Button