// React
import { FC } from "react";
// Interfaces
import { EntityNavigationDotsProps } from "@/core/interfaces";
// SCSS
import entityNavigationDotsStyles from "@/scss/components/shared/EntityNavigationDots.module.scss";

const EntityNavigationDots: FC<EntityNavigationDotsProps> = ({
  currentEntityId,
  entityIds,
  setCurrentEntityId,
  useCase,
}) => {
  return (
    <ul className={entityNavigationDotsStyles[useCase]}>
      {entityIds?.map((id) => {
        return (
          <li
            key={id}
            onClick={() => setCurrentEntityId(id)}
            style={{ backgroundColor: currentEntityId === id ? "red" : "gray" }}
          />
        );
      })}
    </ul>
  );
};

export default EntityNavigationDots;
