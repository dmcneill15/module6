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
    const[originalCats, setOriginalCats] = useState(defaultCats);    //maintain the original list of cats for filtering & sorting
    const [nextId, setNextId] = useState(defaultCats.length + 1); // Initialize the next ID


    const BigCatList = cats.map(cat => (
        <DisplayCat 
        key={cat.id} 
        name={cat.name} 
        latinName={cat.latinName} 
        onDelete={()=>{handleDeleteCat(cat.id)}}/>
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

    const handleAddCat = (newCat) => {
        newCat.id = nextId; // Assign the next unique ID
        setNextId(nextId + 1); // Increment the next ID
        setCats([...cats, newCat]);
        setOriginalCats([...cats, newCat]);
    }

    const handleDeleteCat = (catId) => {
        const filteredCats = [...originalCats].filter((cat)=>cat.id != catId);
        setCats(filteredCats);
        setOriginalCats(filteredCats);
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
                <button onClick={()=>setCats(originalCats)}>Reset to Original</button>
            </div>

            <div>
                <AddCat onAddCat={handleAddCat}></AddCat>
            </div>
        </div>
    );
}

function DisplayCat({ name, latinName, onDelete }) {
    return (
        <li>
            <p><strong>{name}:</strong> {latinName}
            <button onClick={onDelete}>Delete</button></p>
        </li>
    )
}

function AddCat({onAddCat}){
    const[catName, setCatName] = useState('');
    const[latinName, setLatinName] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        //add submitted variables to the cats list - need to pass it a new cat
        const newCat = {
            name:catName,
            latinName:latinName
        };
        onAddCat(newCat);
    };

    return(
        <div className = "AddBigCatForm">
            <form onSubmit={handleSubmit}>
                <label>Cat Name:
                    <input name='catName' value={catName}
                    onChange={(e)=> setCatName(e.target.value)}/>
                </label>
                <label>Latin Name:
                    <input name='latinName' value={latinName}
                    onChange={(e)=> setLatinName(e.target.value)}/>
                </label>
                <button>Add Cat</button>
            </form>
        </div>
    )
}
