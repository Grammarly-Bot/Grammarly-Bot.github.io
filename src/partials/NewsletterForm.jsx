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

        e.preventDefault();

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
            <form className="w-full lg:w-auto" onSubmit={handleFormSubmit}>
                <div className="flex flex-col sm:flex-row justify-start max-w-xs mx-auto sm:max-w-md lg:mx-0 newsletter-input-fields">
                    <fieldset className="mc-field-group">
                        <input
                            onChange={(event) => setEmail(event?.target?.value ?? '')}
                            type="email"
                            onKeyUp={(event) => handleInputKeyEvent(event)}
                            placeholder="Your email…" aria-label="Your email…"
                            required
                            className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500"
                        />
                    </fieldset>

                    <div className="button-wrap wp-block-button">
                        <input
                            type="submit"
                            style={{ cursor: "pointer" }}
                            className="btn text-white bg-green-600 hover:bg-green-700 shadow wp-block-button__link"
                            placeholder='Subscribe'
                            // onClick={handleFormSubmit}

                        />
                    </div>
                </div>

                <div className="newsletter-form-info mt-4">
                    {status === "sending" && <div className='text-white opacity-50'>Sending...</div>}
                    {status === "error" || error ? (
                        <div
                            className="newsletter-form-error text-red"
                            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
                        />
                    ) : null}
                    {status === "success" && status !== "error" && !error && (
                        <div className="text-white" dangerouslySetInnerHTML={{ __html: decode(message) }} />
                    )}
                </div>

                <p className="text-sm text-gray-400 mt-3">Free for open source repos ❤️</p>
            </form>
        </>
    );
}

export default NewsletterForm