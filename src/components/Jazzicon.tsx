import { useEffect, useRef } from 'react'
import jazzicon from '@metamask/jazzicon'

export function JazzIcon({ address, diameter = 32 }: { address: string; diameter?: number }) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (ref.current && address) {
            ref.current.innerHTML = ''
            const icon = jazzicon(diameter, parseInt(address.slice(2, 10), 16))
            ref.current.appendChild(icon)
        }
    }, [address, diameter])

    return <div ref={ref} />
}