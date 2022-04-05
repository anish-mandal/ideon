import React from 'react'

function ToggleButton(props) {
  if (props.mode) {
    return (
      <div className="bg-[#AF98FD] h-5 w-10 rounded-full relative ">
        <div className="h-[80%] w-[40%] rounded-full bg-[#100D1B] absolute top-0.5 left-0.5 transition-all delay-100"></div>
      </div>
    );
  } else {
    return (
      <div className="bg-[#090711] h-5 w-10 rounded-full relative ">
        <div className="h-[80%] w-[40%] rounded-full bg-[#D4CAFD] absolute top-0.5 left-[53%] transition-all delay-100"></div>
      </div>
    );
  }
}

export default ToggleButton;