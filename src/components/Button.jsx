import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
    solid: 'inline-flex text-center justify-center rounded-xl border-2 border-indigo-600 bg-indigo-600 p-4 text-xs md:text-base font-semibold text-white hover:border-indigo-500 hover:bg-indigo-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 active:text-white/70',
    outline: 'inline-flex text-center justify-center rounded-xl border-2 border-indigo-600 bg-transparent p-4 text-xs md:text-base font-semibold text-white hover:border-indigo-500 hover:bg-indigo-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 active:text-white/70',
}


export function Button({
                           variant = 'solid',
                           className,
                           href,
                           ...props
                       }) {
    className = clsx(
        baseStyles[variant],
        className
    )

    return href ? (
        <><Link href={href} className={className} {...props} /></>
    ) : (
        <><button className={className} {...props} /></>
    )
}


