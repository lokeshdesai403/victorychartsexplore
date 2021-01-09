import React from 'react';
import {View, Text} from 'react-native';
import {VictoryArea, VictoryChart, VictoryPie} from 'victory-native';

const ChartDetailScreen = props => {
    let chartObject = props.route.params.chartObject;
    return (
        <View style={{padding: 16}}>
            {renderChartBaseOnData(chartObject)}
        </View>
    );
};

const renderChartBaseOnData = (chartObject) => {
    switch (chartObject.title) {
        case 'Area': {
            return renderAreaChart();
        }
        case 'Pie': {
            return renderPieChart();
        }
        case 'Donut': {
            return renderDonutChart();
        }
        default: {
            break;
        }
    }
};

//"""""""""""" Area Chart """"""""""""""""
const renderAreaChart = () => {
    const listOfAreaChartData = [];

    listOfAreaChartData.push({x: 1, y: 2, y0: 0});
    listOfAreaChartData.push({x: 2, y: 3, y0: 1});
    listOfAreaChartData.push({x: 3, y: 5, y0: 1});
    listOfAreaChartData.push({x: 4, y: 4, y0: 2});
    listOfAreaChartData.push({x: 5, y: 6, y0: 2});
    return (
        <VictoryChart>
            <VictoryArea
                style={{data: {fill: '#c43a31'}}}
                data={populateAreaChartData(listOfAreaChartData)}/>
        </VictoryChart>
    );
};

const populateAreaChartData = (listOfAreaChartData) => {
    return listOfAreaChartData.map((value, index) => {
        return value;
    });
};

//"""""""""""" Pie Chart """"""""""""""""
const renderPieChart = () => {
    const listOfPieChartData = [];

    listOfPieChartData.push({x: 'Cats', y: 35});
    listOfPieChartData.push({x: 'Dogs', y: 40});
    listOfPieChartData.push({x: 'Birds', y: 55});
    return (
        <VictoryPie
            data={populatePieChartData(listOfPieChartData)}
        />
    );
};

const populatePieChartData = (listOfPieChartData) => {
    return listOfPieChartData.map((value, index) => {
        return value;
    });
};

//"""""""""""" Donut Chart """"""""""""""""
const renderDonutChart = () => {
    const listOfDonutChartData = [];

    listOfDonutChartData.push({x: 'Cats', y: 35});
    listOfDonutChartData.push({x: 'Dogs', y: 40});
    listOfDonutChartData.push({x: 'Birds', y: 55});
    return (
        <VictoryPie
            innerRadius={100}
            data={populateDonutChartData(listOfDonutChartData)}
        />
    );
};

const populateDonutChartData = (listOfDonutChartData) => {
    return listOfDonutChartData.map((value, index) => {
        return value;
    });
};

export default ChartDetailScreen;
