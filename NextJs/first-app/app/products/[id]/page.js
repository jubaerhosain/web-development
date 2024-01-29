export default function ProductDetails({params}) {
    const product = {
        name: "Man",
        description: "Human",
    };

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{params.id}</p>
        </div>
    );
}
