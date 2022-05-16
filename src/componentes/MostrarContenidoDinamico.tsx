export default function MostrarContenidoDinamico (props:any){
    if(props.oculto == false){
    return(
        <>
        <span>
            <div className='bgroundContBlock2genericBlck'>
                <div className="genericBlockSection">
                {props.imagen}
                <div className="genericBlockTitleSection">
                    <h3 className="genericBlockTitleH3"><b>{props.titulo}</b></h3>
                </div>
                <div className="genericBlockTextSection">
                    <p className="genericBlockTextP">{props.texto}</p>
                </div>
                        <div className='bground3BoxText2Section'>
                            <a className='aBoxTextSection'><b>{props.link}</b> </a>
                            <div className='simple-arrow'></div>
                        </div>
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