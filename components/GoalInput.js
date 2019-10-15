import React, { useState } from 'React'
import {View, TextInput, StyleSheet, Button } from 'react-native';


const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      }

    return (
        <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goals" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal}/>
        <Button title="ADD" onPress={props.OnAddGoal.bind(this)}/> 
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
      },
      input: {
        width: '80%',
        borderBottomColor: 'black', 
        borderWidth: 1, 
        padding: 10
      }
})
export default GoalInput;

