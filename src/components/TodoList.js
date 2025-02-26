import React, { useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loadTodos } from '../redux/todoSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#4361ee" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  if (items.length === 0) {
    return (
      <View style={styles.centered}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6195/6195678.png' }}
          style={styles.emptyImage}
          resizeMode="contain"
        />
        <Text style={styles.emptyText}>No tasks yet</Text>
        <Text style={styles.emptySubtext}>Add a new task to get started!</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={items}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <TodoItem todo={item} />}
      style={styles.list}
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 20,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
    opacity: 0.8,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4b5563',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 16,
    color: '#9ca3af',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  errorText: {
    fontSize: 18,
    color: '#ef4444',
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default TodoList;