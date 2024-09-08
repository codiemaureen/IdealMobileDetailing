import Service from "./Service"
import '../style/details.css'

const Details = ({ services }) => {
  return (
    <section className="details-section">
     {services.map((service) => (
      <Service key={service.id} service={service} />
     ))}
    </section>
  )
}

export default Details
