import { Stack } from "expo-router";

export default function ExecutionLayout() {
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
