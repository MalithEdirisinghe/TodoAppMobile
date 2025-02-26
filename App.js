import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import TodoInput from './src/components/TodoInput';
import TodoList from './src/components/TodoList';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['#4361ee', '#3a0ca3']}
          style={styles.header}
        >
          <Text style={styles.title}>Todo List</Text>
        </LinearGradient>
        <View style={styles.content}>
          <TodoInput />
          <TodoList />
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
  },
});