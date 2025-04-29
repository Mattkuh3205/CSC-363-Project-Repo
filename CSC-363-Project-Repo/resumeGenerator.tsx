import React from "react";

const resumeGenerator = () => 
    {
        return (

            <div className="bg-white p-0 py-5 rounded-0x0 shadow">
                <h2 className="absolute top-50 right-120 py-15 text-xl font-semibold mb-2">Generate Resume</h2>
                <textarea placeholder="Enter prompt: " className=" absolute bottom-15 right-50 px-5 w-111 h-115 border rounded-x10"/> 
                <button type="submit"className="absolute bottom-0 right-50 mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"> Submit </button>
            </div>
        );
    }    
export default resumeGenerator;