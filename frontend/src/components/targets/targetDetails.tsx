
function TargetDetails({details}: {details?: string[] | undefined}) {
    return (
        <details>
            <summary>Detalles</summary>
            <ul>
                {details?.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>
        </details>
    )
}

export default TargetDetails