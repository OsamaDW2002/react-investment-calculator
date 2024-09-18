export function Inputs({label, onChange, name, value}) {

    return (
        <>
            <label>
                {label}
                <input type={'number'} required onChange={onChange} value={value}/>
            </label>
        </>
    )
}