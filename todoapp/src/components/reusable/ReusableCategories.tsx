import React from "react";
import daily from "../../assets/img/daily-routine.png";
import work from "../../assets/img/work.png";
import planned from "../../assets/img/planned.png";
import event from "../../assets/img/party.png";
import personal from "../../assets/img/personal.png";
import shopping from "../../assets/img/shopping.png";
interface ReusableCategoryProps {
  title: string;
  todos: number | string;
  cate: string;
}
const getImgCategories = (cate: string) => {
  let img;
  switch (cate) {
    case "daily":
      img = daily;
      break;
    case "event":
      img = work;
      break;
    case "personal":
      img = personal;
      break;
    case "planned":
      img = planned;
      break;
    case "shopping":
      img = shopping;
      break;
    default:
      img = event;
  }
  return img;
};

const ReusableCategories: React.FC<ReusableCategoryProps> = (props) => {
  const { title, todos, cate } = props;
  return (
    <div className="py-16 px-12 shadow-3xl hover:shadow-4xl cursor-pointer my-8 rounded-lg flex items-center">
        <img
          alt=""
          src={getImgCategories?.(cate)??"https://cdn-icons-png.flaticon.com/512/8634/8634320.png"}
          className="w-[60px] h-[60px]"
        />
      <div className="ml-12">
        <h4 className="font-bold mb-8">{title}</h4>
        <p className="text-gray text-xSmall">
          {todos ? "See " + todos + " todos" : "+ Add some"}{" "}
        </p>
      </div>
    </div>
  );
};

export default ReusableCategories;
