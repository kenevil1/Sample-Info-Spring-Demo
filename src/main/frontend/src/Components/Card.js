function Card(props) {
    const expiryColour = (daysLeft) => {
        return daysLeft <= 15 ? "expiryRed" : "expiryGreen";
    }

    return(
        <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
                <div className="card-header py-3 text-white bg-primary border-primary">
                    <h6 className>{props.name}</h6>
                </div>
                <div className="card-body">
                    <p><b>Expiry in: </b><span className={expiryColour(props.expiryInDays)}>{props.expiryInDays}</span> days</p>
                    <p><b>{props.sampleSource}</b></p>
                </div>
            </div>
        </div>
        
    );
}

export default Card;