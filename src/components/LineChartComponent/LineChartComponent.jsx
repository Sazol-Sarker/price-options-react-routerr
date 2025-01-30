
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineChartComponent = () => {
  // Dataset for student marks

  const studentMarks = [
    { name: "Alice", math: 85 },
    { name: "Bob", math: 76 },
    { name: "Charlie", math: 90 },
    { name: "David", math: 65 },
    { name: "Emma", math: 88 },
    { name: "Frank", math: 70 },
    { name: "Grace", math: 95 },
    { name: "Henry", math: 82 },
    { name: "Isabel", math: 78 },
    { name: "Jack", math: 91 }
  ];

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <ResponsiveContainer>
        <LineChart
          data={studentMarks}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="math" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;