import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'

function ExploreMenu({category,setcategory}) {
  return (
    <div>
        <div className="explore-menu" id='exploremenu'>
            <h1>Explore Our Menu!</h1>
            <p className='explore-menu-text'>Choose from our diverse menu of expertly crafted dishes, delivered straight to your door, and enjoy a culinary experience that brings exceptional flavors and convenience right to your home</p>
            <div className="explore-menu-list">
                {
                    menu_list?.map(
                        (item, index) => {
                            return (
                                <div 
                                    key={index} 
                                    className="explore-menu-list-item" 
                                    onClick={() => { setcategory(prev => prev === item.menu_name ? "All" : item.menu_name) }}
                                >
                                    <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
                                    <p>{item.menu_name}</p>
                                </div>
                            )
                        }
                    )
                }
            </div>
            <hr/>
        </div>
    </div>
  )
}

export default ExploreMenu