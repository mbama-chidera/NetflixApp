import AddIcon from '@/components/AddIcon';
import CategoryTable from '@/components/CategoryTable';
import ExpandText from '@/components/ExpandText';
import { MaterialIcons } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
export default function Play() {
    return (
        
        <ScrollView style={styles.container}>
            <Image
                source={require("@/assets/images/OnePiece.png")}
                style={styles.imageStyle} />
            <Text style={{ color: "#fff", fontSize: 18, margin: 10 }}>
                One Piece
            </Text>
            <Text style={{ color: "#fff", fontSize: 14, margin: 10 }}>
                2025 <Text style={{ color: "#fff", fontSize: 8, borderColor: "#fff", backgroundColor: "gray" }}>TV-14</Text>
                28 Seasons <Text style={{ color: "#fff", fontSize: 8, borderColor: "#fff" }}>HD</Text>
            </Text>
            <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: "#fff" }]}>
                <MaterialIcons name="play-arrow" size={24} color="#000" />
                <Text style={{ color: "#000", fontSize: 14 }}>Play</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: "gray" }]}>
                <MaterialIcons name="download" size={24} color="#fff" />
                <Text style={{ color: "#fff", fontSize: 14, marginLeft: 5 }}>Download</Text>
            </TouchableOpacity>
            <ExpandText />
            <AddIcon />
            <CategoryTable category="episodes" />

        </ScrollView>
    );
}

    const styles = StyleSheet.create({
        container: { backgroundColor: "#000" },
        imageStyle: { resizeMode: "contain" },   
        buttonStyle: {
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            borderRadius: 5,
            margin: 10
        }
});
