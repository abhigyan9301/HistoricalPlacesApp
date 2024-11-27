import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

// Define props for DetailsScreen
type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen: React.FC<Props> = ({ route }) => {
  const { place } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{place.name}</Text>
      <Text>Status: {place.visited ? 'Visited' : 'Not Visited'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
});

export default DetailsScreen;
