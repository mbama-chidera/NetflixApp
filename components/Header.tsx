import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface HeaderProps {
  title?: string;
  showLogo?: boolean;
}

export default function Header({ title, showLogo = true }: HeaderProps): React.ReactElement {
  return (
    <View style={styles.header}>
      {showLogo ? (
        <Text style={styles.logo}>NETFLIX</Text>
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
      <View style={styles.headerIcons}>
        <Image 
          source={{ uri: 'https://i.pravatar.cc/40' }}
          style={styles.avatar}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#141414',
  },
  logo: {
    color: '#E50914',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 4,
  },
});