import React, { useRef } from 'react'

interface propInterface {
    
}

export default function Canvas(props) {
    const canvasRef = useRef(null)
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    return <canvas ref={canvasRef} {...props}/>
    return <canvas id="canvas1" width="300" height="600"/>; 
}