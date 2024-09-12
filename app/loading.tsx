import { LoaderCircle } from 'lucide-react'
import React from 'react'

export default function Loading() {
    return (
        <div className='fixed inset-0 z-[200] bg-background flex items-center justify-center'>
            <LoaderCircle className='animate-spin' />
        </div>
    )
}
