// קומפוננטה זו אחראית להציג את היסטוריית החילופים
import React from "react";
import "../cssFiles/history.css";


const History = ({ history }) => {
  return (
    <div className="history">
      <h3>היסטוריית שינויים</h3>
      <div className="history-table-wrapper">
        <table>
          <thead>
            <tr>
              <th>צעד</th>
              <th>קוביה ראשונה (ערך, אינדקס)</th>
              <th>קוביה שנייה (ערך, אינדקס)</th>
            </tr>
          </thead>
          <tbody>
            {history.map((entry, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>
                  {entry.first.value} (אינדקס: {entry.first.index + 1})
                </td>
                <td>
                  {entry.second.value} (אינדקס: {entry.second.index + 1})
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
