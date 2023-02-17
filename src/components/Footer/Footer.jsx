import React from 'react';

export default function Footer() {
  return (
    <footer className="pt-8">
      <nav className="py-4">
        <ul className=" flex flex-col md:flex-row justify-evenly ">
          <li>
            <a
              className="text-red-800"
              href=""
            >
              link
            </a>
          </li>
          <li>
            <a
              className="text-red-800"
              href=""
            >
              link
            </a>
          </li>
          <li>
            <a
              className="text-red-800"
              href=""
            >
              link
            </a>
          </li>
          <li>
            <a
              className="text-red-800"
              href=""
            >
              link
            </a>
          </li>
          <li>
            <a
              className="text-red-800"
              href=""
            >
              link
            </a>
          </li>
        </ul>
      </nav>
      <div className="copyright">
        <p className="text-red-800 text-center">
          &copy; 2023 Hilda Dokubo. All Rights reserved.
        </p>
      </div>
    </footer>
  );
}
