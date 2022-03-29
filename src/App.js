import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


function App() {
  const [showAddTask,setshowAddTask] = useState(false)
  const [tasks,setTasks] = useState([
    {
      text: 'Doctors',
      id: 1,
      reminder: true,
      day: 'Feb 5th',
    },
    {
        id: 2,
        text: 'Metting',
        day: 'Feb 6th',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food',
        day: 'Feb 7th',
        reminder: false,
    }
  ])
  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) +1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }
  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
  }
  //Toggle Reminder
  const toggleReminder = (id) => { 
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task))
  }
  return (
    <div className='container'>
      <Header
        onAdd={() => setshowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder} /> :
        'No Tasks To Show'}
    </div>
  );
}

export default App;
