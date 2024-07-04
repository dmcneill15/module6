//Create a greeting component

export function Greeting({name="World", children}){
    return(
        <div>
            Hello {name}! {children}
        </div>
    );
}