import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
const PreparingOrderScreen = () => {
	const navigation = useNavigation();
	useEffect(() => {
		setTimeout(() => {
			navigation.navigate('Delivery');
		}, 4000);
	}, []);

	return (
		<SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center ">
			<Animatable.Image
				source={require('/Users/admin/firstapp/my-app/assets/foodpanda-delivery.gif')}
				iterationCount={1}
				className="w-96 h-96"
				animation="slideInUp"
			/>
			<Animatable.Text
				animatable="slideInUp"
				iterationCount={1}
				className="text-[16px] my-10  text-white font-bold text-center"
			>
				Waiting for Restaurant to accept your order!
			</Animatable.Text>
			<Progress.Circle size={60} indeterminate={true} color="white" />
		</SafeAreaView>
	);
};

export default PreparingOrderScreen;
