import React, { useState } from "react";
import { Project } from "../models/Project";
import SubmitButton from "./SubmitButton";
interface ProjectDetailsProps {
    project: Project;
    onBackToForm: () => void;
  }

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onBackToForm }) => {
  const [status, setStatus] = useState(project.status || "In Progress")
  const toggleStatus = () => {
    setStatus((prev) => (prev === "In Progress" ? "Completed" : "In Progress"));
  };

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4">
          <h2 className="text-2xl font-bold text-center text-green-700">Project Details</h2>
          <p><span className="font-semibold">Name: </span>{project.name}</p>
          <p><span className="font-semibold">Description: </span>{project.description}</p>
          <p><span className="font-semibold">Start Date: </span>{project.startDate}</p>
          <p><span className="font-semibold">Status: </span>{status}</p>
        </div>
        <div className="flex gap-4 mt-6">
  <SubmitButton
    label={status === "In Progress" ? "Mark as Completed" : "Mark as In Progress"}
    type="button"
    onClick={toggleStatus}
  />
  <SubmitButton
    label="New Project"
    type="button"
    onClick={onBackToForm}
  />
</div>
        </div>
      );
}

export default ProjectDetails;