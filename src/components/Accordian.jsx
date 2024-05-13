import { useState } from "react";

const Accordion = () => {
  const [selected, setSelected] = useState("");

  const handleSingleSecection = (id) => {
    setSelected(id === selected ? "" : id);
  };
  return (
    <div className="flex h-screen justify-center items-center px-2 ">
      <div className="w-full max-w-lg flex flex-col gap-2 ">
        {accordionData?.map((item) => (
          <div className="cursor-pointer" key={item?.id} onClick={() => handleSingleSecection(item?.id)}>
            <div className="bg-[#153448] p-5 max-w-lg text-white rounded-md">
              <div className="flex justify-between min-w-full text-xl">
                {item?.title} <span> {selected === item?.id ? "-" : "+"} </span>
              </div>
              <div
                className={`transition-all duration-500  overflow-hidden ${
                  selected === item?.id ? "max-h-screen" : "max-h-0"
                }`}
              >
                {item?.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;

const accordionData = [
  {
    id: crypto.randomUUID(),
    title: "Introduction to React",
    content:
      "Learn the basics of ReactJS, including what it is, how it works, and why it's used. Topics include virtual DOM, components, JSX syntax, and more.",
  },

  {
    id: crypto.randomUUID(),
    title: "Creating Components",
    content:
      "Understand how to create React components, including functional components and class components. Explore component lifecycle methods, props, and state management.",
  },
  {
    id: crypto.randomUUID(),
    title: "State Management with Redux",
    content:
      "Dive into state management in React using Redux. Learn how to set up Redux in a React application, create actions, reducers, and connect components to the Redux store.",
  },
  {
    id: crypto.randomUUID(),
    title: "Routing with React Router",
    content:
      "Explore client-side routing in React using React Router. Learn how to set up routes, handle navigation, and pass parameters to components.",
  },
];
