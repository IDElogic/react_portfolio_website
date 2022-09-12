import React from 'react'
import PDF from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={PDF} download className='btn'>Download </a>
      <a href='#contact' className='btn btn-primary'>Contact</a>
    </div>
  )
}

export default CTA
