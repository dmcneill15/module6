//example for error handling with Error Boundary
//Two ways to incorporate Error Boundary outside of event handler

//https://kentcdodds.com/blog/use-react-error-boundary-to-handle-errors-in-react

///------------------------------EXAMPLE ONE--------------------------------------
function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre style={{ color: 'red' }}>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}

function Bomb({ username }) {
    if (username === 'bomb') {
        throw new Error('💥 CABOOM 💥')
    }
    return `Hi ${username}`
}

function App() {
    const [username, setUsername] = React.useState('')
    const usernameRef = React.useRef(null)

    return (
        <div>
            <label>
                {`Username (don't type "bomb"): `}
                <input
                    placeholder={`type "bomb"`}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    ref={usernameRef}
                />
            </label>
            <div>
                <ErrorBoundary
                    FallbackComponent={ErrorFallback}
                    onReset={() => {
                        setUsername('')
                        usernameRef.current.focus()
                    }}
                    resetKeys={[username]}
                >
                    <Bomb username={username} />
                </ErrorBoundary>
            </div>
        </div>
    )
}


///------------------------------EXAMPLE TWO--------------------------------------
function Greeting() {
	const [{ status, greeting, error }, setState] = React.useState({
		status: 'idle',
		greeting: null,
		error: null,
	})

	function handleSubmit(event) {
		event.preventDefault()
		const name = event.target.elements.name.value
		setState({ status: 'pending' })
		fetchGreeting(name).then(
			(newGreeting) => setState({ greeting: newGreeting, status: 'resolved' }),
			(newError) => setState({ error: newError, status: 'rejected' }),
		)
	}

	return status === 'rejected' ? (
		<ErrorFallback error={error} />
	) : status === 'resolved' ? (
		<div>{greeting}</div>
	) : (
		<form onSubmit={handleSubmit}>
			<label>Name</label>
			<input id="name" />
			<button type="submit" onClick={handleClick}>
				get a greeting
			</button>
		</form>
	)
}