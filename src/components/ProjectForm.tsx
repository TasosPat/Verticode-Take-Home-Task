import React, { useState } from "react";
import { Project } from "../models/Project";
import SubmitButton from "./SubmitButton";

interface ProjectFormProps {
    onSubmit: (projectData: Project) => void;
  }

const ProjectForm: React.FC<ProjectFormProps> = ({ onSubmit }) => {
    const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [status, setStatus] = useState<'In Progress' | 'Completed'>("In Progress");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ name, description, startDate, status });
  };

  return (
    <form
    onSubmit={handleSubmit}
    className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
    >
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center text-green-700">Create a Project</h2> 
        <div className="flex flex-col">
      <label htmlFor="name" className="text-gray-700 mb-1">
        Project Name: 
        <input
        id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </label>
      </div>

      <div className="flex flex-col">
      <label htmlFor="description" className="text-gray-700 mb-1">
        Description: 
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </label>
      </div>

      <div className="flex flex-col">
      <label htmlFor="start-date" className="text-gray-700 mb-1">
        Start Date: 
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </label>
      </div>

      <div className="flex flex-col">
      <label htmlFor="status" className="text-gray-700 mb-1">
        Status: 
        <select
        value={status}
        onChange={(e) => setStatus(e.target.value as 'In Progress' | 'Completed')}
        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </label>
      <SubmitButton label="Submit" />
      </div>
      </div>
    </form>
  );
}

export default ProjectForm;