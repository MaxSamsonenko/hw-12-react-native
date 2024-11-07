import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import MessageSvg from "./Svg/MessageSvg";
import MapPinSvg from "./Svg/MapPinSvg";

import { Post } from "../screens/comments";

const imageMap: { [key: string]: any } = {
	"../assets/images/landscape-post.png": require("../assets/images/landscape-post.png"),
	"../assets/images/sunset-post.png": require("../assets/images/sunset-post.png"),
	"../assets/images/venice-house-post.png": require("../assets/images/venice-house-post.png"),
};

type PostCardProps = {
	post: Post;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => navigation.navigate("Comments", { post: post })}
			>
				<View style={styles.imgWrapper}>
					<Image
						source={imageMap[post.thumb]}
						style={[StyleSheet.absoluteFillObject, styles.image]}
						resizeMode="cover"
					/>
				</View>
				<Text>{post.title}</Text>
				<View style={styles.commsMapWrapper}>
					<View style={styles.commsWrapper}>
						<MessageSvg />
						<Text>{post.commentsCount}</Text>
					</View>
					<View style={styles.mapWrapper}>
						<MapPinSvg />
						<Text>{post.location}</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: "flex",
		gap: 8,
		marginBottom: 32,
	},
	imgWrapper: {
		height: 240,
	},
	image: {
		width: "100%",
		height: "100%",
		borderRadius: 8,
	},
	commsMapWrapper: {
		display: "flex",
		flexDirection: "row",
	},
	commsWrapper: {
		display: "flex",
		flexDirection: "row",
		gap: 6,
	},
	mapWrapper: {
		display: "flex",
		flexDirection: "row",
		gap: 4,
		marginLeft: "auto",
	},
});

export default PostCard;
