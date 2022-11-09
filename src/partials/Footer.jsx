import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../images/GrammarlyBot-Logo.png';

import NewsletterFormSmall from './NewsletterFormSmall';
import NewsletterSubscribe from './NewsletterSubscribe';

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}
              <Link to="/" className="inline-block" aria-label="Cruip">
                <img height={64} width={64} src={logoImg}/>
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              <a href="https://www.termsandconditionsgenerator.com/live.php?token=kXSWBzVa3y1hqFt2IgZXB0HXGztJeMS4" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Terms</a> · <a href="https://www.privacypolicygenerator.info/live.php?token=7HdVO290HUEOrjyayNQ8n9yMDlT3RBIV" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Privacy Policy</a>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">GrammarlyBot</h6>
            <ul className="text-sm">
              {/* <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Log in</Link>
              </li> */}
              <li className="mb-2">
                <a href="https://github.com/marketplace/grammarly-bot/#pricing-and-setup" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Pricing</a>
              </li>
              <li className="mb-2">
                <a href="https://github.com/apps/grammarly-bot/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Install</a>
              </li>
              <li className="mb-2">
                <a href="mailto:info@grayhat.com.pk?subject=[GrammarlyBot] I want to know more about this project" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Request more info</a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Help</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="https://github.com/Grammarly-Bot/Grammarly-Bot.github.io/issues" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Open an issue</a>
              </li>
              <li className="mb-2">
                <a href="mailto:support@grayhat.com.pk?subject=[GrammarlyBot] I need help" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Contact support</a>
              </li>
              <li className="mb-2">
                {/* <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Documentation</Link> */}
              </li>
              <li className="mb-2">
                {/* <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Read the code</Link> */}
              </li>
            </ul>
          </div>

          {/* 4th block */}
          {/* <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Policies</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Privacy Policy</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Terms of Service</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Incident Response</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Vulnerability Management</Link>
              </li>
            </ul>
          </div> */}

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Subscribe</h6>
            <p className="text-sm text-gray-600 mb-4">Get the latest news and articles to your inbox every month.</p>
            <NewsletterSubscribe FormComponent={NewsletterFormSmall} />
          </div>          

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a href="https://twitter.com/grayhatpk" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a href="https://github.com/grayhatdevelopers" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a href="https://facebook.com/grayhatdevelopers" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">Ⓒ<a className="text-green-600 hover:underline" href="https://grayhat.com.pk/">Grayhat</a>. All rights reserved.</div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
