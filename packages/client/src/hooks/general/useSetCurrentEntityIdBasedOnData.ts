// React
import { useEffect } from "react";
// Types
import { GetEntitiesDataType } from "@/core/types";

export const useSetCurrentEntityIdBasedOnData = (
  data: GetEntitiesDataType,
  currentEntityId: string,
  setCurrentEntityId: (id: string) => void,
) => {
  useEffect(() => {
    if (data?.entities.length > 0 && !currentEntityId) {
      setCurrentEntityId(data?.entities[0]?.id);
    }
  }, [data]);
};
