import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  const FORM_URL = `https://embeds.beehiiv.com/5ef0968d-7c14-4fe4-9222-5445b5fdc822`

  return (
    <>
      <MailchimpSubscribe
        url={FORM_URL}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            />
        )}
        />
    </>
  )
}
