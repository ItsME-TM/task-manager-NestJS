import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const TaskFilter = ({ filter, setFilter }) => {
  return (
    <FormControl fullWidth sx={{ mb: 1, maxWidth: 100, maxHeight: 1 }}>
      <InputLabel id="filter-label">Select</InputLabel>
      <Select
        labelId="filter-label"
        value={filter}
        label="Select"
        onChange={(e) => setFilter(e.target.value)}
        sx={{
          fontSize: '0.75rem',        
          minHeight: '32px',          
          maxHeight: '32px',
          '& .MuiSelect-select': {
            padding: '4px 12px',      
          },
        }}
      >
        <MenuItem value="all" sx={{ fontSize: '0.75rem', fontWeight: 'bold' }}>All</MenuItem>
        <MenuItem value="completed" sx={{ fontSize: '0.75rem', fontWeight: 'bold' }}>Completed</MenuItem>
        <MenuItem value="pending" sx={{ fontSize: '0.75rem', fontWeight: 'bold' }}>Pending</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TaskFilter;