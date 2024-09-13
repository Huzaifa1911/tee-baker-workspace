import React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SCREENS } from './constants';
import { HomeScreen } from '../screens';
import { NavigationService } from '../services';

const Stack = createNativeStackNavigator();

interface IAppNavigatorProps {
  theme?: Theme;
}
const AppNavigator = (props: IAppNavigatorProps) => {
  const { theme } = props;

  return (
    <NavigationContainer ref={NavigationService.navigationRef} theme={theme}>
      <Stack.Navigator>
        <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
