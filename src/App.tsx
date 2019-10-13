import React from 'react';

const initialStore = [{
  id: 1,
  name: 'Chicken Momo',
  image: 'http://spicyworld.in/recipeimages/chicken-momo.jpg',
  price: 10.50,
  count: 4
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

class App extends React.Component {

  state = {
    store: initialStore
  }

  decrementItem = (item: any) => {
    let { store } = this.state
    store[store.indexOf(item)].count > 0 ?
    store[store.indexOf(item)].count -= 1 :
    store[store.indexOf(item)].count = 0
    this.setState({store})
  }

  incrementItem = (item: any) => {
    let { store } = this.state
    store[store.indexOf(item)].count += 1
    this.setState({store})
  }

  render () {
    const { store } = this.state
    // TODO: add a cart checkout functionality
    return (
      <div className="container App">
        <div className="row">
          {store && store.map((item: any) => (
            <div key={item.id} className="thumbnail">
              <img src={item.image} alt={item.name}/>
              <p>{item.name}</p>
              <p>${item.price}</p> 
              <div className="btn-grp">
                <button onClick={() => this.decrementItem(item)}>
                  -
                </button>
                <button onClick={() => this.incrementItem(item)}>
                  +
                </button>
                <span>
                  {item.count}
                </span>
              </div> 
              <br/>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
