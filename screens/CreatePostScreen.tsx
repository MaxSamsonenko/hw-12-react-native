import {
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from "react-native";

import Button from "../components/Button";

import CameraSvg from "../components/Svg/CameraSvg";
import MapPinSvg from "../components/Svg/MapPinSvg";
import { useIsFocused } from "@react-navigation/native";
import TrashSvg from "../components/Svg/TrashSvg";

const CreatePostScreen: React.FC = () => {
	const isFocused = useIsFocused();
	return (
		<View style={styles.container}>
			<View>
				<View style={styles.camera}>
					<View style={styles.camContainer}>
						<CameraSvg />
					</View>
				</View>
				<Text style={styles.subText}>Завантажте фото</Text>
			</View>
			<View style={styles.inputContainer}>
				<View style={styles.input}>
					<TextInput
						style={styles.textInput}
						placeholder="Назва..."
						placeholderTextColor="#BDBDBD"
					/>
				</View>
				<View style={[styles.input, styles.locationInput]}>
					<MapPinSvg />
					<TextInput
						style={styles.textInput}
						placeholder="Місцевість..."
						placeholderTextColor="#BDBDBD"
					/>
				</View>
			</View>
			<Button
				onPress={() => console.log("btn pressed")}
				outerStyles={styles.btn}
			>
				<Text style={styles.btnText}>Опубліковати</Text>
			</Button>
			{/* {isFocused && <CustomButton />} */}

			<Button
				onPress={() => console.log("delete post")}
				outerStyles={styles.deleteBtn}
			>
				<TrashSvg />
			</Button>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 32,
		paddingLeft: 16,
		paddingRight: 16,
		backgroundColor: "#FFFFFF",
		gap: 32,
		justifyContent: "center",
	},
	camera: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: 240,
		backgroundColor: "#E8E8E8",
		borderRadius: 8,
		marginBottom: 8,
	},
	camContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: 60,
		height: 60,
		borderRadius: 50,
		backgroundColor: "#FFFFFF",
	},
	subText: {
		fontSize: 16,
		color: "#BDBDBD",
	},
	inputContainer: {
		gap: 16,
	},
	input: {
		width: "100%",
		height: 50,
		borderBottomWidth: 1,
		borderBottomColor: "#E8E8E8",
		paddingLeft: 16,
		paddingRight: 16,
		fontSize: 16,
	},
	locationInput: {
		flexDirection: "row",
		alignItems: "center",
		gap: 4,
	},
	textInput: {
		flex: 1,
		fontSize: 16,
		paddingVertical: 0,
	},
	btn: {
		backgroundColor: "#F6F6F6",
	},
	btnText: {
		color: "#BDBDBD",
	},
	deleteBtn: {
		justifyContent: "center",
		backgroundColor: "#F6F6F6",
		width: 70,
		height: 40,
		alignItems: "center",
		borderRadius: 100,
		paddingBottom: 8,
		paddingTop: 8,
		paddingLeft: 23,
		paddingRight: 23,
		marginTop: "auto",
		marginLeft: "auto",
		marginRight: "auto",
		marginBottom: 34,
	},
});

export default CreatePostScreen;
