import React from 'react';

const TruthTable: React.FC = () => {
    const tableData = [
        { P: 'T', Q: 'T', 'P⇒Q': 'T', 'P⇔Q': 'T', 'Q⇒P': 'T' },
        { P: 'T', Q: 'F', 'P⇒Q': 'F', 'P⇔Q': 'F', 'Q⇒P': 'T' },
        { P: 'F', Q: 'T', 'P⇒Q': 'T', 'P⇔Q': 'F', 'Q⇒P': 'F' },
        { P: 'F', Q: 'F', 'P⇒Q': 'T', 'P⇔Q': 'T', 'Q⇒P': 'T' },
      ];
  
    return (
      <div className="flex flex-col items-center">
        <table className="table-auto border-collapse mt-4">
          <thead>
            <tr>
              <th className="border border-white px-4 py-2">P</th>
              <th className="border border-white px-4 py-2">Q</th>
              <th className="border border-white px-4 py-2">P⇒Q</th>
              <th className="border border-white px-4 py-2">P⇔Q</th>
              <th className="border border-white px-4 py-2">Q⇒P
                
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
                <tr key={index}>
                    <td className="border border-white px-4 py-2 text-center">{row.P}</td>
                    <td className="border border-white px-4 py-2 text-center">{row.Q}</td>
                    <td className="border border-white px-4 py-2 text-center">{row['P⇒Q']}</td>
                    <td className="border border-white px-4 py-2 text-center">{row['P⇔Q']}</td>
                    <td className="border border-white px-4 py-2 text-center">{row['Q⇒P']}</td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TruthTable;