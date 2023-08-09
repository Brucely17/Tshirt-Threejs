import {proxy} from 'valtio';

// initialising states in react  using proxy by valtio

const state =proxy({
    intro:true,
    color:'#EFBD48',
    isLogoTexture:true,
    isFullTexture:false,
    logoDecal:'./threejs.png',
    fullDecal:'./threejs.png',
});

export default state;