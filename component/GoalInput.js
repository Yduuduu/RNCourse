import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

function GoalInput(props) {
    const [enteredHoalText, setEnteredHoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredHoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredHoalText);
        setEnteredHoalText('');
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder='Your course hoal!'
                onChangeText={goalInputHandler}
                value={enteredHoalText}
            />
            <Button title='Add Goal' onPress={addGoalHandler} />
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
    },
});
