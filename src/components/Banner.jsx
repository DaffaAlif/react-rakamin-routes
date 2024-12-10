import React from "react";
import { Plus, Send } from "lucide-react";

const Banner = () => {
  return (
    <div>
      <div class="grid grid-cols-4 gap-4">
        <div>
          <div className="bg-[#19918F] rounded-lg p-10 text-white w-[320px] h-[200px]">
            <p className="font-thin text-[20px]">Account No.</p>
            <p className="font-bold text-[35px] mt-4">100899</p>
          </div>
        </div>
        <div class="col-span-2">
          <div className=" rounded p-10 text-gray-500  h-[200px]">
            <p className="font-thin text-[20px]">Balance</p>
            <p className="font-bold text-[35px] mt-4">Rp. 10.000.000,00</p>
          </div>
        </div>
        <div>
          <div className=" rounded p-10 text-gray-500  h-[200px] flex justify-center items-center gap-4">
            <button className="bg-[#19918F] rounded-md p-6 ">
              <Plus color="white" size={30}/>
            </button>
            <button className="bg-[#19918F] rounded-md p-6  ">
              <Send color="white" size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
