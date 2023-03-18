import './index.css'

const CardItem = props => {
  const {eachItem} = props
  const {title, description, imgUrl, className} = eachItem
  return (
    <li className={className}>
      <h1 className="head">{title}</h1>
      <p className="info">{description}</p>
      <div className="imgCont">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
