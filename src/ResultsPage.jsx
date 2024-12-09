import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

const ResultsPage = () => {
    const location = useNavigate().location;
    const results = location.state?.results || {};
  
    return (
      <div>
        <h1>Your Results</h1>
        <pre>{JSON.stringify(results, null, 2)}</pre>
      </div>
    );
};

export default ResultsPage;