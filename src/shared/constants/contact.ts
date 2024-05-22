export const contactVariants = {
  wrapper: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  },
  child: {
    initial: (i = 1) => ({
      x: i % 2 === 0 ? 100 : -100,
    }),
    animate: {
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  },
};

type FormInput = {
  value: string;
  isDirty: boolean;
};

export type ContactForm = {
  email: FormInput;
  message: FormInput;
};

export const contactFormInitialValues: ContactForm = {
  email: { value: "", isDirty: false },
  message: { value: "", isDirty: false },
};
