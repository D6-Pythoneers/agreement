import React from "react";

export default function Footer() {
  return (
    <nav id="footer" className="bg-gray-800">
      <div className="container pt-8 pb-4 mx-auto">
        <div className="flex flex-wrap overflow-hidden sm:-mx-1 md:-mx-px lg:-mx-2 xl:-mx-2">
          <div className="w-full pb-6 overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4"></div>

          <div className="w-full pb-6 overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4">
            <h4 className="text-white">Important</h4>
            <ul className="nav navbar-nav">
              <li id="navi-2" className="text-sm leading-7">
                <a className="text-white underline text-small" href="/page-1">
                  Page 1{" "}
                </a>
              </li>
              <li id="navi-1" className="text-sm leading-7">
                <a className="text-white underline text-small" href="/page-2">
                  Page 2
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full pb-6 overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4">
            <h4 className="text-white">Info</h4>
            <ul className="">
              <li id="navi-2" className="text-sm leading-7">
                <a className="text-white underline text-small" href="/page-1">
                  Page 1{" "}
                </a>
              </li>
              <li id="navi-1" className="text-sm leading-7">
                <a className="text-white underline text-small" href="/page-2">
                  Page 2
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full pb-6 overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4">
            <h4 className="text-white">Products</h4>
            <ul className="">
              <li id="navi-2" className="text-sm leading-7">
                <a className="text-white underline text-small" href="/page-1">
                  Page 1{" "}
                </a>
              </li>
              <li id="navi-1" className="text-sm leading-7">
                <a className="text-white underline text-small" href="/page-2">
                  Page 2
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-4 md:flex md:items-center md:justify-center "
          style={{ borderTop: "1px solid white" }}
        >
          <ul className="">
            <li
              className="text-sm leading-7 md:mx-2 md:inline"
              id="footer-navi-2"
            >
              <a className="text-white underline text-small" href="/disclaimer">
                Disclaimer
              </a>
            </li>
            <li
              className="text-sm leading-7 md:mx-2 md:inline"
              id="footer-navi-2"
            >
              <a className="text-white underline text-small" href="/cookie">
                Cookie policy
              </a>
            </li>
            <li
              className="text-sm leading-7 md:mx-2 md:inline"
              id="footer-navi-2"
            >
              <a className="text-white underline text-small" href="/privacy">
                Privacy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}