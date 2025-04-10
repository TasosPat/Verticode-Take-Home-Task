import React from "react";
import { Project } from "../models/Project";
interface ProjectDetailsProps {
    project: Project;
  }

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
    return (
        <div>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <p>Start Date: {project.startDate}</p>
          <p>Status: {project.status}</p>
        </div>
      );
}

export default ProjectDetails;