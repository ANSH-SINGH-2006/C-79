import React from 'react';
import{createBottomTabNavigator} from 'react-navigation-tabs';
import BookDonateScreen from '../screen/BookDonateScreen';
import BookRequestScreen from '../screen/BookRequestScreen';

export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks: {
       screen: BookDonateScreen,
       navigationOptions: {
           tabBarLabel: 'Donate Books'
       }
    },

    BookRequest: {
        screen: BookRequestScreen,
        navigationOptions: {
            tabBarLabel: 'Request Books'
        }
     },
})
