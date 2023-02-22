import {
  AiOutlineHeart,
  AiOutlineAppstoreAdd,
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineSend,
  AiOutlineCompass,
  AiOutlineVideoCamera,
} from "react-icons/ai";

const DummyData = {
  loginPageLinks: [
    {
      id: 1,
      name: "Log in with Facebook",
    },
  ],
  pcNavbar: [
    {
      id: 1,
      name: "Home",
      icon: <AiOutlineHome />,
      path: "/",
    },
    {
      id: 2,
      name: "Search",
      icon: <AiOutlineSearch />,
      path: "/search",
    },
    {
      id: 3,
      name: "Research",
      icon: <AiOutlineCompass />,
      path: "/research",
    },
    {
      id: 4,
      name: "Videos",
      icon: <AiOutlineVideoCamera />,
      path: "/videos",
    },
    {
      id: 5,
      name: "Messages",
      icon: <AiOutlineSend />,
      path: "/inbox",
    },
    {
      id: 6,
      name: "Notifications",
      icon: <AiOutlineHeart />,
      path: "/notifications",
    },
    {
      id: 7,
      name: "Create",
      icon: <AiOutlineAppstoreAdd />,
      path: "/create",
    },
  ],
};

export default DummyData;
