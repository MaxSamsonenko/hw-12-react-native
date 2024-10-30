import { FC } from "react";
import { StyleSheet, View, TouchableOpacity, ViewStyle } from "react-native";

type Props = {
	children: React.ReactNode;
	buttonStyles?: ViewStyle;
	onPress: () => void;
};

const Button: FC<Props> = ({ children, onPress, buttonStyles }) => {
	return (
		<TouchableOpacity style={[styles.button, buttonStyles]} onPress={onPress}>
			{children}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#FF6C00",
		width: "100%",
		alignItems: "center",
		borderRadius: 100,
		paddingBottom: 16,
		paddingTop: 16,
	},
});

export default Button;
