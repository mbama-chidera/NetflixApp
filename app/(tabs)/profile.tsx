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

interface Profile {
  id: string;
  name: string;
  avatar: string;
  isKids?: boolean;
}

export default function ProfileScreen() {
  const profiles: Profile[] = [
    { id: '1', name: 'For Philio', avatar: 'https://i.pravatar.cc/100?img=1' },
    { id: '2', name: 'Kids', avatar: 'https://i.pravatar.cc/100?img=2', isKids: true },
    { id: '3', name: 'John', avatar: 'https://i.pravatar.cc/100?img=3' },
    { id: '4', name: 'Sarah', avatar: 'https://i.pravatar.cc/100?img=4' },
  ];

  const myList = [
    { id: '1', title: 'One Piece', image: 'https://picsum.photos/150/225?random=20' },
    { id: '2', title: 'Dark', image: 'https://picsum.photos/150/225?random=21' },
    { id: '3', title: 'Stranger Things', image: 'https://picsum.photos/150/225?random=22' },
    { id: '4', title: 'The Crown', image: 'https://picsum.photos/150/225?random=23' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#141414" />
      <Header title="My Netflix" showLogo={false} />
      
      <ScrollView style={styles.scrollView}>
        {/* Choose Profile Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Choose Your Profile</Text>
          <View style={styles.profilesGrid}>
            {profiles.map((profile) => (
              <View key={profile.id} style={styles.profileCard}>
                <View style={styles.avatarContainer}>
                  <Image source={{ uri: profile.avatar }} style={styles.avatar} />
                  {profile.isKids && (
                    <View style={styles.kidsBadge}>
                      <Text style={styles.kidsText}>Kids</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.profileName}>{profile.name}</Text>
              </View>
            ))}
            {/* Add Profile */}
            <View style={styles.addProfileCard}>
              <View style={styles.addProfileIcon}>
                <Ionicons name="add" size={32} color="#666" />
              </View>
              <Text style={styles.addProfileText}>Add Profile</Text>
            </View>
          </View>
        </View>

        {/* My List Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My List</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {myList.map((item) => (
              <View key={item.id} style={styles.listItem}>
                <Image source={{ uri: item.image }} style={styles.listImage} />
                <Text style={styles.listTitle} numberOfLines={1}>{item.title}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Account Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account & Settings</Text>
          <View style={styles.menuList}>
            <View style={styles.menuItem}>
              <Ionicons name="person-outline" size={24} color="white" />
              <Text style={styles.menuText}>Account</Text>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </View>
            
            <View style={styles.menuItem}>
              <Ionicons name="notifications-outline" size={24} color="white" />
              <Text style={styles.menuText}>Notifications</Text>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </View>
            
            <View style={styles.menuItem}>
              <Ionicons name="lock-closed-outline" size={24} color="white" />
              <Text style={styles.menuText}>Privacy & Security</Text>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </View>
            
            <View style={styles.menuItem}>
              <Ionicons name="help-circle-outline" size={24} color="white" />
              <Text style={styles.menuText}>Help & Support</Text>
              <Ionicons name="chevron-forward" size={20} color="#666" />
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
    paddingHorizontal: 16,
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
  profilesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  profileCard: {
    alignItems: 'center',
    width: '30%',
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 8,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  kidsBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#E50914',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  kidsText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  profileName: {
    color: '#999',
    fontSize: 14,
    textAlign: 'center',
  },
  addProfileCard: {
    alignItems: 'center',
    width: '30%',
  },
  addProfileIcon: {
    width: 80,
    height: 80,
    borderRadius: 4,
    backgroundColor: '#2A2A2A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  addProfileText: {
    color: '#666',
    fontSize: 14,
    textAlign: 'center',
  },
  listItem: {
    marginRight: 12,
    width: 120,
  },
  listImage: {
    width: 120,
    height: 180,
    borderRadius: 8,
    marginBottom: 8,
  },
  listTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  menuList: {
    backgroundColor: '#1A1A1A',
    borderRadius: 8,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  menuText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
    marginLeft: 12,
  },
});