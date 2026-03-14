// SCSS
import entityNavigationBarStyles from "@/scss/components/shared/EntityNavigationBar.module.scss";
// Components
import SortByFormControl from "./SortByFormControl";
// React
import { FC } from "react";
// Interfaces
import { EntityNavigationBarProps } from "@/core/interfaces";
// Components
import TextFormControl from "./TextFormControl";

const EntityNavigationBar: FC<EntityNavigationBarProps> = ({
  filter,
  sort,
  search,
}) => {
  return (
    <div className={entityNavigationBarStyles.container}>
      {sort && <SortByFormControl {...sort} />}
      {search && <TextFormControl {...search} />}
      {filter && <SortByFormControl {...filter} />}
    </div>
  );
};

export default EntityNavigationBar;
