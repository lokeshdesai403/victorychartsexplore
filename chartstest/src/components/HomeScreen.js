import React, {useEffect} from 'react';
import {Text, View, FlatList, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {ChartImageCardView} from './custom';
import {CHARTS_DETAIL_SCREEN} from '../constants/Constants';

const HomeScreen = props => {
    const listOfCharts = [];

    listOfCharts.push({imageUrl: '', title: 'Area', description: 'Area Charts are easy to use'});
    listOfCharts.push({imageUrl: '', title: 'Pie', description: 'Pie Charts are easy to use'});
    listOfCharts.push({imageUrl: '', title: 'Donut', description: 'Donut Charts are easy to use'});

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
