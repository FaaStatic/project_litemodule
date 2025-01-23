import { Stack } from "expo-router";

export default function PopulationLayout() {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					headerShown: false,
				}}
			/>
		</Stack>
	);
}
