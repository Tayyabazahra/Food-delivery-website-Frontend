import React, { useContext } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext'

const Fooditem = ({ id, price, description, image, name }) => {
  const{cartitems,addtocart,removefromcart,url}=useContext(StoreContext)


  return (
    <div>
      <div className="food-item">

        <div className="food-item-image-container">
          <img src={image} alt='food' className="food-item-image" />
          {!cartitems[id]
            ? <img src={assets.add_icon_white} alt='' className='add' onClick={() => addtocart(id)} />
            : <div className='food-item-counter'>
                <img className='' src={assets.remove_icon_red} alt='' onClick={() => removefromcart(id)} />
                <p>{cartitems[id]}</p>
                <img className='' src={assets.add_icon_green} alt='' onClick={() => addtocart(id)} />
              </div>
          }
        </div>

        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt='' />
          </div>
          <p className='food-item-desc'>{description}</p>
          <p className="food-item-price">${price}</p>
        </div>
      </div>
    </div>
  )
}

export default Fooditem
