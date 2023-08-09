import React from 'react'
import {Canvas} from '@react-three/fiber'
import {Environment,Center} from '@react-three/drei'
import Shirt from './Shirt'
import Backdrop from './Backdrop'
import CameraRig from './CameraRig'

function CanvasModel() {
  return (
    <Canvas
    shadows
    // field of view-fov:increae size of shirt
    camera ={{position:[0,0,4],fov:25}}
    gl={{preserveDrawingBuffer:true}}>
    className='w-full max-w-full h-full transition-all ease-in'
        <ambientLight intensity={0.5} />
        <Environment preset='city' />
         <CameraRig>
            <Backdrop/>
            <Center>
                <Shirt/>
            </Center>
        </CameraRig>
    </Canvas>
  )
}

export default CanvasModel;
