import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadTodos = createAsyncThunk(
  'todos/loadTodos',
  async () => {
    try {
      const todosJson = await AsyncStorage.getItem('todos');
      return todosJson != null ? JSON.parse(todosJson) : [];
    } catch (e) {
      console.error('Failed to load todos from storage', e);
      return [];
    }
  }
);

const saveTodosToStorage = async (todos) => {
  try {
    await AsyncStorage.setItem('todos', JSON.stringify(todos));
  } catch (e) {
    console.error('Failed to save todos to storage', e);
  }
};

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
      if (action.payload.trim() !== '') {
        const newTodo = {
          id: Date.now().toString(),
          text: action.payload,
          completed: false,
        };
        state.items.push(newTodo);
        saveTodosToStorage(state.items);
      }
    },
    toggleTodoCompletion: (state, action) => {
      const todo = state.items.find(item => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveTodosToStorage(state.items);
      }
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveTodosToStorage(state.items);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(loadTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addTodo, toggleTodoCompletion, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;