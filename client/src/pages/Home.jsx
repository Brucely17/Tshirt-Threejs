import React from 'react'
import {motion,AnimatePresence} from 'framer-motion';
import {useSnapshot} from 'valtio';
import {CustomButton} from "../components";
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation}
from '../config/motion';
import state from '../store';
function Home() {
    const snap =useSnapshot(state);
    // use to capture the state by wrapping and unwrapping proxy by valtio.
  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className='home' {...slideAnimation('left')} >
                <motion.header {...slideAnimation('down')}>
                    <img
                    src='./threejs.png'
                    alt='logo'
                    className='w-8 h-8 object-contain'/>
                </motion.header>
                <motion.div className='home-context'{...headContainerAnimation}>
                <motion.div {...headTextAnimation}>
                <h1 className='head-text'>
                    Lets <br className='xl:block hidden' /> Do It.
                </h1>

                </motion.div>
                <motion.div {...headContentAnimation}
                className='flex flex-col gap-5'>
                    <p className='max-w-md font-normal text-gray-600 text-base'>
                        Create your unique and exclusive shirt with our brand 
                        new 3D custmization tool.<strong>
                            Unleash your imagination 
                        </strong>{" "} and define your own style.
                    </p>
                    {/* This button helps to change from intro state to customizing state */}
                    <CustomButton
                        type="filled"
                        title="Customize It"
                        customStyles='w-fit px-4 py-2.5 font-bold text-sm'
                        handleClick={()=> state.intro = false}

                    /> 
                </motion.div>
                </motion.div>
            </motion.section>
        )}
    </AnimatePresence>

  )
}

export default Home
