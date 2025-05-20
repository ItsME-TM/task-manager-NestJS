import React, { useEffect } from 'react';
import { getAllTasks } from './services/tasks.service';

const TestApi = () => {
  useEffect(() => {
    const test = async () => {
      try {
        const res = await getAllTasks();
        console.log('All Tasks:', res.data);
      } catch (err) {
        console.error('API error:', err);
      }
    };
    test();
  }, []);

  return <div>Check the console for task API test output</div>;
};

export default TestApi;
