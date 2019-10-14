import React from 'react';
import Cart from './Cart';

const initialStore = [{
  id: 1,
  name: 'Chicken Momo',
  image: 'http://spicyworld.in/recipeimages/chicken-momo.jpg',
  price: 10.50,
  count: 0
}, {
  id: 2,
  name: 'Spicy Mexican Potatoes',
  image: 'https://cdn.images.express.co.uk/img/dynamic/14/285x214/272187_1.jpg',
  price: 8.50,
  count: 0
}, {
  id: 3,
  name: 'PBJ Sandwich',
  image: 'https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/DesktopImages/2018_Grilled-Peanut-Butter-and-Jelly_20336_600x600.jpg?ext=.jpg',
  price: 5.90,
  count: 0
}]

const App: React.FC = () => {
  const [store, setStore] = React.useState(initialStore)

  const decrementItem = (item: any) => {    
    store[store.indexOf(item)].count !== 0 ?
    store[store.indexOf(item)].count -= 1 :
    store[store.indexOf(item)].count = 0
    setStore([...store])
  }

  const incrementItem = (item: any) => {
    store[store.indexOf(item)].count += 1
    setStore([...store])
  }

  const getTotalPrice = () => {
    let price: number = 0
    store.forEach(item => {
      price += item.count * item.price
    })
    return price
  }

  return (
    <div style={{backgroundColor: '#000'}}>
      <div className="container App">
        <div className="row">
          {store && store.map((item: any) => (
            <div key={item.id} className="thumbnail">
              <img src={item.image} alt={item.name}/>
              <p>{item.name}</p>
              <p>${item.price}</p> 
              <div className="btn-grp">
                <button onClick={() => decrementItem(item)}>
                  -
                </button>
                <button onClick={() => incrementItem(item)}>
                  +
                </button>
                <span>
                  &nbsp;{item.count}
                </span>
              </div> 
              <br/>
            </div>
          ))}
        </div>
      </div>
      <Cart store={store} getTotalPrice={getTotalPrice}/>
    </div>
  )
} 

export default App;
