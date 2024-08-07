import Service from "./Service"


const Details = ({ services }) => {
  return (
    <div>
     {services.map((service) => (
      <Service key={service.id} service={service} />
     ))}
    </div>
  )
}

export default Details
