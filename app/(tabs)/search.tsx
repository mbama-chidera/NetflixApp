import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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
          <View style={styles.showsGrid}>
            {trendingShows.map((show) => (
              <View key={show.id} style={styles.showCard}>
                <Image source={{ uri: show.image }} style={styles.showImage} />
                <View style={styles.showInfo}>
                  <Text style={styles.showTitle} numberOfLines={1}>{show.title}</Text>
                  <Text style={styles.showCategory}>{show.category}</Text>
                </View>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  showCard: {
    width: '48%',
    marginBottom: 16,
  },
  showImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 8,
  },
  showInfo: {
    paddingHorizontal: 4,
  },
  showTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  showCategory: {
    color: '#999',
    fontSize: 12,
  },
});