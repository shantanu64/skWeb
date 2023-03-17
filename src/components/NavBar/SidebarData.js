import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsInfoSquareFill } from "react-icons/bs";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import {FaNewspaper} from "react-icons/fa"
import {SiEventstore} from "react-icons/si"
import {BiSupport} from "react-icons/bi"

export const SidebarData = [
  //   {
  //     title: "About Us",
  //     path: "/about-us",
  //     icon: <AiIcons.AiFillHome />,
  //     iconClosed: <RiIcons.RiArrowDownSFill />,
  //     iconOpened: <RiIcons.RiArrowUpSFill />,

  //     subNav: [
  //       {
  //         title: "Our Aim",
  //         path: "/about-us/aim",
  //         icon: <IoIcons.IoIosPaper />,
  //       },
  //       {
  //         title: "Our Vision",
  //         path: "/about-us/vision",
  //         icon: <IoIcons.IoIosPaper />,
  //       },
  //     ],
  //   },
  //   {
  //     title: "Services",
  //     path: "/services",
  //     icon: <IoIcons.IoIosPaper />,
  //     iconClosed: <RiIcons.RiArrowDownSFill />,
  //     iconOpened: <RiIcons.RiArrowUpSFill />,

  //     subNav: [
  //       {
  //         title: "Service 1",
  //         path: "/services/services1",
  //         icon: <IoIcons.IoIosPaper />,
  //         cName: "sub-nav",
  //       },
  //       {
  //         title: "Service 2",
  //         path: "/services/services2",
  //         icon: <IoIcons.IoIosPaper />,
  //         cName: "sub-nav",
  //       },
  //       {
  //         title: "Service 3",
  //         path: "/services/services3",
  //         icon: <IoIcons.IoIosPaper />,
  //       },
  //     ],
  //   },
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome style={{ color: "white" }} />,
  },
  {
    title: "About Us",
    path: "/aboutUs",
    icon: <BsInfoSquareFill style={{ color: "white" }} />,
  },
  {
    title: "Services",
    path: "/services",
    icon: <MdOutlineMiscellaneousServices style={{ color: "white" }} />,
  },
  {
    title: "News",
    path: "",
    icon: <FaNewspaper style={{ color: "white" }} />,
  },
  //   {
  //     title: "Events",
  //     path: "/events",
  //     icon: <FaIcons.FaEnvelopeOpenText />,

  //     iconClosed: <RiIcons.RiArrowDownSFill />,
  //     iconOpened: <RiIcons.RiArrowUpSFill />,

  //     subNav: [
  //       {
  //         title: "Event 1",
  //         path: "/events/events1",
  //         icon: <IoIcons.IoIosPaper />,
  //       },
  //       {
  //         title: "Event 2",
  //         path: "/events/events2",
  //         icon: <IoIcons.IoIosPaper />,
  //       },
  //     ],
  //   },
  {
    title: "Events",
    path: "",
    icon: <SiEventstore style={{ color: "white" }} />,
  },
  {
    title: "Contact Us",
    path: "/contactUs",
    icon: <BiSupport style={{ color: "white" }} />,
  },
];
