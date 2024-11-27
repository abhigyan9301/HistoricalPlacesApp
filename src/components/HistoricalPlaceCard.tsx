import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Place } from '../redux/reducers';

interface HistoricalPlaceCardProps {
  place: Place;
  onPress: () => void;
}

const HistoricalPlaceCard: React.FC<HistoricalPlaceCardProps> = ({ place, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Text style={styles.title}>{place.name}</Text>
    <Text style={styles.status}>
      {place.visited ? 'Visited' : 'Not Visited'}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: { padding: 16, backgroundColor: '#fff', marginBottom: 8, borderRadius: 8 },
  title: { fontSize: 18, fontWeight: '600' },
  status: { marginTop: 4, color: '#777' },
});

export default HistoricalPlaceCard;
