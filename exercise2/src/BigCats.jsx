import {DisplayCat} from './components/DisplayCat'

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

    //function to dynamically add the image property to an individual cat
    function addImageProperty(cat){
        const imageName = cat.name.toLowerCase().replace(' ', '_') + '.jpg';
        cat = {...cat, image: imageName};
        return cat;
    };

    const catsWithImages = cats.map(addImageProperty);

    //need to have keys to keep track of individual items
    const BigCatList = catsWithImages.map(cat => (
        <DisplayCat key={cat.id} name={cat.name} latinName={cat.latinName} image={cat.image}/>
    ));

    return (
        <div>
            <ul className="catList">
                {BigCatList}
            </ul>
        </div>
    );
}

//RATHER MOVE COMPONENTS INTO THEIR OWN FOLDERS INSTEAD OF CREATING A COMPONENT WITHIN A COMPONENT
/*
function DisplayCat({ name, latinName, image }) {
    return (
        <li>
            <p><strong>{name}:</strong> {latinName}:
            <img src={image} alt={name+` image`}></img><br></br>
            </p>
        </li>
    )
}*/