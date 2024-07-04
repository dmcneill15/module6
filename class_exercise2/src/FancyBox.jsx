
export function Callout(props) {
    return (
        <FancyBox color="blue">
            <h1 className="Callout-title">{props.title}</h1>
            <p className="Callout-message">{props.message}</p>
            {props.children} {/* everything in between the opening
    <Callout> and closing </Callout> tags */}
        </FancyBox>
    );
}

function FancyBox(props) {
    return (
        <div className={'FancyBox FancyBox-' + props.color}>
            {props.children} {/* everything in between the opening
    <FancyBox> and closing </FancyBox> tags */}
        </div>
    );
}

export function FullName(props) {
    return (
        <p>{props.first} {props.last}</p>
    )
}

