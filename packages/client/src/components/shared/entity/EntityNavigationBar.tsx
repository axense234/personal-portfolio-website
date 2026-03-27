// SCSS
import entityNavigationBarStyles from "@/scss/components/shared/entity/EntityNavigationBar.module.scss";
// Components
import SortByFormControl from "../form/SortByFormControl";
import TextFormControl from "../form/TextFormControl";
// React
import { FC } from "react";
// Interfaces
import { EntityNavigationBarProps } from "@/core/interfaces";

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
