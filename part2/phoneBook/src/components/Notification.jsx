const Notification = ( { message, type } ) => {
    if(message === null){
        return null
    }
    const nombreClase = `notification ${type==="err"?"error":"success"}`
    return (
        <div className={nombreClase}>
            { message }
        </div>
    )
}


export default Notification