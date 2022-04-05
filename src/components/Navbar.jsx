import React from 'react'

function Navbar(props) {
  return (
    <ul className="flex justify-between w-[80%] m-auto items-center h-[10vh]">
      {props.children}
    </ul>
  );
}

export default Navbar;