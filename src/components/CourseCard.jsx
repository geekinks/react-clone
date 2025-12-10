function CourseCard({ img, title, desc, duration, level, topics, price, oldPrice }) {
    return (
        <div className="course-contain">
            <img src={img} className="course-image" />
            <div className="remaining-contain">
                <h3>{title}</h3>
                <p className="title">{desc}</p>
                <p className="duration">{duration}</p>
                <button className="intermediate">{level}</button>

                <div>
                    <p className="what-you">What you'll learn:</p>
                    {topics.map((t, i) => (
                        <button key={i} className="descr">{t}</button>
                    ))}
                </div>

                <div className="payment-button">
                    <div className="payment-installment">
                        <p className="discount">
                            {price} <span className="normal-price">{oldPrice}</span>
                        </p>
                        <p className="install-payment">installment payment</p>
                    </div>

                    <div className="buttons">
                        <button className="view">View Details</button>
                        <button className="apply">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseCard