import React from 'react'

function Form(props) {
  return (
    <form className="flex flex-col w-[80vw] sm:w-[50vw] m-auto" onSubmit={props.onSubmitHandle}>
      <input className="rounded border-0 bg-[#D4CAFD] dark:text-[#AF98FD] dark:bg-[#090711] mb-3 focus:ring-[#100D1B]" type="text" name="title" placeholder="Give your idea a title."></input>
      <textarea className="rounded border-0 bg-[#D4CAFD] dark:text-[#AF98FD] dark:bg-[#090711] mb-3 h-[150px] resize-none focus:ring-[#100D1B]" placeholder="Content of your idea." name="content"></textarea>
      <button className="rounded border-0 mb-[5px] bg-[#D4CAFD] dark:text-[#AF98FD] dark:bg-[#090711] h-[40px] font-sans" type="submit">SAVE</button>
    </form>
  );
}

export default Form;