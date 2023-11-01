import React from 'react';
import "./ProductCard.css"

function ProductCard(props) {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img className="h-full w-full object-cover object-left-top" src="https://rukminim1.flixcart.com/image/612/612/kb1470w0/jean/x/r/a/30-11274626-roadster-original-imafsgsthk6gdpjg.jpeg?q=70" alt=""/>
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">Roadster</p>
          <p>Men Regular Mid Rise Blue Jeans</p>
        </div>
        <div className="flex space-x-2 items-center">
            <p className="font-semibold">${591*30/100}</p>
            <p className="line-through opacity-50">$591</p>
            <p className="text-green-600 font-semibold">70% off</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;