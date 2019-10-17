import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

// test commit

  const addGoalHandler = goalTitle => { 
    setCourseGoals(currentGoals => [...currentGoals, { id : Math.random().toString(), value: goalTitle }]);
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <FlatList 
      keyExtractor={(item, index) => item.id }  v
      data={courseGoals}
       renderItem={itemData => <GoalItem title={itemData.item.value}/> } 
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { 
    padding: 50
  },
});