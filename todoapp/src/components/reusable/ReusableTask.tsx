import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, Checkbox, Tooltip } from "@mui/material";
import { ReusablePopOver } from "..";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useTodos } from "../../context/TodoProvider";
import { todoDetailType } from "../../types/todoType";
interface ReusableTaskProps {
  task: todoDetailType;
}

const ReusableTask: React.FC<ReusableTaskProps> = (props) => {
  const { task } = props;
  const { completed, name, category, id } = task;
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const { setTodos, onEditing, setOnEditing } = useTodos();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodos((prevTodos) => ({
      ...prevTodos,
      [category]: prevTodos[category].map((item) =>
        item.id === id ? { ...item, completed: event.target.checked } : item
      ),
    }));
  };

  return (
    <div className="md:p-8 rounded-2xl my-12 shadow-3xl border-l-[10px] border-green border-solid">
      <div className="flex justify-between items-center text-small md:text-regular ml-12">
        <p className={`flex-1 ${completed ? "line-through" : ""}`}>{name}</p>
        <div className="flex items-center">
          <AccessTimeIcon color="error" />
          <p className="ml-8 ">{`${task.hour}:${task.minute}`}</p>
        </div>

        <div>
          <Checkbox
            checked={completed ? completed : false}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <Tooltip title="Option" arrow className="cursor-pointer">
            <Button variant="text" onClick={(e) => handleClick(e)}>
              <MoreVertIcon sx={{ fontSize: "30px" }} />
            </Button>
          </Tooltip>
          <ReusablePopOver
            anchorEl={anchorEl}
            handleClose={handleClose}
            options={[
              {
                label: "Delete",
                icon: <DeleteIcon />,
                clickFunc: () => {
                  setOnEditing(null);
                  setAnchorEl(null);
                  setTodos((prevTodos) => ({
                    ...prevTodos,
                    daily: prevTodos.daily.filter((item) => item.name !== name),
                  }));
                },
              },
              {
                label: "Edit",
                icon: <EditIcon />,
                clickFunc: () => {
                  if (!onEditing) {
                    setAnchorEl(null);
                    setOnEditing(task);
                  }
                },
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ReusableTask;
