import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TransacoesComponent from './src/components/screens/TransacoesComponent';
import MetasComponent from './src/components/screens/MetasComponent';

import DashboardComponent from './src/components/screens/DashboardComponent';
import NovaTransacaoComponent from './src/components/screens/NovaTransacaoComponent';


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
