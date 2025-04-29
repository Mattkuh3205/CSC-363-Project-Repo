import React from "react";

const resumeGenerator = () => 
    {
        return (

            <div className="bg-white p-16 rounded-2x2 shadow">
                <h2 className="absolute top-50 right-120 py-24 text-xl font-semibold mb-2">Generate Resume</h2>
                <textarea placeholder="Enter prompt: " className=""/> 
                <button type="submit"className="absolute bottom-0 right-50 mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"> Submit </button>
            </div>
        );
    }    
export default resumeGenerator;