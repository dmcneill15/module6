
function ErrorMessage({error, resetErrorBoundary}){
    console.error(error);

    return(
        <div className="ErrorMessage">
            <p>An error occured:</p>
            <pre>{error.message}</pre>
            <button onClick={()=>resetErrorBoundary()}>Try Again?</button>
        </div>
    );
}

export default ErrorMessage;