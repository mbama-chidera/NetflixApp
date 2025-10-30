import AddIcon from '@/components/AddIcon';
import type { CategoryKey } from '@/components/CategorySelect';
import CategorySelect from '@/components/CategorySelect';
import CategoryTable from '@/components/CategoryTable';
import ExpandText from '@/components/ExpandText';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Play() {
    const [selected, setSelected] = useState<CategoryKey>('episodes');

    return (
        <ScrollView style={styles.container}>
            <Image
                source={require("@/assets/images/OnePiece.png")}
                style={[styles.imageStyle, {alignSelf: "center"}]} />
            <Text style={{ color: "#fff", fontSize: 18, margin: 10 }}>
                One Piece
            </Text>
            <Text style={{ color: "#fff", fontSize: 14, margin: 10 }}>
                2025 <Text style={{ color: "#fff", fontSize: 8, borderColor: "#fff", backgroundColor: "gray" }}>TV-14</Text>
                {" "}28 Seasons <Text style={{ color: "#fff", fontSize: 8, borderColor: "#fff"}}>HD</Text>
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
            <View style={{ paddingHorizontal: 12, marginTop: 8 }}>
                <CategorySelect selected={selected} onSelect={setSelected} />
            </View>
            <CategoryTable category={selected} />

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
