import React from 'react';

function HomeSectionCard() {
  return (
    <div>
      <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
        <div className="h-[13rem] w-[10rem]">
          <img className="object-cover object-top w-full h-full"
               src="https://www.fashionbeans.com/wp-content/uploads/2021/11/Luca_Faloni_Moss-Green-Brushed-Cotton-Shirt_Editorial_Hero_Desktop_Made_in_Italy_2.jpeg" alt=""/>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">Nofilter</h3>
          <p className="mt-2 text-sm text-gray-500">Some text about shirt</p>
        </div>
      </div>
    </div>
  );
}

export default HomeSectionCard;