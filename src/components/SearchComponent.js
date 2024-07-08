import React, { useState } from "react";

const sampleProjects = [
    { id: 1, name: "Weather App", createdDate: "2024-01-01", status: "Active" },
    { id: 2, name: "Shopping Cart", createdDate: "2024-02-15", status: "Active" },
    { id: 3, name: "Food Order System", createdDate: "2024-03-10", status: "Active" },
    { id: 4, name: "IPL Dashboard", createdDate: "2024-04-12", status: "Active" },
    { id: 5, name: "Fitness Tracker", createdDate: "2024-05-05", status: "Active" },
    { id: 6, name: "Expense Manager", createdDate: "2024-06-07", status: "Active" },
    { id: 7, name: "Book Library", createdDate: "2024-07-14", status: "Active" },
    { id: 8, name: "Event Planner", createdDate: "2024-08-22", status: "Active" },
    { id: 9, name: "Movie Finder", createdDate: "2024-09-30", status: "Active" },
    { id: 10, name: "Recipe Book", createdDate: "2024-10-11", status: "Active" },
  ];
  

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(sampleProjects);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = sampleProjects.filter((project) =>
      project.name.toLowerCase().includes(value)
    );
    setFilteredProjects(filtered);
  };

  const handleRun = (projectName) => {
    console.log(`Running project: ${projectName}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Projects</h1>
      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={handleSearch}
        className="p-2 border border-gray-300 rounded mb-4 w-full"
      />
      <table className="min-w-full bg-white text-center">
        <thead>
          <tr>
            <th className="py-2 px-4 border-2 border-gray-300">Project Name</th>
            <th className="py-2 px-4 border-2 border-gray-300">Created Date</th>
            <th className="py-2 px-4 border-2 border-gray-300">Status</th>
            <th className="py-2 px-4 border-2 border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map((project) => (
            <tr key={project.id}>
              <td className="py-2 px-4 border-b border-gray-300 font-bold">{project.name}</td>
              <td className="py-2 px-4 border-b border-gray-300 font-bold">{project.createdDate}</td>
              <td className="py-2 px-4 border-b border-gray-300">
                <span className="bg-green-100 text-green-700 font-bold py-1 px-3 rounded-full">
                  {project.status}
                </span>
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                <button
                  onClick={() => handleRun(project.name)}
                  className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-700"
                >
                  Run
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchComponent;
