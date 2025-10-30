"Use Client";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AddIcon() {
    const [Added, setAdded] = useState(false);

    const handleAddPress = () => {
        setAdded(!Added);
    };

    return (
        <View style={{ flexDirection: "row", justifyContent: "flex-start", marginVertical: 10 }}>
            <TouchableOpacity onPress={handleAddPress} style={styles.iconContainer}>
                <MaterialCommunityIcons
                    name={Added ? "check" : "star-plus-outline"}
                    size={24}
                    color={"#fff"}>
                </MaterialCommunityIcons>
                <Text style={{ color: "#fff", fontSize: 12, marginTop: 5 }}>
                    {Added ? "My List" : "Add to List"}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
                <MaterialCommunityIcons
                    name="thumb-up-outline"
                    size={24}
                    color={"#fff"}>
                </MaterialCommunityIcons>
                <Text style={{ color: "#fff", fontSize: 12, marginTop: 5 }}>
                    Rate
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
                <MaterialCommunityIcons
                    name="share-variant"
                    size={24}
                    color={"#fff"}>
                </MaterialCommunityIcons>
                <Text style={{ color: "#fff", fontSize: 12, marginTop: 5 }}>
                    Share
                </Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    iconContainer: {
        marginHorizontal: 15,
        flexDirection: "column",
        alignItems: "center"
    }
});
