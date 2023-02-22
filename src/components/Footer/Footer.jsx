import React from 'react';

export default function Footer() {
  const home = 'index.html';
  const about = '#about';
  const bill = '#bill';

  return (
    <footer className=" md:pt-8">
      <nav
        aria-label="footer navigation"
        className="py-4"
      >
        <ul className=" flex justify-around ">
          <li>
            <a
              className="text-sm text-red-800 underline md:text-base"
              href={home}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-sm text-red-800 underline md:text-base"
              href={about}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-sm text-red-800 underline md:text-base"
              href={bill}
            >
              Bills
            </a>
          </li>
          <li>
            <a
              className="text-sm text-red-800 underline md:text-base"
              href=""
            >
              Press
            </a>
          </li>
    
          <li>
            <a
              className="text-sm text-red-800 underline md:text-base"
              href=""
            >
              Privacy policy
            </a>
          </li>
        </ul>
      </nav>
      <div className="copyright">
        <p className="text-center text-sm">
          &copy; 2023 Hilda Dokubo. All Rights reserved.
        </p>
      </div>
    </footer>
  );
}
