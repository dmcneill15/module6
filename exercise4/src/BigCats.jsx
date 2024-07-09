import { useState } from "react";

export function BigCats() {
    const defaultCats = [
        { name: 'Tiger', latinName: 'Panthera tigris', id: 1 },
        { name: 'Cheetah', latinName: 'Acinonyx jubatus', id: 2 },
        { name: 'Cougar', latinName: 'Puma concolor', id: 3 },
        { name: 'Lion', latinName: 'Panthera leo', id: 4 },
        { name: 'Jaguar', latinName: 'Panthera onca', id: 5 },
        { name: 'Leopard', latinName: 'Panthera pardus', id: 6 },
        { name: 'Snow leopard', latinName: 'Panthera uncia', id: 7 },
    ];

    const [cats, setCats] = useState(defaultCats);  //add a useState to maintain the state of the array
    const[originalCats] = useState(defaultCats);    //maintain the original list of cats for filtering & sorting

    const BigCatList = cats.map(cat => (
        <DisplayCat key={cat.id} name={cat.name} latinName={cat.latinName} />
    ));

    function sortAtoZ(){
        const sortedCats = [...originalCats].sort((a,b)=>a.name.localeCompare(b.name)); //sort the full array element, by comapring the names
        setCats(sortedCats);
    }

    function sortZtoA(){
        let sortedCats = [...originalCats].sort((a,b)=>a.name.localeCompare(b.name));
        sortedCats.reverse();
        setCats(sortedCats);
    }

    function filterOnP(){
        let filteredCats = [...originalCats].filter((a)=>a.latinName.includes('Panthera'));
        setCats(filteredCats);
    }

    return (
        <div>
            <div>
                <ul className="catList">
                    {BigCatList}
                </ul>
            </div>

            <div>
                <button onClick={sortAtoZ}>Sort A to Z</button>
                <button onClick={sortZtoA}>Sort Z to A</button>
                <button onClick={filterOnP}>Filter for Panthera</button>
                <button onClick={()=>setCats(defaultCats)}>Reset to Original</button>
            </div>
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
