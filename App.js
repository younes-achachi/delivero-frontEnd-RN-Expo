import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import { Provider } from 'react-redux';
import RestaurantScreen from './src/screen/RestaurantScreen';
import BasketScreen from './src/screen/BasketScreen';
import { store } from './store';
import PreparingOrderScreen from './src/screen/PreparingOrderScreen';
import DeliveryScreen from './src/screen/DeliveryScreen';
export default function App() {
	const Stack = createNativeStackNavigator();
	return (
		<NavigationContainer>
			<Provider store={store}>
				<Stack.Navigator>
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="Restaurant" component={RestaurantScreen} />
					<Stack.Screen
						name="Basket"
						component={BasketScreen}
						options={{ presentation: 'modal', headerShown: false }}
					/>
					<Stack.Screen
						name="PreparingOrderScreen"
						component={PreparingOrderScreen}
						options={{ presentations: 'fullScreenModal', headerShown: false }}
					/>
					<Stack.Screen
						name="Delivery"
						component={DeliveryScreen}
						options={{ presentations: 'fullScreenModal', headerShown: false }}
					/>
				</Stack.Navigator>
			</Provider>
		</NavigationContainer>
	);
}
