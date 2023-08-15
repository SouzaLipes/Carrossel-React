import React, { useEffect, useRef, useState } from 'react'

const Carrossel = () => {
  const [dados, setDados] = useState([])
  const carousel = useRef(null)

  const imgArrowRight = "../../../public/images/right.png";

  useEffect(() => {
    fetch('http://localhost:5173/src/components/Carrossel/shoes.json')
      .then((response) => response.json())
      .then(setDados)
  }, []);


  const handleLeft = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRight = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  if (!dados || !dados.length) return null

  return (
  <>
    <div className='carousel _flex _overflow-x-auto _scroll-smooth' ref={carousel}>
      {dados.map((item) => {
        const { id, name, price, oldPrice, image } = item
        return (
          <div className='_h-[10%]'>
            <div key={id} className="item _bg-white _h-full">
              <div className="image">
                <img src={image} alt={name} className='_w-full _h-full _object-cover' />
              </div>
              <div className="info _h-full _flex _flex-col _justify-between">
                <span className="name _text-xl _font-bold _my-[10px] _mx-0 _text-[#00a8fb]">{name}</span>
                <span className="oldPrice _text-sm _line-through _grow _text-[#e81a5d]">U${oldPrice}</span>
                <span className="price  _text-xl _font-bold _bg-[#ff7e3b]">U${price}</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
    <div className="buttons _w-full _text-center">
  <button onClick={handleLeft} className="_rotate-180"><img src={imgArrowRight} alt="" /></button>
    <button onClick={handleRight}><img src={imgArrowRight} alt="" /></button>
  </div>
  </>
  )
}

export default Carrossel