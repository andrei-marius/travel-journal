export default function Card(props){

    const bgImg = {
        backgroundImage: 'url(' + props.image_url + ')',
    };

    return (
        <div className="card-container">
            <div className="card">
                <div class="image" style={bgImg}></div>
                <div className="info-container">
                    <div className="location-container">
                        <i class="fa-solid fa-location-dot"></i>
                        <div className="country">{props.location}</div>
                        <a className="google-maps-link" href={props.google_maps_link}>View on Google Maps</a>
                    </div>
                    <h1 className="headline">{props.title}</h1>
                    <h1 className="date">{props.start_date} - {props.end_date}</h1>
                    <p className="description">{props.description}</p>
                </div>
            </div>
        </div>
    )
}