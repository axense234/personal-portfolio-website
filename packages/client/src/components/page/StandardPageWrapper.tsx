// React
import { FC } from "react";
// SCSS
import standardPageWrapperStyles from "@/scss/components/page/StandardPageWrapper.module.scss";

const StandardPageWrapper: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <section className={standardPageWrapperStyles.container}>
      {children}
    </section>
  );
};

export default StandardPageWrapper;
