export function BigCats() {
    const cats = [
        { name: 'Cheetah', latinName: 'Acinonyx jubatus', id: 1 },
        { name: 'Cougar', latinName: 'Puma concolor', id: 2 },
        { name: 'Jaguar', latinName: 'Panthera onca', id: 3 },
        { name: 'Leopard', latinName: 'Panthera pardus', id: 4 },
        { name: 'Lion', latinName: 'Panthera leo', id: 5 },
        { name: 'Snow leopard', latinName: 'Panthera uncia', id: 6 },
        { name: 'Tiger', latinName: 'Panthera tigris', id: 7 }
    ];

    const BigCatList = cats.map(cat => (
        <DisplayCat key={cat.id} name={cat.name} latinName={cat.latinName} />
    ));

    return (
        <div>
            <ul className="catList">
                {BigCatList}
            </ul>
        </div>
    );
}

function DisplayCat({ name, latinName }) {
    return (
        <li>
            <p><strong>{name}:</strong> {latinName}</p>
        </li>
    )
}