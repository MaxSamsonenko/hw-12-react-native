import { FC } from "react";
import {
	StyleSheet,
	View,
	TouchableOpacity,
	StyleProp,
	ViewStyle,
} from "react-native";

type Props = {
	children: React.ReactNode;
	buttonStyles?: ViewStyle;
	onPress: () => void;
	outerStyles?: StyleProp<ViewStyle>;
};

const Button: FC<Props> = ({
	children,
	onPress,
	buttonStyles,
	outerStyles,
}) => {
	return (
		<TouchableOpacity
			style={[styles.button, buttonStyles, outerStyles]}
			onPress={onPress}
		>
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
