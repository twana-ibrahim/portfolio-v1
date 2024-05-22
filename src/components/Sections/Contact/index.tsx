"use client";

import { ChangeEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

import SectionTitle from "@/components/SectionTitle";
import InputContainer from "@/components/InputContainer";

import { useSectionInView } from "@/shared/hooks/useSectionInView";
import { contactFormIsValidation } from "@/lib/validations";
import {
  ContactForm,
  contactFormInitialValues,
  contactVariants,
} from "@/shared/constants/contact";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  const [form, setForm] = useState<ContactForm>(contactFormInitialValues);

  const onChangeInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: {
        value,
        isDirty:
          value !==
          contactFormInitialValues?.[name as keyof ContactForm]?.value,
      },
    }));
  };

  const { errors, isValid, isDirtyForm } = useMemo(() => {
    const isDirtyForm = form?.email?.isDirty || form?.message?.isDirty;

    return { ...contactFormIsValidation(form), isDirtyForm };
  }, [form]);

  // TODO: complete sending message functionality
  return (
    <motion.section
      id="contact"
      ref={ref}
      variants={contactVariants.wrapper}
      initial="initial"
      whileInView="animate"
      className="py-10 sm:py-3 lg:py-20 px-5 xs:px-6 sm:px-10 md:px-0 md:w-2/3 lg:w-4/5 xl:w-3/4 2xl:w-2/3 3xl:max-w-[70rem] md:mx-auto scroll-mt-20 md:scroll-mt-28 flex flex-col justify-center items-center gap-6 xs:gap-10 sm:gap-6 md:gap-10 xl:gap-8 3xl:gap-12"
    >
      <SectionTitle>Contact Me</SectionTitle>

      <div className="grid lg:grid-cols-2 items-center gap-12">
        <motion.p
          variants={contactVariants.child}
          custom={1}
          className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl 3xl:text-4xl font-semibold sm:font-medium relative mx-6 sm:mx-4"
        >
          <span className="font-bold text-5xl md:text-6xl 3xl:text-7xl absolute -left-6 md:-left-7 -top-3 sm:-top-2 md:-top-3 lg:-top-4">
            “
          </span>
          If you have any question in tech area especially in the Web
          development field, do not hesitate to reach out.
          <span className="font-bold text-5xl md:text-6xl 3xl:text-7xl absolute -bottom-8 md:-bottom-11 lg:-bottom-10 xl:-bottom-11 3xl:-bottom-[52px]">
            ”
          </span>
        </motion.p>

        <motion.form
          variants={contactVariants.child}
          custom={2}
          className="flex flex-col gap-y-5 lg:gap-y-4 3xl:gap-y-6"
          noValidate
        >
          <InputContainer error={form?.email?.isDirty ? errors?.email : ""}>
            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              onChange={onChangeInput}
              minLength={1}
              maxLength={50}
              required
              className={`h-10 md:h-12 2xl:h-14 px-2 xl:px-4 py-1 xl:py-2 rounded-lg 2xl:text-lg 3xl:text-xl border border-brand/50 focus:border-brand focus:outline-none focus:shadow-input ${
                errors?.email
                  ? "border-red-600 focus:border-red-600 focus:shadow-red-600"
                  : ""
              }`}
            />
          </InputContainer>

          <InputContainer error={form?.message?.isDirty ? errors?.message : ""}>
            <textarea
              rows={7}
              placeholder="Write your message*"
              onChange={onChangeInput}
              minLength={1}
              required
              className={`resize-none px-2 xl:px-4 py-1 xl:py-2 rounded-lg 2xl:text-lg 3xl:text-xl border border-brand/50 focus:border-brand focus:outline-none focus:shadow-input ${
                errors?.message
                  ? "border-red-600 focus:border-red-600 focus:shadow-red-600"
                  : ""
              }`}
            />
          </InputContainer>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={!isValid || !isDirtyForm}
              className="relative border border-brand bg-brand disabled:bg-brand/75 hover:scale-110 disabled:hover:scale-100 transition text-white text-lg 2xl:text-xl 3xl:text-2xl text-left font-bold min-w-32 3xl:min-w-36 py-1 px-4 rounded-lg"
            >
              Send
              <FaPaperPlane className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-4xl" />
            </button>
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
};
export default Contact;
