import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

const TaskSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required')
    .max(100, 'Title must be at most 100 characters'),
  description: Yup.string()
    .required('Description is required')
    .max(500, 'Description must be at most 500 characters'),
});

const TaskForm = ({ open, onClose, onSubmit, currentTask }) => {
  const initialValues = currentTask
    ? { title: currentTask.title, description: currentTask.description }
    : { title: '', description: '' };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{currentTask ? 'Edit Task' : 'Add New Task'}</DialogTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={TaskSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <DialogContent>
              <Field
                as={TextField}
                fullWidth
                id="title"
                name="title"
                label="Task Title"
                margin="dense"
                error={touched.title && Boolean(errors.title)}
                helperText={touched.title && errors.title}
              />
              <Field
                as={TextField}
                fullWidth
                id="description"
                name="description"
                label="Task Description"
                margin="dense"
                multiline
                rows={4}
                error={touched.description && Boolean(errors.description)}
                helperText={touched.description && errors.description}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={onClose}>Cancel</Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                {currentTask ? 'Update' : 'Add'}
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default TaskForm;