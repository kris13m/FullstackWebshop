



function Item({ data }: { data: any }){

    return(
        <div className = "item">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <img src = {data.imgLink} height="200px" alt = "item image missing :("></img>
        <p >price: {data.price ? data.price + ",-" : "log in to see prices! :D"}</p>
        <p>review score: {data.rating}</p>
        <p>reviews: {data.amountOfRating}</p>
        <p>quantity: {data.quantity}</p>
        <p>category: {data.category}</p>
        </div>
        
    );
}

export default Item;