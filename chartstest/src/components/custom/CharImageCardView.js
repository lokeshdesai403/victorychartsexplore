import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const ChartImageCardView = props => {

    let chartItemObject = props.chartItemObject;

    return (
        <TouchableOpacity style={styles.mainContainer}
                          onPress={props.onCardClicks}>
            <View>
                <View
                    style={styles.containerCardStyle}>
                    <Image style={styles.chartImageStyle}/>
                    <View style={styles.chartsInformationStyle}>
                        <Text style={styles.chartTitleStyle}>{chartItemObject.title}</Text>
                        <Text>{chartItemObject.description}</Text>
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        margin: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    containerCardStyle: {
        flexDirection: 'row',
    },
    chartImageStyle: {
        width: 150,
        height: 150,
        backgroundColor: '#000',
    },
    chartsInformationStyle: {
        padding: 16,
    },
    chartTitleStyle: {
        fontSize: 18,
        color: '#000',
    },
    descriptionStyle: {
        fontSize: 14,
        color: '#000',
    },
});

export default ChartImageCardView;
