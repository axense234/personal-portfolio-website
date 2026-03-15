// SCSS
import projectsDashboardStyles from "@/scss/components/page/projects/ProjectsDashboard.module.scss";
// Components
import TechIcons from "@/components/shared/TechIcons";
import EntityNavigationBar from "@/components/shared/EntityNavigationBar";
import ProjectCards from "@/components/shared/ProjectCards";
// Zustand
import { useGeneralStore } from "@/zustand/general";
// Helpers
import { queryProjects } from "@/helpers";
// Dum dum
import { useHandleDumbStuffThatNeedsToBeChangedLaterAndThoughtOutCarefully } from "@/hooks";

const ProjectsDashboard = () => {
  const {
    projectsQueryData,
    getProjectsData,
    setProjectsQueryDataKeyValue,
    setProjectsQueryDataSearch,
  } = useGeneralStore((state) => state);

  const { isError, isLoading, projects } = getProjectsData;
  const { search, sortByTest, filterValues } = projectsQueryData;

  const { filterFormControlData, sortFormControlData } =
    useHandleDumbStuffThatNeedsToBeChangedLaterAndThoughtOutCarefully(
      sortByTest,
      setProjectsQueryDataKeyValue,
      filterValues,
    );

  const searchFormControlData = search.searchFormControlData(
    search.current,
    (value: string) => setProjectsQueryDataSearch(value),
  );

  if (isError) {
    return <div>iserror</div>;
  }

  if (isLoading) {
    return <div>isloading</div>;
  }

  const shownProjects = queryProjects(
    projects,
    filterValues,
    sortByTest,
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
          search={searchFormControlData}
          sort={sortFormControlData}
          filter={filterFormControlData}
        />
        <ProjectCards projects={shownProjects} />
      </div>
    </div>
  );
};

export default ProjectsDashboard;
