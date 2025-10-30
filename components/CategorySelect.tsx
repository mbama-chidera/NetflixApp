"use client";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

export type CategoryKey = "episodes" | "collection" | "moreLikeThis";

const LABELS: Record<CategoryKey, string> = {
    episodes: "Episodes",
    collection: "Collection",
    moreLikeThis: "More Like This",
};

type Props = {
    selected?: CategoryKey;
    onSelect?: (category: CategoryKey) => void;
};

export default function CategorySelect({ selected = "episodes", onSelect = () => {} }: Props) {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => {}}
            style={{ flexDirection: "row", alignItems: "center" }}
        >
            {Object.keys(LABELS).map((key) => {
                const k = key as CategoryKey;
                const isSelected = selected === k;
                return (
                    <TouchableOpacity
                        key={k}
                        onPress={() => onSelect(k)}
                        style={{ marginRight: 12, paddingVertical: 6 }}
                    >
                        <Text
                            style={{
                                color: isSelected ? "#fff" : "gray",
                                fontWeight: isSelected ? "bold" : "normal",
                                fontSize: 16,
                            }}
                        >
                            {LABELS[k]}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </TouchableOpacity>
    );
}

