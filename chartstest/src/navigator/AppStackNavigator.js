import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, ChartsDetailScreen} from '../components';
import {HOME_SCREEN, CHARTS_DETAIL_SCREEN} from '../constants/Constants';

const Stack = createStackNavigator();

export default function AppStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={HOME_SCREEN} component={HomeScreen} options={{
                title: 'List Of Charts',
            }}/>
            <Stack.Screen name={CHARTS_DETAIL_SCREEN} component={ChartsDetailScreen} options={{
                title: 'Chart Details',
            }}/>
        </Stack.Navigator>
    );
}
