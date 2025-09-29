
// Think of this code as a function

const RecipeCardTiles = ({ image, title, description }) => {
    return (
        <div>
            <div className="mt-5">
                <div className="card" style={{ width: '18rem' }}>
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="#" className="btn btn-primary">See More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeCardTiles;