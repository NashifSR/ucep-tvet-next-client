"use client"
import React, { useState, useEffect } from 'react';

const EnrolledAssessments = () => {
  // Mock data for assessments
  const [assessments, setAssessments] = useState([]);

  useEffect(() => {
    // Simulate fetching assessments from an API
    const enrolledAssessments = [
      { id: 1, title: 'Web Development Fundamentals Test', status: 'Completed', score: '85%' },
      { id: 2, title: 'Basic Programming Concepts', status: 'In Progress', score: 'N/A' },
      { id: 3, title: 'HTML & CSS Mastery', status: 'Completed', score: '90%' },
    ];
    setAssessments(enrolledAssessments);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">Your Assessments</h2>

      {/* Display list of enrolled assessments */}
      {assessments.length > 0 ? (
        <div className="space-y-6">
          {assessments.map((assessment) => (
            <div key={assessment.id} className="border-b pb-4 mb-4">
              <h3 className="text-xl font-semibold text-gray-700">{assessment.title}</h3>
              <p className="text-gray-600">Status: {assessment.status}</p>
              <p className="text-gray-600">Score: {assessment.score}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">You have not taken any assessments yet.</p>
      )}
    </div>
  );
};

export default EnrolledAssessments;
