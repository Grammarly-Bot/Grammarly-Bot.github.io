import { useState } from 'react';
import { decode } from 'html-entities';

const NewsletterForm = ({ status, message, onValidated }) => {

    const [error, setError] = useState(null);
    const [email, setEmail] = useState(null);

    /**
     * Handle form submit.
     *
     * @return {{value}|*|boolean|null}
     */
    const handleFormSubmit = (e) => {

        try {
            e.preventDefault();
        }
        catch(err) {console.log(err)};

        setError(null);

        if (!email) {
            setError('Please enter a valid email address');
            return null;
        }

        const isFormValidated = onValidated({ EMAIL: email });

        // On success return true
        return email && email.indexOf("@") > -1 && isFormValidated;
    }

    /**
     * Handle Input Key Event.
     *
     * @param event
     */
    const handleInputKeyEvent = (event) => {
        setError(null);
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            handleFormSubmit();
        }
    }

    /**
     * Extract message from string.
     *
     * @param {String} message
     * @return {null|*}
     */
    const getMessage = (message) => {
        if (!message) {
            return null;
        }
        const result = message?.split('-') ?? null;
        if ("0" !== result?.[0]?.trim()) {
            return decode(message);
        }
        const formattedMessage = result?.[1]?.trim() ?? null;
        return formattedMessage ? decode(formattedMessage) : null;
    }

    return (
        <>
        <form onSubmit={handleFormSubmit}>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                <fieldset className="mc-field-group">
                  <label className="block text-sm sr-only" htmlFor="newsletter">Email</label>
                  <div className="relative flex items-center max-w-xs">
                    <input id="newsletter" type="email" 
                                                onChange={(event) => setEmail(event?.target?.value ?? '')}
                                                onKeyUp={(event) => handleInputKeyEvent(event)}
                    
                    className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm" placeholder="Your email" required />
                    <button type="submit" className="absolute inset-0 left-auto button-wrap wp-block-button" aria-label="Subscribe">
                      <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
                      <svg className="w-3 h-3 fill-current text-green-600 mx-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                      </svg>
                    </button>
                  </div>
                    </fieldset>

                  <div className="newsletter-form-info mt-2 text-green-600 text-sm">
                    {status === "sending" && <div className='opacity-50'>Sending...</div>}
                    {status === "error" || error ? (
                        <div
                            className="newsletter-form-error text-red-600"
                            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
                        />
                    ) : null}
                    {status === "success" && status !== "error" && !error && (
                        <div dangerouslySetInnerHTML={{ __html: decode(message) }} />
                    )}
                </div>                  
                </div>
              </div>
            </form>
        </>
    );
}

export default NewsletterForm