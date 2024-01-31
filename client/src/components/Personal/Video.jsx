import React from 'react'
import video from '../../assets/84426130-1D38-4EEE-B714-B5B322771FAD_1_206_a.jpeg';
function Video() {
  return (
    <div>
        <video src={video} autoPlay loop  muted></video>
    </div>
  )
}

export default Video