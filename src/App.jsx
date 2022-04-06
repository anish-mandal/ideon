import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ToggleButton from "./components/ToggleButton";
import Accordion from "./components/Accordion";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkTheme: false,
      IdeaList: [],
    };
    this.onSubmitHandle = this.onSubmitHandle.bind(this);
    this.deleteHandle = this.deleteHandle.bind(this);
  }

  componentDidUpdate() {
    if (this.state.darkTheme) {
      document.getElementById("html").classList.add("dark");
    } else if (document.getElementById("html").classList.contains("dark")) {
      document.getElementById("html").classList.remove("dark");
    }

    localStorage.setItem("theme", this.state.darkTheme ? "dark" : "light");
  }

  componentDidMount() {
    if (localStorage.getItem("theme") === "dark") {
      this.setState({ darkTheme: true });
    } else if (localStorage.getItem("theme") === "light") {
      this.setState({ darkTheme: false });
    } else {
      localStorage.setItem("theme", this.state.darkTheme ? "dark" : "light");
    }

    if (localStorage.getItem("IdeaList")) {
      this.setState({
        IdeaList: [...JSON.parse(localStorage.getItem("IdeaList"))],
      });
    }
  }

  onSubmitHandle(e) {
    e.preventDefault();
    if (e.target.title.value && e.target.content.value) {
      const data = {
        title: e.target.title.value,
        content: e.target.content.value,
      };
      const nextData = [...this.state.IdeaList, data];
      this.setState({ IdeaList: nextData });
      localStorage.setItem("IdeaList", JSON.stringify(nextData));
      localStorage.setItem("visited", "true");
    }
  }

  deleteHandle(id) {
    const filteredData = this.state.IdeaList.filter((arrElem, index) => {
      return index !== id;
    });
    this.setState({ IdeaList: filteredData });
    localStorage.setItem("IdeaList", JSON.stringify(filteredData));
  }

  render() {
    if (localStorage.getItem("visited") === "true") {
      return (
        <div className="flex w-[100%] h-full transition-all delay-100">
          <div className="flex text-center justify-start flex-col ml-auto mr-auto w-[100vw] sm:w-[80vw] h-fit">
            <Navbar>
              <li className="font-script text-[1.5rem] dark:text-[#AF98FD] select-none">
                Ideon
              </li>
              <li
                className="cursor-pointer"
                onClick={() =>
                  this.setState({ darkTheme: !this.state.darkTheme })
                }
              >
                <ToggleButton mode={this.state.darkTheme}></ToggleButton>
              </li>
            </Navbar>

            <Form onSubmitHandle={this.onSubmitHandle}></Form>

            <h1 className="text-[2rem] text-left w-[80vw] sm:w-[50vw] ml-auto mr-auto mt-5 dark:text-[#AF98FD] font-light">
              Your Ideas:
            </h1>

            {this.state.IdeaList.map((data, id) => {
              return (
                <Accordion
                  title={data.title}
                  content={data.content}
                  key={id}
                  deleteHandle={() => this.deleteHandle(id)}
                ></Accordion>
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex w-[100%] h-full transition-all delay-100">
          <div className="flex text-center justify-start flex-col ml-auto mr-auto w-[80vw] h-fit">
            <Navbar>
              <li></li>
              <li
                className="cursor-pointer"
                onClick={() =>
                  this.setState({ darkTheme: !this.state.darkTheme })
                }
              >
                <ToggleButton mode={this.state.darkTheme}></ToggleButton>
              </li>
            </Navbar>
            <h1 className="font-script text-[3.5rem] dark:text-[#AF98FD] select-none">
              Ideon
            </h1>
            <p className="text-[1.3rem] font-sans mb-4 tracking-tighter dark:text-[#AF98FD]">
              <span className="font-script">Ideon</span> is a place to{" "}
              <span className="font-bold">save</span> your ideas.
            </p>

            <Form onSubmitHandle={this.onSubmitHandle}></Form>

            <h1 className="text-[2rem] text-left w-[50%] ml-auto mr-auto mt-5 dark:text-[#AF98FD] font-light">
              Your Ideas:
            </h1>

            {this.state.IdeaList.map((data, id) => {
              return (
                <Accordion
                  title={data.title}
                  content={data.content}
                  key={id}
                  deleteHandle={() => this.deleteHandle(id)}
                ></Accordion>
              );
            })}
          </div>
        </div>
      );
    }
  }
}

export default App;
