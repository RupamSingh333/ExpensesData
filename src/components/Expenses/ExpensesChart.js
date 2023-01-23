import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {

    const chartDataPoints =[
        {lable:'Jan',value:0},
        {lable:'Feb',value:0},
        {lable:'Mar',value:0},
        {lable:'Apr',value:0},
        {lable:'May',value:0},
        {lable:'Jun',value:0},
        {lable:'Jul',value:0},
        {lable:'Aug',value:0},
        {lable:'Sep',value:0},
        {lable:'Oct',value:0},
        {lable:'Nov',value:0},
        {lable:'Dec',value:0},
    ];

    for(const expense of props.expenses){
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;

    }
  return <Chart dataPoints={chartDataPoints} />
}

export default ExpensesChart