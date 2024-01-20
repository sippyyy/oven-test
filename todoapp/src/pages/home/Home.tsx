import React from "react";
import { useTodos } from "../../context/TodoProvider";
import ReusableCategories from "../../components/reusable/ReusableCategories";
import { Link } from "react-router-dom";
import { FormAddTask, ReusableTask } from "../../components";
import thumbnail from "../../assets/img/todo.png";
import { todoType } from "../../types/todoType";
type TodoKeys = keyof todoType;
const categories:TodoKeys[] = [
  "daily",
  "planned",
  "personal",
  "work",
  "shopping",
  "event",
];

const Home: React.FC = () => {
  const { todos } = useTodos();
  return (
    <div className="flex justify-center my-20">
      <div className="container ">
        <div className="flex items-center my-12">
          <div className="flex-1">
            <h2 className="text-large font-bold mb-12">Hello, you</h2>
            <p>Can I have you today? Let's add some todo tasks</p>
          </div>
          <img className="w-[200px] md:w-[400px] ml-12" src={thumbnail} />
        </div>
        <div className="my-12">
          <h3 className="font-bold text-darkGreen text-medium mb-8">
            Todo Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-2">
            {categories.map(category=>(
              <Link to={`/${category}`}>
              <ReusableCategories
                cate={category}
                key={category}
                todos={todos?.[category]?.length??0}
                title={category.toUpperCase()}
              />
            </Link>
            ))}
          </div>
        </div>
        <div className="my-12">
          <h3 className="font-bold text-medium text-darkGreen mb-12">
            Add Task
          </h3>
          <FormAddTask />
        </div>
        <div className="my-12">
          <h3 className="font-bold text-medium text-darkGreen mb-12">
            New Daily Tasks
          </h3>
          {todos.daily.map((todo, index) =>
            index <= 4 ? <ReusableTask task={todo} key={index} /> : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
