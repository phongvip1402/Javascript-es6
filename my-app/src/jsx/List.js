import ItemList from "./ItemList";

export default function List(props){
    const listItems = props.items.map(item => <ItemList item={item}/>)
    return(
        <ul>
            {listItems}
        </ul>
    );
    }