import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from '../../components/Header';

interface Show {
  id: string;
  title: string;
  image: string;
  category: string;
}

export default function SearchScreen() {
  const categories = ['TV Shows', 'Movies', 'New & Popular', 'My List'];

  const trendingShows: Show[] = [
    { id: '1', title: 'One Piece', image: 'https://picsum.photos/150/225?random=10', category: 'Anime' },
    { id: '2', title: 'Dark', image: 'https://picsum.photos/150/225?random=11', category: 'Thriller' },
    { id: '3', title: 'The Crown', image: 'https://picsum.photos/150/225?random=12', category: 'Drama' },
    { id: '4', title: 'Stranger Things', image: 'https://picsum.photos/150/225?random=13', category: 'Sci-Fi' },
    { id: '5', title: 'Money Heist', image: 'https://picsum.photos/150/225?random=14', category: 'Action' },
    { id: '6', title: 'The Witcher', image: 'https://picsum.photos/150/225?random=15', category: 'Fantasy' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#141414" />
      <Header title="Search" showLogo={false} />
      
      <ScrollView style={styles.scrollView}>
        {/* Search Bar - Static */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
          <Text style={styles.searchPlaceholder}>Search for shows, movies...</Text>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Browse Categories</Text>
          <View style={styles.categoriesGrid}>
            {categories.map((category, index) => (
              <View key={index} style={styles.categoryCard}>
                <Text style={styles.categoryText}>{category}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Top Searches */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Searches</Text>
          <View>
            {trendingShows.map((show) => (
              <View key={show.id} style={styles.searchRow}>
                <Image source={{ uri: show.image }} style={styles.searchThumb} />

                <Text style={styles.searchTitle} numberOfLines={1}>{show.title}</Text>

                <MaterialCommunityIcons name="play-circle-outline" size={36} color="white" style={styles.playIcon} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginVertical: 16,
    height: 50,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchPlaceholder: {
    color: '#666',
    fontSize: 16,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  categoryCard: {
    backgroundColor: '#2A2A2A',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: '45%',
    alignItems: 'center',
  },
  categoryText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  showsGrid: {
    flex: 1,
    width: '100%',
    height: 60,
    borderRadius: 8,
    marginBottom: 8,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.04)',
  },
  searchThumb: {
    width: 90,
    height: 60,
    borderRadius: 6,
    marginRight: 12,
  },
  searchTitle: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  playIcon: {
    marginLeft: 12,
  },
  showTitle: {
    flex: 1,
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  }
});