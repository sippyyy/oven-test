import React from "react";
import { useTodos } from "../../context/TodoProvider";
import { FormAddTask, ReusableTask } from "../../components";
import { useParams } from "react-router-dom";
import { Category } from "../../types/todoType";

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: Category }>();
  const { todos } = useTodos();
  return category ? (
    <div className="fixed flex justify-center top-[80px] bottom-0 left-0 right-0">
      <div className="container">
        <div className="h-3/5 overflow-y-auto mb-12">
          {todos?.[category].map((todo) => (
            <ReusableTask key={todo.id} task={todo} />
          ))}
        </div>
        <FormAddTask />
      </div>
    </div>
  ) : null;
};

export default CategoryPage;
