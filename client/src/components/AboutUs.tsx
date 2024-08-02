import React from 'react';

const teamMembers = [
  {
    name: "Abhinav Gupta",
    title: "Frontend Developer & Project Manager",
    description:
      "I serve as the frontend developer and project manager for this initiative. My passion for technology drives my desire to create seamless user experiences. I oversee the development process and ensure that our projects are executed efficiently and effectively.",
    image: "/Ellipse 22.svg",
  },
  {
    name: "Ashwin",
    title: "Backend Developer",
    description:
      "I am the backend developer for this project. I focus on creating a robust and scalable infrastructure to support our applications. My goal is to ensure that our backend systems are efficient and reliable.",
    image: "/Ellipse 22.svg",
  },
  {
    name: "Ansh Jain",
    title: "Frontend Developer & Product Designer",
    description:
      "I am responsible for the frontend development and product design. I enjoy creating visually appealing and user-friendly interfaces. My experience in product design helps us build intuitive and engaging applications.",
    image: "/Ellipse 23.svg",
  },
  {
    name: "Priyanshu",
    title: "Frontend Developer",
    description:
      "I am a frontend developer for our platform. I specialize in creating interactive and dynamic user interfaces. My goal is to enhance the user experience through thoughtful design and development.",
    image: "/Ellipse 24.svg",
  },
];

function AboutUs() {
  return (
    <div className="bg-black text-white min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">ABOUT US</h1>
        <h5 className="text-lg md:text-xl text-center text-yellow-400 mb-12">
          We are developers of CODECAP
        </h5>
        <p className="text-base md:text-xl mb-8 text-center">
          We are a team of five enthusiastic college students who share a
          passion for technology, innovation, and collaboration. Recognizing the
          challenges that students face in finding the{" "}
          <span className="text-yellow-400">
            right teammates for hackathons
          </span>{" "}
          and staying{" "}
          <span className="text-yellow-400">updated on the latest events</span>,
          we decided to create a platform that addresses these needs.
        </p>
        <p className="text-base md:text-xl mb-16 text-center">
          Our website is designed to help college students connect with
          like-minded peers, form teams for hackathons, and discover exciting
          hackathon opportunities. We believe that by fostering a community of
          motivated and talented individuals, we can enhance the learning
          experience and drive innovation within our college and beyond.
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">MEET OUR TEAM</h2>
        <div className="bg-black p-4 md:p-6 mb-8 rounded-xl text-center border-2 border-white">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <img
              className="w-32 h-32 md:w-56 md:h-56 object-cover rounded-full mb-4 md:mb-0"
              src="/Rectangle.svg"
              alt="Kartik Singh"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-4xl font-bold mb-2">Kartik Singh</h3>
              <p className="text-yellow-400 mb-2 font-semibold text-lg md:text-xl underline">
                Founder & UI/UX Designer
              </p>
              <p className="text-base md:text-lg">
                I am the originator of the idea behind our platform. With the
                support of my capable team, I transformed this vision into
                reality. I designed the UI/UX of the website to ensure an
                intuitive and seamless user experience. Additionally, I created
                and nurtured the community of Codecap, bringing together
                passionate and talented students to collaborate and innovate
                through hackathons.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-black p-4 md:p-6 rounded-xl text-center border-2 border-white"
            >
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                {member.image && (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 md:w-36 md:h-36 object-cover rounded-full mb-4 md:mb-0"
                  />
                )}
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-yellow-400 font-semibold mb-2 text-lg md:text-xl underline">
                    {member.title}
                  </p>
                  <p className="text-base md:text-lg mt-4">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-yellow-400">THANK YOU</span> FOR YOUR SUPPORT
          </h2>
          <p className="mb-6 text-base md:text-xl font-semibold">
            If you <span className="text-yellow-400">liked</span> our hard work
            and tool, you can show us support by
            <span className="text-yellow-400">donating</span> to us. It will
            help us to{" "}
            <span className="text-yellow-400">maintain this website</span> and
            take it globally.
          </p>
          <button className="bg-yellow-400 text-black py-2 px-4 rounded-lg text-base md:text-xl">
            BUY US A COFFEE
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
