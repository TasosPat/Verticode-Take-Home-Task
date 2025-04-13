import React from "react";
import { Project } from "../models/Project";
interface ProjectDetailsProps {
    project: Project;
  }

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4">
          <h2 className="text-2xl font-bold text-center text-green-700">Project Details</h2>
          <p><span className="font-semibold">Name: </span>{project.name}</p>
          <p><span className="font-semibold">Description: </span>{project.description}</p>
          <p><span className="font-semibold">Start Date: </span>{project.startDate}</p>
          <p><span className="font-semibold">Status: </span>{project.status}</p>
        </div>
        </div>
      );
}

export default ProjectDetails;