import { TabIcon } from "@untr/core-components";
import { useStandalone } from "@untr/core-hooks";
import { Tabs, router } from "expo-router";
import React from "react";
import {
	TabDailyBreakdown,
	TabDashboard,
	TabExecutionPS,
	TabPlanningPS,
	TabUnitPopulation,
} from "../../../assets/icons";
import { Header } from "../../../components/header";

export default function TabLayout() {
	const { isStandalone } = useStandalone();

	return (
		<Tabs
			initialRouteName="dashboard"
			screenOptions={{
				tabBarActiveTintColor: "#FFD500",
				tabBarInactiveTintColor: "#A8A8A8",
			}}
		>
			<Tabs.Screen
				name="dashboard"
				options={{
					title: "Dashboard",
					headerTitle: "Dashboard",
					header: () => (
						<Header
							buttonBack={isStandalone}
							onPressBack={() => {
								router.navigate("/./home");
							}}
							headerLabel="Dashboard"
						/>
					),
					tabBarIcon: ({ focused }) => {
						return (
							<TabIcon
								source={TabDashboard}
								active={focused}
								alt="Icon Dashboard"
							/>
						);
					},
				}}
			/>
			<Tabs.Screen
				name="population"
				options={{
					title: "Population",
					headerShown: false,
					tabBarIcon: ({ focused }) => {
						return (
							<TabIcon
								source={TabUnitPopulation}
								active={focused}
								alt="Icon Unit Population"
							/>
						);
					},
				}}
			/>
			<Tabs.Screen
				name="planning"
				options={{
					title: "Planning",
					headerShown: false,
					tabBarIcon: ({ focused }) => {
						return (
							<TabIcon
								source={TabPlanningPS}
								active={focused}
								alt="Icon Planning PS"
							/>
						);
					},
				}}
			/>
			<Tabs.Screen
				name="execution"
				options={{
					title: "Execution",
					headerShown: false,
					tabBarIcon: ({ focused }) => {
						return (
							<TabIcon
								source={TabExecutionPS}
								active={focused}
								alt="Icon Execution PS"
							/>
						);
					},
				}}
			/>
			<Tabs.Screen
				name="breakdown"
				options={{
					title: "Breakdown",
					headerShown: false,
					tabBarIcon: ({ focused }) => {
						return (
							<TabIcon
								source={TabDailyBreakdown}
								active={focused}
								alt="Icon Daily Breakdown"
							/>
						);
					},
				}}
			/>
		</Tabs>
	);
}
