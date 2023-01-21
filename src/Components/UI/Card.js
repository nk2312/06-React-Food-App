

const Card=(props)=>{
    const name="card " + props.customClassName
    return (
    <div className={name}>
                {props.children}
    </div>
    )

}

export default Card;
