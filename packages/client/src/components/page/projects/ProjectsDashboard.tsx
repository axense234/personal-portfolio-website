// SCSS
import projectsDashboardStyles from "@/scss/components/page/projects/ProjectsDashboard.module.scss";
// Components
import TechIcons from "@/components/shared/TechIcons";
import EntityNavigationBar from "@/components/shared/EntityNavigationBar";
import ProjectCards from "@/components/shared/ProjectCards";
// Zustand
import { useGeneralStore } from "@/zustand/general";
// Interfaces
import {
  SortByFormControlProps,
  TextFormControlProps,
} from "@/core/interfaces";

const ProjectsDashboard = () => {
  const { projectsQueryData, getProjectsData, setProjectsQueryDataKeyValue } =
    useGeneralStore((state) => state);

  const { isError, isLoading, projects } = getProjectsData;
  const { searchValue, sortByTest, selectedTech } = projectsQueryData;

  if (isError) {
    return <div>iserror</div>;
  }

  if (isLoading) {
    return <div>isloading</div>;
  }

  const searchFormControlData: TextFormControlProps = {
    inputPlaceholder: "VitalPrep",
    label: "Search",
    inputType: "text",
    value: searchValue,
    onChange: (value: string) =>
      setProjectsQueryDataKeyValue("searchValue", value),
    flow: "row",
  };

  const sortFormControlData: SortByFormControlProps = {
    scope: "sort",
    label: "Sort By",
    sortingOptions: [
      {
        flow: "row",
        current: sortByTest,
        onOptionSelect: (e) =>
          setProjectsQueryDataKeyValue("sortByTest", e.target.value),
        options: [
          { label: "Name", value: "name", specifier: "string" },
          { label: "Creation Date", value: "createdAt", specifier: "date" },
        ],
      },
    ],
  };

  const filterFormControlData: SortByFormControlProps = {
    scope: "filter",
    label: "Filter",
    sortingOptions:
      selectedTech?.length > 0
        ? `You have ${selectedTech?.length} technology filters applied.`
        : "",
  };

  const filteredProjects = projects?.filter((project) =>
    selectedTech.every((techId) =>
      project.skills.map((s) => s.id).includes(techId),
    ),
  );

  return (
    <div className={projectsDashboardStyles.container}>
      <TechIcons
        isFunctional
        onTechIconClick={(id: string) => {
          const isTechSelected = selectedTech.includes(id);

          setProjectsQueryDataKeyValue(
            "selectedTech",
            isTechSelected
              ? [...selectedTech.filter((t) => t !== id)]
              : [...selectedTech.concat(id)],
          );
        }}
        isFancy
        selectedTech={selectedTech}
      />
      <div className={projectsDashboardStyles.content}>
        <EntityNavigationBar
          search={searchFormControlData}
          sort={sortFormControlData}
          filter={filterFormControlData}
        />
        <ProjectCards projects={filteredProjects} />
      </div>
    </div>
  );
};

export default ProjectsDashboard;
