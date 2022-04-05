import React, { useState } from "react";

function ExpandMoreIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      className=" fill-black dark:fill-[#AF98FD]"
    >
      <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
      <path d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z" />
    </svg>
  );
}

function ExpandLessIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      className=" fill-black dark:fill-[#AF98FD]"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M11.29 8.71L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.38-.39-1.02-.39-1.41 0z" />
    </svg>
  );
}

function DeleteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      className=" fill-black dark:fill-[#AF98FD]"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
    </svg>
  );
}

function Accordion(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="text-sans dark:text-[#AF98FD]">
      <ul className="flex justify-between w-[50%] ml-auto mr-auto mt-[5px] mb-[5px] items-center h-[10vh] dark:bg-[#090711] rounded p-6 bg-[#D4CAFD]">
        <li>
          <h1 className="text-[1.5rem] font-bold">{props.title}</h1>
        </li>
        <li>
          <ul className="flex flex-row">
            <li
              className="cursor-pointer"
              onClick={() => setIsActive(!isActive)}
            >
              {isActive ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </li>
            <li onClick={props.deleteHandle} className="cursor-pointer">
              <DeleteIcon />
            </li>
          </ul>
        </li>
      </ul>
      {isActive && (
        <div className="w-[50%] ml-auto mr-auto text-center p-3 dark:bg-[#090711] rounded">
          <p>{props.content}</p>
        </div>
      )}
    </div>
  );
}

export default Accordion;