import SingleItem from "./SingleItem";
import "./Items.css";

const Items = ({ items, editCompleted, removeItem, setEditId }) => {  // Added setEditId
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem 
            key={item.id} 
            item={item} 
            editCompleted={editCompleted}
            removeItem={removeItem}
            setEditId={setEditId}  // Pass it to SingleItem
          />
        );
      })}
    </div>
  );
};

export default Items;