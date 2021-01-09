import React, {useEffect} from 'react';
import {Text, View, FlatList, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {ChartImageCardView} from './custom';
import {CHARTS_DETAIL_SCREEN} from '../constants/Constants';

const HomeScreen = props => {
    const listOfCharts = [];

    listOfCharts.push({
        imageUrl: require('../../res/drawable/ic_area.png'),
        title: 'Area',
        description: 'Area Charts are easy to use',
    });
    listOfCharts.push({
        imageUrl: require('../../res/drawable/ic_pie.png'),
        title: 'Pie',
        description: 'Pie Charts are easy to use',
    });
    listOfCharts.push({
        imageUrl: require('../../res/drawable/ic_donald.png'),
        title: 'Donut',
        description: 'Donut Charts are easy to use',
    });

    return (
        <>
            <StatusBar mode={'dark'}/>
            <SafeAreaView style={styles.container}>
                <View>
                    <FlatList
                        data={listOfCharts}
                        renderItem={({item}) => renderCardsWithChartImage({item, props})}
                    />
                </View>
            </SafeAreaView>
        </>
    );
};

const renderCardsWithChartImage = ({item, props}) => {
    return (
        <ChartImageCardView
            chartItemObject={item}
            onCardClicks={() => {
                props.navigation.navigate(CHARTS_DETAIL_SCREEN, {chartObject: item});
            }}
        />
    );
};

const styles = StyleSheet.create({
    container:
        {
            width: '100%',
            height: '100%',
        },
});

export default HomeScreen;
