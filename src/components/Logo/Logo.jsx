import React from 'react'

const Logo = () => {
    const imglogo = "../../../public/images/super-shoes.png";
  return (
    <div>
        <div className='logo'>
            <img src={imglogo} alt="Super-shoes Logo" />
        </div>
    </div>
  )
}

export default Logo