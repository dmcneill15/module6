//Create a greeting component

/*
export function Greeting({name="World", children}){
    return(
        <div>
            Hello {name}! {children}
        </div>
    );
}*/

//corrected code
export function Greeting({name="World", children}){
    return(
        <div>
            Hello {name}! 
            <div>{children}</div>
        </div>
    );
}