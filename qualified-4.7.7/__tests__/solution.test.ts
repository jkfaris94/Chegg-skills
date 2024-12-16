import { addTask, completeTask, listTasks, fetchTasks, Task } from '../src/solution';

describe('Task Functions', () => {
  // Test for adding a task
  it('should add a new task correctly', () => {
    const dueDate = new Date();
    const task: Task = addTask('Test Task', 'Test Description', dueDate);
    
    expect(task).toEqual({
      title: 'Test Task',
      description: 'Test Description',
      status: false,
      dueDate
    });
  });

  it('should mark a task as completed', () => {
    const dueDate = new Date();
    let task: Task = addTask('Complete Task', 'Complete Description', dueDate);
    task = completeTask(task);
    
    expect(task.status).toBe(true);
  });

  it('should list all tasks', () => {
    const tasks: Task[] = [
      { title: 'Task 1', description: 'Description 1', status: false, dueDate: new Date() },
      { title: 'Task 2', description: 'Description 2', status: true, dueDate: new Date() }
    ];

    console.log = jest.fn();
    listTasks(tasks);

    expect(console.log).toHaveBeenCalledWith('Task 1 - Incomplete');
    expect(console.log).toHaveBeenCalledWith('Task 2 - Completed');
  });

  it('should fetch tasks asynchronously', async () => {
    const tasks = await fetchTasks();

    expect(tasks.length).toBeGreaterThan(0);
    tasks.forEach(task => {
      expect(task).toHaveProperty('title');
      expect(task).toHaveProperty('description');
      expect(task).toHaveProperty('status');
      expect(task).toHaveProperty('dueDate');
    });
  });
});
