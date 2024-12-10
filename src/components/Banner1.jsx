import React from "react";
import person from '../assets/person.png'

const Banner1 = () => {
  return (
    <div className="flex justify-between h-[200px] items-center">
      <div>
        <p className="font-bold text-[30px]">Good Morning, Chelsea</p>
        <p>Check all your incoming and outgoing transactions here</p>
      </div>

      <div className="flex items-center">
        <div>
          <p className="font-bold">Chelsea Immanuela</p>
          <p>Personal Account</p>
        </div>
        <div className="ml-4">
          <img src={person} alt='person' className={`rounded-full w-[80px] h-[80px] border-[8px] border-[#19918F]`} />
        </div>
      </div>
    </div>
  );
};

export default Banner1;
