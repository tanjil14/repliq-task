import React from 'react';

const Card = ({progress,value,text,count,prog,color}) => {
    return (
        <div className="card p-5 rounded-lg bg-white shadow-custom drop-shadow-xl">
        <div className="head flex items-center">
          <div className="w-10 h-10  flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-700 text-2xl font-bold">
            {value}
          </div>
          <div className="ml-5">
            <h2 className="text-2xl font-semibold">{count}</h2>
            <p className="text-sm">{text}</p>
          </div>
        </div>
        <div className="flex items-center gap-6 mt-14">
          <span className="progress block  h-2 w-full rounded-lg bg-gray-300 overflow-y-hidden relative" data-value={`${prog}%`}>
              <span className={`absolute top-0 left-0 h-full ${color} ${progress}`}></span>
          </span>
          <span className="label text-sm font-medium text-[#102844]">{prog}%</span>
        </div>
      </div>
    );
};

export default Card;