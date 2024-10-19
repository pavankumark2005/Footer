import React from "react";
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import Link from "next/link";

// Define your icons data
const ICONS = [
  { name: "logo-facebook", link: "https://www.facebook.com" },
  { name: "logo-twitter", link: "https://www.twitter.com" },
  { name: "logo-instagram", link: "https://www.instagram.com" },
];

const RESOURCES = [
  { name: "Health Tips", link: "/health-tips" }, // Ensure the route matches your file structure
  { name: "Patient Stories", link: "/patient-stories" },
  { name: "Blog", link: "/blog" },
  { name: "FAQs", link: "/faq" },
  { name: "Events & Workshops", link: "/vents" }, // Use a valid URL format
];

const ABOUT = [
  { name: "Our Mission", link: "/our-mission" },
  { name: "Team", link: "/team" },
  { name: "News", link: "/news" },
  { name: "Community Outreach", link: "/community-outreach" }, // Ensure correct route
];

const SUPPORT = [
  { name: "Patient Support", link: "/patient-support" }, // Ensure correct route
  { name: "Insurance Information", link: "/insurance-information" },
  { name: "Feedback", link: "/feedback" },
  { name: "Contact Us", link: "/contect-us" },
];

// Item component to display links
const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-1 font-semibold">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <Link href={link.link} className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6">
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

// SocialIcons component to display social media icons
const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-teal-500">
      {Icons.map((icon) => {
        let IconComponent;

        switch (icon.name) {
          case "logo-facebook":
            IconComponent = IoLogoFacebook;
            break;
          case "logo-twitter":
            IconComponent = IoLogoTwitter;
            break;
          case "logo-instagram":
            IconComponent = IoLogoInstagram;
            break;
          default:
            IconComponent = null;
        }

        return IconComponent ? (
          <Link href={icon.link} key={icon.name} aria-label={`Link to ${icon.name}`}>
            <span
              className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300"
            >
              <IconComponent />
            </span>
          </Link>
        ) : null;
      })}
    </div>
  );
};

// Footer component that brings everything together
const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-gray-900 py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-teal-400">Stay</span> healthy with expert tips
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-medium rounded-md text-white md:w-auto w-full">
            Get the code
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
        <Item Links={RESOURCES} title="RESOURCES" />
        <Item Links={ABOUT} title="ABOUT US" />
        <Item Links={SUPPORT} title="SUPPORT" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
        <span>© 2024 Healthone Center. All rights reserved.</span>
        <span>Terms . Privacy Policy</span>
        <SocialIcons Icons={ICONS} />
      </div>
    </div>
  );
};

export default Footer;
