import React from "react";
import { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const data = [
        { id: 1, name: "Assignment 1", value: 60 },
        { id: 2, name: "Assignment 2", value: 60 },
        { id: 3, name: "Assignment 3", value: 59 },
        { id: 4, name: "Assignment 4", value: 60 },
        { id: 5, name: "Assignment 5", value: 60 },
        { id: 6, name: "Assignment 6", value: 58 },
        { id: 7, name: "Assignment 7", value: 60 },
    ];
    const style = {
        top: "50%",
        right: 0,
        transform: "translate(0, -50%)",
        lineHeight: "24px",
    };

    return (
        <div>
            <h1 className="text-2xl font-semibold text-center">
                Assignment Result in Pie Chart
            </h1>
            <div className="flex items-center justify-center container mx-auto">

            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    fill="#8884d8"
                    label
                />
            </PieChart>

            </div>
        </div>
    );
};

export default Statistics;
