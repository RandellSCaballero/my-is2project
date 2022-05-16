export default function MostrarContenidoDinamico (props:any){
    if(props.oculto == false){
    return(
        <>
        <span>
            <div className='genericBlock4block'>
                {props.img}
                <div className="spacerb4"/>
                <div className="titleb4">
                    <h6 className="title4c"><b>{props.titulo}</b></h6>
                </div>
                <div className="text4">
                    <p className="ptext4">{props.texto}</p>
                </div>
            </div>
        </span>
        </>
    )
}else if(props.oculto == true){
    return(
        <>
        </>
    )
}else{
    return(
        <>
        </>
    )
}
}