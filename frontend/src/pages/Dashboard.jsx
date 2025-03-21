import React from 'react';
import { BarChart, FileText, Users, Activity, PieChart, TrendingUp } from 'lucide-react';
import './Dashboard.css'

const reports = [
  { title: "Attendance Report", description: "View detailed student attendance records.", icon: <Users /> },
  { title: "Performance Analysis", description: "Check student and teacher performance analytics.", icon: <BarChart /> },
  { title: "Monthly Summary", description: "Get an overview of key metrics for the month.", icon: <PieChart /> },
  { title: "Activity Logs", description: "Track recent activities and interactions.", icon: <Activity /> },
  { title: "Financial Report", description: "Analyze financial data and trends.", icon: <TrendingUp /> },
  { title: "Exam Results", description: "View and manage student exam scores.", icon: <FileText /> }
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="reports-section">
        <h2 className="section-title">Reports</h2>
        <div className="reports-grid">
          {reports.map((report, index) => (
            <div key={index} className="report-card">
              <div className="report-icon">{report.icon}</div>
              <h3 className="report-title">{report.title}</h3>
              <p className="report-description">{report.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
