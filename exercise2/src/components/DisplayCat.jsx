export function DisplayCat({ name, latinName, image }) {
    return (
        <li>
            <p><strong>{name}:</strong> {latinName}:
            <img src={image} alt={name+` image`}></img><br></br>
            </p>
        </li>
    )
}