import React from "react";

const Skils = () => {
  const skills = [
    { name: "HTML", icon: "html.png" },
    { name: "CSS", icon: "css.png" },
    { name: "JavaScript", icon: "js.png" },
    { name: "React JS", icon: "react.png" },
    { name: "GitHub", icon: "git.png" },
    { name: "Node JS", icon: "node.png" },
    { name: "Firebase", icon: "fir.png" },
    { name: "MongoDB", icon: "mongo.png" },
    { name: "VScode", icon: "vs.png" },
  ];

  return (
    <div className=" bg-gray-200 text-white p-8 flex">
      <div className="flex-grow">
        <h1 className="text-4xl text-center text-[#8c4a2c] font-normal ">
          About Skils
        </h1>
        <hr class="border-t-2 border-gray-300 w-1/5 mx-auto" />
        <p className="mb-8 text-gray-500 text-xl mt-8">
          I am from India and currently living in Mohali. I am doing Bachelor's
          in Software Engineering and will post graduate in the year 2021. I am
          a front end devlper and currently working as a Hoping mind`s.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 my-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md hover:bg-gray-400"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="h-20 w-24 mb-2"
              />
              <span className="text-gray-600 text-sm font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skils;
