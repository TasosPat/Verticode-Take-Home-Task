import React, { useState } from "react";
import { Project } from "../models/Project";
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
    <form onSubmit={handleSubmit}>
      <label>
        Project Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Start Date:
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </label>
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value as 'In Progress' | 'Completed')}>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ProjectForm;