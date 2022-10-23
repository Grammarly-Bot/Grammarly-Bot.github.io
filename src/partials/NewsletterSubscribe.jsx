import React from 'react';

import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterForm from './NewsletterForm';

// A slightly modified version of: https://imranhsayed.medium.com/adding-mailchimp-subscribe-newsletter-in-next-js-react-application-7c776daae710

const NewsletterSubscribe = ({FormComponent}) => {

  if (!FormComponent) FormComponent = NewsletterForm;

  const MAILCHIMP_URL = import.meta.env.VITE_PUBLIC_MAILCHIMP_URL;

  console.log("MAILCHIMP_URL", MAILCHIMP_URL);

  if (!MAILCHIMP_URL) return <></>

  return (
    <MailchimpSubscribe
      url={ MAILCHIMP_URL }
      render={ ( props ) => {
        const { subscribe, status, message } = props || {};
        return (
            React.createElement(FormComponent, {
                status: status,
                message: message,
                onValidated: formData => {
                    console.log("formData:", formData);
                    subscribe(formData);
                }
            })
        );
      } }
    />
  );
};

export default NewsletterSubscribe;