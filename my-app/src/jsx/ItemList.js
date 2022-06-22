function ItemList(props){
    return(
        <li key={props.item.id}>
            <input type="checkbox"/>
            <span>{props.item.title}</span>
        </li>
    )
}

export default ItemList;