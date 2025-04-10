import React, { useState } from "react";
import { ProjectForm, ProjectDetails } from "./components";
import { Project } from "./models/Project";

const App: React.FC = () => {

  const [project, setProject] = useState<Project | null>(null);
  const handleSubmit = (projectData: Project) => {
    setProject(projectData);
  };
  return (
    <main className="flex flex-col">
      <header className="flex h-24 bg-light-green">
        <img src="/logo.png" height={64} className="h-16 m-auto" />
      </header>
    <div>
    {!project ? (
      <ProjectForm onSubmit={handleSubmit} />
    ) : (
      <ProjectDetails project={project} />
    )}
    </div>
    </main>
  );
}

export default App;