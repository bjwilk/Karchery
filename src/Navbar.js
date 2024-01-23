import { Fragment } from "react";
import styled from "styled-components";
import eba from "./img/eba.jpg";



const Logo = styled.img`
  display: block;
  width: 100px; /* Adjust the width as per your preference */
  height: auto; /* Automatically adjust the height to maintain aspect ratio */
  margin-left: auto; /* Move the image to the right side */
  padding: 10px;
`;

export default function Navbar() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="/"
                  className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                >
                  <Logo src={eba} alt="logo" />
                </a>
              </div>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex items-center"></div>
          </div>
          <div className="-mr-2 flex sm:hidden"></div>
        </div>
      </div>
    </>
  );
}
