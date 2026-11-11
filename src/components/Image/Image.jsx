import './image.css'

function Image ({url}) {

    return (

        <div className="img-container">
            
            <img src={url}  />
        
        </div>

    )

}

export default Image