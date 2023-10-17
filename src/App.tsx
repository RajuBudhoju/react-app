import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {/* <ListGroup
        items={["hyderabad", "Bangolore", "Chenni"]}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      /> */}

      <Button onClick={() => console.log("Clicked")}>My Button</Button>
    </div>
  );
}

export default App;
