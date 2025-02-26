import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleTodoCompletion, deleteTodo } from '../redux/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggleComplete = () => {
    dispatch(toggleTodoCompletion(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <Animated.View style={styles.container}>
      <TouchableOpacity 
        onPress={handleToggleComplete} 
        style={styles.todoContent}
        activeOpacity={0.7}
      >
        <View style={[
          styles.checkbox,
          todo.completed ? styles.checkboxCompleted : {}
        ]}>
          {todo.completed && <View style={styles.checkboxInner} />}
        </View>
        
        <Text 
          style={[
            styles.todoText, 
            todo.completed && styles.completedTodo
          ]}
        >
          {todo.text}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={handleDelete} 
        style={styles.deleteButton}
        activeOpacity={0.7}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 12,
    padding: 6,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  todoContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#4361ee',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxCompleted: {
    backgroundColor: '#4361ee',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'white',
  },
  todoText: {
    fontSize: 16,
    color: '#1f2937',
    flex: 1,
  },
  completedTodo: {
    textDecorationLine: 'line-through',
    color: '#9ca3af',
  },
  deleteButton: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
    marginRight: 6,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default TodoItem;