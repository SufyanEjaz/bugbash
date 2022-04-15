import React, { useState } from "react";
import { Container } from "react-bootstrap";

export default function PointsDetails() {
  const [tableData, setTableData] = useState([
    {
      name: "slayer321",
      points: "237",
    },
    {
      name: "100mik",
      points: "168",
    },
    {
      name: "shatakshi0805",
      points: "107",
    },
    {
      name: "marcelmue",
      points: "63",
    },
    {
      name: "abhishek-kumar09",
      points: "22",
    },
    {
      name: "anuragpaliwal80",
      points: "14",
    },
    {
      name: "slayer321",
      points: "237",
    },
    {
      name: "100mik",
      points: "168",
    },
    {
      name: "shatakshi0805",
      points: "107",
    },
    {
      name: "marcelmue",
      points: "63",
    },
    {
      name: "abhishek-kumar09",
      points: "22",
    },
    {
      name: "anuragpaliwal80",
      points: "14",
    },
  ]);
  return (
    <div className='points_wrapper'>
      <Container>
        <div className='points_wrapper_inner'>
          <h3 className="mb-4">Take Me To Your Leaderboard</h3>
          <table className='points_list table'>
            <thead>
              <tr>
                <th>GITHUB ID</th>
                <th>POINTS</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => (
                <tr>
                  <td>{data.name}</td>
                  <td>{data.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" className="btn btn-theme mx-auto">
            See More
            <svg height="12px" width="12px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" transform="translate(0, 1)"><path fill="none" stroke="currentColor" fillRule="evenodd" d="M4 2l4 4-4 4"></path></svg>
          </button>
        </div>
      </Container>
    </div>
  );
}
