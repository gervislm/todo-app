# Project Todo-App with React

## Description

This React tasks project is not the common task application, it is built with a composition of components, use react hooks and custom hooks also react router and data persistence simulating an API in local storage, it allows you to create tasks, mark them as completed, search and filter the tasks, edit them and delete them, if they are modified in another tab it will ask you to update by checking the data.

## Features

1. **Create Tasks**: Users can add new tasks by specifying a title and description.

2. **Mark Tasks as Completed**: Users can mark a task as completed or unmark it if it is not completed

3. **Edit Task**: Users can edit the task if they changed or made a typing error

4. **Delete Tasks**: Users can delete tasks that are no longer necessary.

5. **Filter Tasks**: Filters can be applied to view only the task you type in the search bar, or all tasks.

6. **Data Persistence**: Tasks are stored locally in the user's browser so that they persist even after closing the application.

7. **React Router**: This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation.

## Facility

1. Clone this repository to your local machine using the following command:

   ```
   git clone https://github.com/gervislm/todo-app.git
   ```

2. Navigate to the project directory:

   ```
   cd todo-app
   ```

3. Install dependencies using npm or yarn:

   ```
   npm install
   ```

   either

   ```
   yarn install
   ```

## Use

Once you have installed the dependencies, you can start the application using the following command:

```
npm start
```

This will start the development server and open the application in your default browser. Now you can start using the app to manage your tasks.

## Folder and File Structure

- **src/**
  - **components/**: Contains the React components used in the application.
  - **App.js**: The main component that defines the structure of the application and manages the global state of tasks.
  - **index.js**: Application input file that renders the application to the DOM.

## Contribution

If you would like to contribute to this project, follow these steps:

1. Fork the repository on GitHub.
2. Clone your fork repository to your local machine.
3. Create a new branch for your contribution:
   ```
   git checkout -b new-feature
   ```
4. Make your changes and commit:
   ```
   git add .
   git commit -m "Description of changes"
   ```
5. Upload your changes to your fork repository on GitHub:
   ```
   git push origin new-feature
   ```
6. Create a pull request from your fork repository on GitHub.

## License

This project is licensed under the MIT License. For details, see the [LICENSE](LICENSE) file.

---

I hope you enjoy working on this project and that it is useful for your task management needs with React! If you have any questions or problems, feel free to create an issue in the repository.
