import React from "react";


//Job description section
const JobDescInput = () => 
{
  return (
    <div className="bg-white p-16 rounded-x2 shadow py-5">
      
      <h2 className="text-xl font-semibold mb-2">Job Description</h2>
      
      <textarea placeholder="Paste or Write Job description: " className="absolute bottom-20 left-50 px-5 w-111 h-111 border rounded-x10"/> 
      

      <button type="submit"className="absolute bottom-0 left-50 mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"> Submit </button>
      
      
    
    </div>
    
  );
};

export default JobDescInput;

