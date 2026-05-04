"use client";
// SCSS
import projectsDashboardStyles from "@/scss/components/page/projects/ProjectsDashboard.module.scss";
// Components
import TechIcons from "@/components/shared/entity/tech/TechIcons";
import EntityNavigationBar from "@/components/shared/entity/EntityNavigationBar";
import ProjectCards from "@/components/shared/entity/project/ProjectCards";
import ErrorInterface from "@/components/shared/sections/ErrorInterface";
import LoadingInterface from "@/components/shared/sections/LoadingInterface";
// Zustand
import { useGeneralStore } from "@/zustand/general";
// Helpers
import { queryProjects } from "@/helpers";
// Dum dum
import { useGetWindowWidth, useHandleEntityNavigationBarLogic } from "@/hooks";
// Interfaces
import { SelectOption, SortByFormControlProps } from "@/core/interfaces";

const ProjectsDashboard = () => {
  const {
    projectsQueryData,
    getTechData,
    getProjectsData,
    setProjectsQueryDataKeyValue,
    setProjectsQueryDataSearch,
    setProjectsQueryDataSortBy,
    setProjectsQueryDataSortByOptions,
    setProjectsQueryDataSortByOption,
  } = useGeneralStore((state) => state);

  const {
    isError: isErrorProjects,
    isLoading: isLoadingProjects,
    projects,
  } = getProjectsData;
  const { isError: isErrorTech, isLoading: isLoadingTech } = getTechData;

  const { search, sortBy, filterValues } = projectsQueryData;

  const windowWidth = useGetWindowWidth();
  const searchFormControlFlow =
    windowWidth && windowWidth <= 600 ? "column" : "row";

  const filterFormControlData: SortByFormControlProps = {
    scope: "filter",
    sortingOptions:
      filterValues?.length > 0
        ? `You have ${filterValues?.length} technology filters applied.`
        : "",
    onAddSortingOption: () => {},
    onRemoveSortingOption: () => {},
  };

  const searchFormControlData = search.searchFormControlData(
    search.current,
    (value: string) => setProjectsQueryDataSearch(value),
  );

  const sortByOptions: SelectOption[] = [
    { label: "Name", value: "name", specifier: "string" },
    { label: "Creation Date", value: "createdAt", specifier: "date" },
    { label: "Update Date", value: "updatedAt", specifier: "date" },
  ];

  useHandleEntityNavigationBarLogic(
    sortByOptions,
    setProjectsQueryDataSortBy,
    setProjectsQueryDataSortByOptions,
    setProjectsQueryDataSortByOption,
  );

  if (isErrorProjects) {
    return <ErrorInterface isError={isErrorProjects} />;
  }

  if (isErrorTech) {
    return <ErrorInterface isError={isErrorTech} />;
  }

  if (isLoadingProjects) {
    return (
      <LoadingInterface
        isLoading={isLoadingProjects}
        message="Loading Projects..."
      />
    );
  }

  if (isLoadingTech) {
    return (
      <LoadingInterface isLoading={isLoadingTech} message="Loading Tech..." />
    );
  }

  const shownProjects = queryProjects(
    projects,
    filterValues,
    sortBy,
    search.current,
  );

  return (
    <div className={projectsDashboardStyles.container}>
      <TechIcons
        isFunctional
        onTechIconClick={(id: string) => {
          const isTechSelected = filterValues.includes(id);

          setProjectsQueryDataKeyValue(
            "filterValues",
            isTechSelected
              ? [...filterValues.filter((t) => t !== id)]
              : [...filterValues.concat(id)],
          );
        }}
        isFancy
        selectedTech={filterValues}
      />
      <div className={projectsDashboardStyles.content}>
        <EntityNavigationBar
          search={{ ...searchFormControlData, flow: searchFormControlFlow }}
          sort={sortBy}
          filter={filterFormControlData}
        />
        <ProjectCards projects={shownProjects} useGrid={false} />
      </div>
    </div>
  );
};

export default ProjectsDashboard;
