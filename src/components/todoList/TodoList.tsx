import React, { FC, useState } from 'react';
import { TaskItem } from "./TaskItem";

export interface Task {
    uuid: string;
    label: string;
    done: boolean;
}

interface TodoListProps {
    initialTasks: Task[];
}

export const TodoList: FC<TodoListProps> = ({ initialTasks = [] }) => {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);

    const handleOnCheckInput = (taskToUpdate: Task) => {
        const newTasks = tasks.map(task => {
            if (task.uuid === taskToUpdate.uuid) {
                return { ...task, done: !task.done };
            }
            return task;
        });
        setTasks(newTasks);
    };

    const addNewTask = () => {
        const newTasks = [...tasks];
        newTasks.push({ uuid: '' + Math.random(), label: `Todo-${Math.random()}`, done: false })
        setTasks(newTasks);
    };

    return <div>
        <h1>Todo list</h1>
        {tasks.map(task => <TaskItem key={task.uuid}
                                     onCheckInput={handleOnCheckInput}
                                     task={task}/>)}
        <button onClick={addNewTask}>add</button>
    </div>
};
