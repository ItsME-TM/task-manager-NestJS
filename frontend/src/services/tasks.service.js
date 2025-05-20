import api from "./api";

export const getAllTasks = () => {
    return api.get('/tasks');
};

export const getTaskById = (id) => {
    return api.get(`/tasks/${id}`);
};

export const createTask = (task) => {
    return api.post('/tasks', task);
};

export const updateTask = (id, task) => {
    return api.put(`/tasks/${id}`, task);
};

export const deleteTask = (id) => {
    return api.delete(`/tasks/${id}`);
};