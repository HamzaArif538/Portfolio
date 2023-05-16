import {
    SiSimpleanalytics,
    SiMicrostrategy,
    SiGooglemarketingplatform,
  } from "react-icons/si";
  import { FaCloud,  } from 'react-icons/fa';
  import { FaCode } from 'react-icons/fa';
  import { AiFillMail, AiOutlineMail, AiOutlineShoppingCart } from 'react-icons/ai'

  import { CgWebsite } from "react-icons/cg";
  import { MdOutlineDeveloperMode } from "react-icons/md";
  import { GoReport } from "react-icons/go";
  import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
  import image1 from "../images/1.png";
  import image2 from "../images/2.png";
  import image3 from "../images/3.png";
  
  export const navigation = [
    { name: "Home", href: "#", id: "home" },
    { name: "About", href: "#", id: "about" },
    { name: "Services", href: "#", id: "services" },
    { name: "Portfolio", href: "#", id: "portfolio" },
    // { name: "Team", href: "#", id: "team" },
  ];
  
  export const aboutMeData = [
    {
      id: 1,
      bio: "A React developer with over 2 years of experience in front-end development. I've worked extensively with AWS, Git, and GitHub, and now I'm expanding my skills to include back-end development using Node.js. I'm passionate about creating innovative solutions and paying close attention to detail, and I excel at delivering high-quality code and collaborating with my team members to ensure project success. I'm constantly seeking new learning opportunities to grow as a developer and contribute to the success of any team I'm a part of.",
    },
    {
      id: 2,
      bio: "In addition to my technical skills, I have experience in leadership and volunteering. As the Google Developers Student Club Management Lead, I successfully managed and organized events to educate and empower students in the field. Additionally, as an event manager for the Software Engineering Society at MUST, I coordinated various events, including lectures and seminars, to foster community engagement and professional development.",
    },
  ];
  
  export const counterData = [
    {
      id: "experienceCounter",
      title: "Years of experience",
      measurement: "+",
    },
    {
      id: "certifications",
      title: "No. of Certifications",
      measurement: "",
    },
    // {
    //   id: "feedbackCounter",
    //   title: "Positive feedback",
    //   measurement: "%",
    // },
    // {
    //   id: "projectsCounter",
    //   title: "Projects Completed",
    //   measurement: "%",
    // },
  ];
  
  export const servicesData = [
    {
      title: "Front-End Development",
      subtitle:
        "I will create responsive Front-End Website using React js for you",
    },
    {
      title: "Cloud Hosting",
      subtitle:
        "I will host your website on cloud platform for you",
    },
    {
      title: "Website Development",
      subtitle:
        "I will create a Full Stack Website either with Node js or Django for you",
    },
    {
      title: "E-commerce Development",
      subtitle:
        "I will build a fully functional E-commerce website for you with payment method included.",
    },
    // {
    //   // icon: <MdOutlineDeveloperMode color={getCurrentColor} size={60} />,
    //   title: "Website Development",
    //   subtitle:
    //     "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    // },
    // {
    //   title: "Website Development",
    //   subtitle:
    //     "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    // },
  ];
  
  export const getIcons = (getCurrentColor) => {
    return [
      <FaCode size={60} color={getCurrentColor} />,
      <FaCloud size={60} color={getCurrentColor} />,
      <CgWebsite color={getCurrentColor} size={60} />,
      <AiOutlineShoppingCart size={60} color={getCurrentColor} />,
      // <SiSimpleanalytics size={60} color={getCurrentColor} />,
      // <MdOutlineDeveloperMode color={getCurrentColor} size={60} />,
      // <SiGooglemarketingplatform color={getCurrentColor} size={60} />,
      // <GoReport size={60} color={getCurrentColor} />,
      // <SiMicrostrategy size={60} color={getCurrentColor} />,
    ];
  };
  
  export const projects = [
    {
      image: image1,
      title: "Dashboard",
      subtitle: "Created a dashboard using React",
    },
    {
      image: image2,
      title: "WanderTales",
      subtitle: "A travel website showing the beauty of Pakistan",
    },
    {
      image: image3,
      title: "Amazon Clone",
      subtitle: "A functional front-end amazon clone made using React",
    },
    // {
    //   image: image1,
    //   title: "ANALYTICS",
    //   subtitle: "Getting tickets to the big show",
    // },
  ];
  
  export const contactControls = [
    {
      id: "name",
      placeholder: "Your Name",
      name: "from_name",
      type: "text",
      inputType: "input",
      className:
        "w-full bg-black text-textColor mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline",
      divClassName: "",
    },
    {
      id: "email",
      placeholder: "Your Email Address",
      type: "text",
      inputType: "input",
      name: "from_email",
      className:
        "w-full bg-black text-textColor mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline",
      divClassName: "mt-8",
    },
    {
      id: "message",
      placeholder: "Your Message",
      type: "text",
      inputType: "textArea",
      name: "message",
      divClassName: "mt-8",
      className:
        "w-full sm:h-[6.5rem] bg-black lg:h-[14.5rem] md:h-[7.5rem]  text-textColor mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline",
    },
  ];
  
  export const footerIcons = [
    {
      icon: <FaGithub size={"30px"} />,
      link: "https://github.com/HamzaArif538"
    },
    {
      icon: <FaLinkedin size={"30px"} />,
      link: "https://www.linkedin.com/in/hamza-arif1/"
    },
    {
      icon: <FaTwitter size={"30px"} />,
      link: "https://twitter.com/__sardarhamza"
    },
    {
      icon: <AiOutlineMail size={"30px"} />,
      link: "mailto:sardarhamza538@gmail.com"
    },
  ];

  