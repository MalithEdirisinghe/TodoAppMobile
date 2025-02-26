# Modern Todo List App

A beautiful and functional Todo List application built with React Native and Redux Toolkit. This app allows users to add, complete, and delete todo items with local persistence using AsyncStorage.


## Features

-  Add new todo items with validation
-  Mark todo items as completed with visual feedback
-  Delete todo items
-  Persist todos locally using Redux and AsyncStorage
-  Beautiful modern UI with gradient header
-  Empty state visualization
-  Toast notifications for validation

## Tech Stack

- React Native
- Expo
- Redux Toolkit for state management
- AsyncStorage for local data persistence
- Expo Linear Gradient

## Setup Instructions

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd todo-list-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Install Expo Linear Gradient:
```bash
npx expo install expo-linear-gradient
```

### Running the App

```bash
npx expo start
```

Then, scan the QR code with the Expo Go app (Android) or the Camera app (iOS).

## Project Structure

```
/
  App.js            # Main app component with gradient header
  /src
    /components
      TodoInput.js  # Styled input field for adding new todos
      TodoItem.js   # Card-style individual todo item component
      TodoList.js   # List with empty state visualization
    /redux
      store.js      # Redux store configuration
      todoSlice.js  # Redux slice for todos (actions & reducers)
```

## Implementation Details

### Modern UI/UX

The app features a modern design with:
- Gradient header with rounded corners
- Card-style todo items with subtle shadows
- Custom checkbox design
- Animated feedback on interactions
- Empty state with illustration

### State Management with Redux Toolkit

The app uses Redux Toolkit for efficient state management:
- `addTodo`: Adds a new todo item with validation
- `toggleTodoCompletion`: Toggles the completion status with visual feedback
- `deleteTodo`: Removes a todo item
- `loadTodos`: Loads todos from AsyncStorage

### Persistence with AsyncStorage

Todo items are persisted locally:
- Todos are loaded from storage when the app starts
- Changes are automatically saved to AsyncStorage

## User Experience Improvements

- Input validation with toast notifications
- Visual feedback for completed tasks
- Smooth interactions with proper touch states
- Intuitive empty state messaging

## Future Enhancements

- Add animations for adding/removing todos
- Implement swipe-to-delete functionality
- Add categories and filtering options
- Enable drag and drop for reordering
- Implement dark mode support
- Add due dates and reminders

## License

[MIT License](LICENSE)