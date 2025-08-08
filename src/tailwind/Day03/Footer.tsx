import { HeartFilled } from "@ant-design/icons";
import React from "react";

function Footer() {
  return (
    <footer className="bg-purple-200 px-4 py-2">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row justify-center items-center md:justify-between text-purple-400">
        <p>(this is not a real site)</p>
        <p>
          Made with <HeartFilled /> and{" "}
          <a href="#" className="underline">
            Tailwind CSS
          </a>
        </p>
        <p>Footer</p>
      </div>
    </footer>
  );
}

export default Footer;
