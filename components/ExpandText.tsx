"Use Client";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
export default function ExpandText() {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <View>
            <Text
                numberOfLines={isExpanded ? undefined : 3}
                style={{ color: "#fff", fontSize: 16, margin: 10, fontWeight: "bold" }}
            >
                Monkey D. Luffy sails the seas in search of the ultimate treasure known as One Piece to become the Pirate King.
                {"\n"}{"\n"}
                Cast: Mayumi Tanaka, Kazuya Nakai, Akemi Okamura, Kappei Yamaguchi, Hiroaki Hirata, Ikue Ōtani, Yuriko Yamaguchi, Kazuki Yao (until 2024), Subaru Kimura (from 2025), Chō, Katsuhisa Hoki, Mahito Ohba
                {"\n"}{"\n"}
                Creator: Eiichiro Oda
            </Text>
            <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
                <Text style={{ color: '#fff', textAlign: 'center', marginTop: 5 }}>
                    {isExpanded ? 'Read Less' : 'Read More'}
                </Text>
            </TouchableOpacity>
        </View>
    );
    }