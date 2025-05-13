import Service from "./Service"
import '../style/details.css'
import MobileService from "./MobileService"

const Details = ({ services }) => {
  return (
    <div className="details-container">
    <section className="details-section">
     {services.map((service) => (
      <Service key={service.id} service={service} />
     ))}
    </section>
    <MobileService />
    </div>
  )
}

export default Details
