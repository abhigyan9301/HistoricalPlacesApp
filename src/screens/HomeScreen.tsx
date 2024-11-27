import React from 'react';
import { FlatList, Button, View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleVisited, suggestRandom } from '../redux/actions';
import { useAppSelector } from '../hooks/useAppSelector';
import HistoricalPlaceCard from '../components/HistoricalPlaceCard';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

// Define props for HomeScreen
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const places = useAppSelector((state) => state.places);
  const suggestedPlace = useAppSelector((state) => state.suggestedPlace);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HistoricalPlaceCard
            place={item}
            onPress={() => dispatch(toggleVisited(item.id))}
          />
        )}
      />
      <Button
        title="Suggest Random Place"
        onPress={() => dispatch(suggestRandom())}
      />
      {suggestedPlace && (
        <Button
          title={suggestedPlace.name}
          onPress={() =>
            navigation.navigate('Details', { place: suggestedPlace })
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#FFF' },
});

export default HomeScreen;
