import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardComponent from './src/screens/DashboardScreen';
import TransacoesComponent from './src/screens/TransacoesScreen';
import NovaTransacaoComponent from './src/screens/NovaTransacaoScreen';
import MetasComponent from './src/components/screens/MetasComponent';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={DashboardComponent} />
        <Stack.Screen name="Transações" component={TransacoesComponent} />
        <Stack.Screen name="Nova Transação" component={NovaTransacaoComponent} />
        <Stack.Screen name="Metas" component={MetasComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
