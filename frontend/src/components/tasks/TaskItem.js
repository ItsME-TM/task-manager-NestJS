import { useState } from 'react';
import { Card, CardContent, Typography, Checkbox, IconButton, Box, Chip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { updateTask } from '../../services/tasks.service';

const TaskItem = ({ task, onEdit, onDelete }) => {
  const [completed, setCompleted] = useState(task.completed);

  const handleToggleComplete = async () => {
    try {
      const newStatus = !completed;
      await updateTask(task.id, { ...task, completed: newStatus });
      setCompleted(newStatus);
    } catch (err) {
      console.error('Failed to update task status:', err);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent sx={{ display: 'flex', alignItems: 'flex-start' }}>
        <Checkbox
          checked={completed}
          onChange={handleToggleComplete}
          sx={{ mt: -0.5, mr: 1 }}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              textDecoration: completed ? 'line-through' : 'none',
              color: completed ? 'text.disabled' : 'text.primary',
            }}
          >
            {task.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {task.description}
          </Typography>
          <Box sx={{ display: 'flex', mt: 2, alignItems: 'center' }}>
            <Chip
              size="small"
              label={`Created: ${formatDate(task.createdAt)}`}
              variant="outlined"
              sx={{ mr: 1 }}
            />
            {completed && (
              <Chip size="small" color="success" label="Completed" />
            )}
          </Box>
        </Box>
        <Box>
          <IconButton size="small" onClick={onEdit} sx={{ mr: 1 }}>
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" onClick={onDelete} color="error">
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskItem;