import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  SafeAreaView,
  StatusBar,
  Image
} from 'react-native';
import Header from '@/components/Header';

interface Show {
  id: string;
  title: string;
  image: string;
  description: string;
  comingSoon?: boolean;
}

export default function HomeScreen() {
  const featuredShow: Show = {
    id: '1',
    title: 'AS YOU STOOD BY',
    image: 'https://picsum.photos/400/600?random=1',
    description: 'Limited Series Coming November 7',
    comingSoon: true
  };

  const popularShows: Show[] = [
    { id: '2', title: 'Dark', image: 'https://picsum.photos/200/300?random=2', description: 'Award-winning Criminal Investigation' },
    { id: '3', title: 'Stranger Things', image: 'https://picsum.photos/200/300?random=3', description: 'Sci-Fi Horror' },
    { id: '4', title: 'The Crown', image: 'https://picsum.photos/200/300?random=4', description: 'Historical Drama' },
    { id: '5', title: 'Money Heist', image: 'https://picsum.photos/200/300?random=5', description: 'Action Thriller' },
  ];

  const trendingNow: Show[] = [
    { id: '6', title: 'One Piece', image: 'https://picsum.photos/200/300?random=6', description: 'Adventure Anime' },
    { id: '7', title: 'The Witcher', image: 'https://picsum.photos/200/300?random=7', description: 'Fantasy Action' },
    { id: '8', title: 'Breaking Bad', image: 'https://picsum.photos/200/300?random=8', description: 'Crime Drama' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#141414" />
      <Header />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Featured Show */}
        <View style={styles.featuredSection}>
          <Image 
            source={{ uri: featuredShow.image }} 
            style={styles.featuredImage}
          />
          <View style={styles.featuredOverlay}>
            <Text style={styles.featuredTitle}>{featuredShow.title}</Text>
            <Text style={styles.featuredDescription}>{featuredShow.description}</Text>
            <View style={styles.featuredButtons}>
              <View style={[styles.staticButton, styles.playButton]}>
                <Text style={styles.staticButtonText}>Play</Text>
              </View>
              <View style={[styles.staticButton, styles.listButton]}>
                <Text style={styles.staticButtonText}>+ My List</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Popular on Netflix */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular on Netflix</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {popularShows.map((show) => (
              <View key={show.id} style={styles.showCard}>
                <Image source={{ uri: show.image }} style={styles.showImage} />
                <Text style={styles.showTitle} numberOfLines={1}>{show.title}</Text>
                <Text style={styles.showDescription} numberOfLines={2}>{show.description}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Trending Now */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trending Now</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {trendingNow.map((show) => (
              <View key={show.id} style={styles.showCard}>
                <Image source={{ uri: show.image }} style={styles.showImage} />
                <Text style={styles.showTitle} numberOfLines={1}>{show.title}</Text>
                <Text style={styles.showDescription} numberOfLines={2}>{show.description}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Coming Soon */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Coming Soon</Text>
          <View style={styles.comingSoonCard}>
            <Image 
              source={{ uri: 'https://picsum.photos/300/200?random=9' }} 
              style={styles.comingSoonImage}
            />
            <View style={styles.comingSoonContent}>
              <Text style={styles.comingSoonTitle}>New Season Coming Saturday</Text>
              <Text style={styles.comingSoonText}>Don&apos;t miss the new episodes of your favorite shows</Text>
              <View style={styles.remindButton}>
                <Text style={styles.remindButtonText}>Remind Me</Text>
              </View>
            </View>
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
  },
  featuredSection: {
    height: 500,
    position: 'relative',
  },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  featuredOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  featuredTitle: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  featuredDescription: {
    color: 'white',
    fontSize: 16,
    marginBottom: 20,
    opacity: 0.9,
  },
  featuredButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  staticButton: {
    flex: 1,
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButton: {
    backgroundColor: '#E50914',
  },
  listButton: {
    backgroundColor: '#6D6D6E',
  },
  staticButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  showCard: {
    width: 140,
    marginRight: 12,
  },
  showImage: {
    width: 140,
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  showTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  showDescription: {
    color: '#999',
    fontSize: 12,
  },
  comingSoonCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 8,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  comingSoonImage: {
    width: 120,
    height: 120,
  },
  comingSoonContent: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  comingSoonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  comingSoonText: {
    color: '#999',
    fontSize: 14,
    marginBottom: 12,
  },
  remindButton: {
    alignSelf: 'flex-start',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#6D6D6E',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  remindButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});