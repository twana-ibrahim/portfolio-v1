import { ContactForm } from "@/shared/constants/contact";

export const contactFormIsValidation = (form: ContactForm) => {
  const { email, message } = form;

  const isEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/.test(
    email?.value
  );

  const emailError = email?.isDirty && !isEmail ? "Enter a valid email!" : "";

  const messageError =
    message?.isDirty && message?.value?.length > 200
      ? "Message must be less than 200 characters!"
      : "";

  return {
    isValid: emailError?.length === 0 && messageError?.length === 0,
    errors: { email: emailError, message: messageError },
  };
};
