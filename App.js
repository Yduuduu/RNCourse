import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './component/GoalItem';
import GoalInput from './component/GoalInput';

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    function addGoalHandler(enteredHoalText) {
        setCourseGoals((currentCoursGoals) => [
            ...currentCoursGoals,
            { text: enteredHoalText, id: Math.random().toString() },
        ]);
    }

    function deleteGoalHandler(id) {
        setCourseGoals((currentCoursGoals) => {
            return currentCoursGoals.filter((goal) => goal.id !== id);
        });
    }

    return (
        <View style={styles.appContainer}>
            <GoalInput onAddGoal={addGoalHandler} />
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    renderItem={(itemData) => {
                        return (
                            <GoalItem
                                text={itemData.item.text}
                                id={itemData.item.id}
                                onDeleteItem={deleteGoalHandler}
                            />
                        );
                    }}
                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
                    alwaysBounceVertical={false}
                />
                {/* <ScrollView alwaysBounceVertical={false}>
                    {courseGoals.map((goal, idx) => (
                        <View key={goal + idx} style={styles.goalItem}>
                            <Text style={styles.goalText}>{goal}</Text>
                        </View>
                    ))}
                </ScrollView> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        padding: 50,
        paddingHorizontal: 16,
    },
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
    goalsContainer: {
        flex: 4,
    },
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: '#fff',
    },
});
