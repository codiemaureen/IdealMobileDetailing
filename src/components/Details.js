import Service from "./Service"
import '../style/details.css'

const Details = ({ services }) => {
  return (
    <div className="details-container">
    <section className="details-section">
     {services.map((service) => (
      <Service key={service.id} service={service} />
     ))}
    </section>
    </div>
  )
}

export default Details
