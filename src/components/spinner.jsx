import React from 'react'
import PuffLoader from 'react-spinners/PuffLoader'
import { styled } from 'styled-components'
const Spinner = () => {
    const SpinnerContainer = styled.div`
         margin-top:100px;
         /* margin-left: 50%; */ 
        
    `
  return (
    <div>
        <PuffLoader loading={true} size={100} color="#303030"></PuffLoader>
    </div>
  )
}

export default Spinner