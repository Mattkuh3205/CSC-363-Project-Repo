import React from 'react';
import './index.css';
import Layout from "./Layout";
import JobDescInput from "./JobDescInput";
import UploadResume from "./UploadResume";
import LogoTitle from "./LogoTitle";
import ResumeGenerator from "./resumeGenerator";


function App() {
  return (
    <Layout>
      <LogoTitle />
      <JobDescInput />
      <UploadResume /> 
      <ResumeGenerator />
    </Layout>
  );
}

export default App;