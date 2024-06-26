"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const SectionTitle = (props: Props) => {
  const { children } = props;
  return (
    <h2 className="text-2xl xs:text-3xl xl:text-4xl 3xl:text-5xl font-medium capitalize">
      {children}
    </h2>
  );
};
export default SectionTitle;
