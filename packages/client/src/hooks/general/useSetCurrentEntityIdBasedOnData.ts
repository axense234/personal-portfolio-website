// React
import { useEffect } from "react";
// Types
import { GetProjectsDataType } from "@/core/types";

export const useSetCurrentEntityIdBasedOnData = (
  data: GetProjectsDataType,
  currentEntityId: string,
  setCurrentEntityId: (id: string) => void,
) => {
  useEffect(() => {
    if (data?.projects.length > 0 && !currentEntityId) {
      setCurrentEntityId(data?.projects[0]?.id);
    }
  }, [data]);
};
