import React, { useState } from "react";
import { ScrollView, View, Button, TextInput, StyleSheet, SafeAreaView, FlatList, Text } from "react-native";

const TodoListScreen = () => {
    const [todoListData, setTodoListData] = useState([]);
    const [todoText, setTodoText] = useState("");

    const handleChangeText = (text) => {
        setTodoText(text);
    };

    const handleButtonPress = () => {
        if (todoText.trim().length > 0){
            setTodoListData((value) => value.concat({ text: todoText }));
            setTodoText("");
        }       
    };

    const handleRenderListItem = ({ item }) => {
        return <Text key={item.text}>{item.text}</Text>;
    };

    return (
    <SafeAreaView style={ styles.container }>
        <View style={ styles.viewContainer }>
            <View>
                <TextInput 
                    placeholder="Escribe tu palabra" 
                    style={ styles.textInput }
                    placeholderTextColor="#c4c4c4"
                    value={todoText}
                    onChangeText={handleChangeText}
                />
                <Button title="Enter" onPress={handleButtonPress} />
            </View>
            <View>
                <FlatList
                    data={todoListData}
                    renderItem={handleRenderListItem}
                    keyExtractor={(item) => item.text}
                />
            </View>
        </View>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fffbfb",
        
    },
    viewContainer: {
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 12,
        paddingRight: 12
    },
    textInput: {
        
        backgroundColor: "#f5f5f5",
        color: "#212121",
        fontSize: 16,
        marginBottom: 16
    }
});

export default TodoListScreen;
