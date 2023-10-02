import React, { useEffect } from 'react'

const Loading = () => {

    useEffect(() => {
        console.log('componente montado')
        return ()=>{
            console.log('componente desmontado')
        }
    }, [])


    return (
        <h1>Loading...</h1>
    )
}

export default Loading