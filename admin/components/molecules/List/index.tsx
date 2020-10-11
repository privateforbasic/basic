import cn from "classnames";

const List = ({ list, itemName, index, onClick, canAddNewItem = true }) => {
  return (
    <div className="menu">
      <ul>
        {list.map((_: any, idx: number) => (
          <li
            key={idx}
            onClick={() => onClick(idx)}
            className={cn({ current: idx === index })}
          >
            {itemName} {idx + 1}
          </li>
        ))}
        {canAddNewItem && (
          <li
            onClick={() => onClick(-1)}
            className={cn("addNewItem", { current: -1 === index })}
          >
            +
          </li>
        )}
      </ul>
    </div>
  );
};

export default List;
