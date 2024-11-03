import React, { useState } from 'react';
import RiskSurvey from './RiskSurvey';

const InvestmentPool = () => {
  const [showSurvey, setShowSurvey] = useState(false);

  // Sample data - replace with your actual data source
  const investments = [
    { id: 1, name: "Tech Growth Fund", type: "Mutual Fund", risk: "Moderate", returns: "12.5%", allocation: "25%" },
    { id: 2, name: "Blue Chip Portfolio", type: "Stocks", risk: "Low", returns: "8.2%", allocation: "30%" },
    { id: 3, name: "Emerging Markets", type: "ETF", risk: "High", returns: "15.8%", allocation: "15%" },
    { id: 4, name: "Bond Portfolio", type: "Bonds", risk: "Low", returns: "5.5%", allocation: "30%" },
  ];

  return (
    <div className="investment-pool-container">
      <div className="header-container">
        <h1 className="page-title">Investment Pool</h1>
        <button 
          className="survey-button"
          onClick={() => setShowSurvey(true)}
        >
          Take Risk Survey
        </button>
      </div>
      
      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Total Assets</h3>
          <p className="metric-value">$2.45M</p>
        </div>
        
        <div className="metric-card">
          <h3>Total Return</h3>
          <p className="metric-value green">+10.5%</p>
        </div>
        
        <div className="metric-card">
          <h3>Risk Score</h3>
          <p className="metric-value">6.8/10</p>
        </div>
        
        <div className="metric-card">
          <h3>Active Investments</h3>
          <p className="metric-value">12</p>
        </div>
      </div>

      <div className="table-container">
        <h2>Investment Allocation</h2>
        <table className="investment-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Risk Level</th>
              <th>Returns</th>
              <th>Allocation</th>
            </tr>
          </thead>
          <tbody>
            {investments.map((investment) => (
              <tr key={investment.id}>
                <td>{investment.name}</td>
                <td>{investment.type}</td>
                <td>{investment.risk}</td>
                <td>{investment.returns}</td>
                <td>{investment.allocation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal/Popup for Survey */}
      {showSurvey && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button 
              className="close-button"
              onClick={() => setShowSurvey(false)}
            >
              ×
            </button>
            <RiskSurvey onClose={() => setShowSurvey(false)} />
          </div>
        </div>
      )}

      <style>
        {`
          .investment-pool-container {
            padding: 20px;
          }

          .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
          }

          .page-title {
            font-size: 24px;
            margin: 0;
          }

          .survey-button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
          }

          .survey-button:hover {
            background-color: #45a049;
          }

          .metrics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
          }

          .metric-card {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .metric-card h3 {
            margin: 0;
            font-size: 16px;
            color: #666;
          }

          .metric-value {
            font-size: 24px;
            font-weight: bold;
            margin: 10px 0 0 0;
          }

          .green {
            color: #22c55e;
          }

          .table-container {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .investment-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
          }

          .investment-table th,
          .investment-table td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #eee;
          }

          .investment-table th {
            font-weight: 600;
            color: #666;
          }

          .investment-table tbody tr:hover {
            background-color: #f9fafb;
          }

          /* Modal Styles */
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }

          .modal-content {
            background: white;
            padding: 20px;
            border-radius: 8px;
            position: relative;
            width: 90%;
            max-width: 800px;
            max-height: 90vh;
            overflow-y: auto;
          }

          .close-button {
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #666;
          }

          .close-button:hover {
            color: #000;
          }
        `}
      </style>
    </div>
  );
};

export default InvestmentPool;