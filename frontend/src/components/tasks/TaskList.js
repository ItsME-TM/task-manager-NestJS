import { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import TaskFilter from './TaskFilter';
import { getAllTasks, createTask, updateTask, deleteTask } from '../../services/tasks.service';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [filter, setFilter] = useState('all');

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await getAllTasks();
      setTasks(response.data);
      setError('');
    } catch (err) {
      console.error('Failed to fetch tasks:', err);
      setError('Failed to load tasks. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (task) => {
    try {
      const response = await createTask(task);
      setTasks([...tasks, response.data]);
      setOpenForm(false);
    } catch (err) {
      console.error('Failed to add task:', err);
      setError('Failed to add task. Please try again.');
    }
  };

  const handleUpdateTask = async (id, updatedTask) => {
    try {
      const response = await updateTask(id, updatedTask);
      setTasks(tasks.map((task) => (task.id === id ? response.data : task)));
      setOpenForm(false);
      setCurrentTask(null);
    } catch (err) {
      console.error('Failed to update task:', err);
      setError('Failed to update task. Please try again.');
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (err) {
      console.error('Failed to delete task:', err);
      setError('Failed to delete task. Please try again.');
    }
  };

  const handleEditClick = (task) => {
    setCurrentTask(task);
    setOpenForm(true);
  };

  const handleFormClose = () => {
    setOpenForm(false);
    setCurrentTask(null);
  };

  const filteredTasks = tasks.filter((task) => {
    const isCompleted = task.completed === true || task.completed === 'true';
    if (filter === 'completed') return isCompleted;
    if (filter === 'pending') return !isCompleted;
    return true;
  });

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ py: 4, px: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4" component="h1">
            My Tasks
        </Typography>
        <TaskFilter filter={filter} setFilter={setFilter} />
      </Box>
      {error && <Typography color="error">{error}</Typography>}
      {filteredTasks.length === 0 ? (
        <Typography variant="body1" sx={{ mt: 2 }}>
          No tasks yet. Add a new task to get started!
        </Typography>
      ) : (
        <Box sx={{ mt: 2 }}>
          {filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onEdit={() => handleEditClick(task)}
              onDelete={() => handleDeleteTask(task.id)}
            />
          ))}
        </Box>
      )}
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        onClick={() => setOpenForm(true)}
      >
        <AddIcon />
      </Fab>
      <TaskForm
        open={openForm}
        onClose={handleFormClose}
        onSubmit={currentTask ? (task) => handleUpdateTask(currentTask.id, task) : handleAddTask}
        currentTask={currentTask}
      />
    </Box>
  );
};

export default TaskList;