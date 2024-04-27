import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import styles from './DataVisualization.module.css';

interface DataPoint {
  month: string;
  transactions: number;
  score: number;
}

interface TokenData {
  name: string;
  value: number;
}

const DataVisualization: React.FC = () => {
    const transactionData: DataPoint[] = [
        { month: 'Jan', transactions: 200, score: 65 },
        { month: 'Feb', transactions: 120, score: 72 },
        { month: 'Mar', transactions: 170, score: 70 },
        { month: 'Apr', transactions: 188, score: 80 },
        { month: 'May', transactions: 239, score: 75 },
        { month: 'Jun', transactions: 349, score: 85 },
    ];

    const tokenData: TokenData[] = [
        { name: 'AuthCoin', value: 400 },
        { name: 'DataToken', value: 300 },
        { name: 'SecToken', value: 300 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.chartContainer}>
                <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart data={transactionData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }} />
                        <Legend wrapperStyle={{ bottom: 0, left: 0, backgroundColor: '#fafafa', border: '1px solid #ddd', borderRadius: '5px', lineHeight: '40px' }} />
                        <Area type="monotone" dataKey="transactions" fill="#8884d8" stroke="#8884d8" />
                        <Line type="monotone" dataKey="score" stroke="#82ca9d" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
            <div className={styles.pieChartContainer}>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie data={tokenData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label={({ name }) => name}>
                            {tokenData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }} />
                        <Legend layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{ left: 350, top: 0, lineHeight: '40px', backgroundColor: '#fafafa', border: '1px solid #ddd', borderRadius: '5px' }}/>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default DataVisualization;
