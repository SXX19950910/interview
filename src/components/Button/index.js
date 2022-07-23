export default function Button(props) {
    return (
        <div className={`${props.className} button cursor-pointer inline-block text-white bg-sky-500 px-2 py-1 rounded`} onClick={props.onClick}>
            { props.children }
        </div>
    )
}