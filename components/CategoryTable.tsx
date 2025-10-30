"use client";
import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import type { CategoryKey } from "./CategorySelect";

type Episode = { id: string; season: number; episode: number; title: string; duration?: string };
type CollectionItem = { id: string; title: string; year?: number; itemsCount?: number };
type Recommendation = { id: string; title: string; reason?: string; thumbnail?: string };

export function getDataForCategory(category: CategoryKey) {
    switch (category) {
        case "episodes":
            const episodes: Episode[] = [
                { id: "e1", season: 1, episode: 1, title: "Pilot", duration: "24m" },
                { id: "e2", season: 1, episode: 2, title: "Second Episode", duration: "22m" },
                { id: "e3", season: 1, episode: 3, title: "The Plot Thickens", duration: "26m" },
            ];
            return episodes;
        case "collection":
            const collections: CollectionItem[] = [
                { id: "c1", title: "Complete Series", year: 2023, itemsCount: 24 },
                { id: "c2", title: "Behind The Scenes", year: 2022, itemsCount: 6 },
            ];
            return collections;
        case "moreLikeThis":
            const recs: Recommendation[] = [
                { id: "r1", title: "A Similar Show", reason: "Shared actors", thumbnail: undefined },
                { id: "r2", title: "Another Pick", reason: "Similar tone", thumbnail: undefined },
            ];
            return recs;
        default:
            return [];
    }
}

export default function CategoryTable({ category }: { category: CategoryKey }) {
    const data = getDataForCategory(category);

    if (category === "episodes") {
        return (
            <FlatList
                data={data as Episode[]}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <Text style={styles.episodeIndex}>S{item.season} · E{item.episode}</Text>
                        <View style={styles.episodeMeta}>
                            <Text style={styles.rowTitle}>{item.title}</Text>
                            {item.duration ? <Text style={styles.rowSub}>{item.duration}</Text> : null}
                        </View>
                    </View>
                )}
                ItemSeparatorComponent={() => <View style={styles.sep} />}
            />
        );
    }

    if (category === "collection") {
        return (
            <FlatList
                data={data as CollectionItem[]}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <Text style={styles.rowTitle}>{item.title}</Text>
                        <Text style={styles.rowSub}>{item.year} · {item.itemsCount} items</Text>
                    </View>
                )}
                ItemSeparatorComponent={() => <View style={styles.sep} />}
            />
        );
    }

    // moreLikeThis
    return (
        <FlatList
            data={data as Recommendation[]}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={[styles.row, { alignItems: "center" }]}>
                    {/* thumbnail placeholder - use Image when available */}
                    <View style={styles.thumbPlaceholder}>
                        <Text style={{ color: "#fff" }}>Img</Text>
                    </View>
                    <View style={{ marginLeft: 10, flex: 1 }}>
                        <Text style={styles.rowTitle}>{item.title}</Text>
                        {item.reason ? <Text style={styles.rowSub}>{item.reason}</Text> : null}
                    </View>
                </View>
            )}
            ItemSeparatorComponent={() => <View style={styles.sep} />}
        />
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        paddingVertical: 12,
        paddingHorizontal: 8,
        alignItems: "center",
    },
    episodeIndex: {
        color: "#bbb",
        width: 70,
    },
    episodeMeta: {
        flex: 1,
    },
    rowTitle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    rowSub: {
        color: "#aaa",
        fontSize: 13,
        marginTop: 4,
    },
    sep: {
        height: 1,
        backgroundColor: "rgba(255,255,255,0.05)",
        marginHorizontal: 8,
    },
    thumbPlaceholder: {
        width: 64,
        height: 36,
        backgroundColor: "rgba(255,255,255,0.08)",
        justifyContent: "center",
        alignItems: "center",
    },
});
