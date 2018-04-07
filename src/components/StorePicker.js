import React, {Component, Fragment} from 'react';

class StorePicker extends Component{
  render(){
    return(
      <form className="store-selector">
        <h2>Please Enter a store</h2>
      <input type="text" placeholder="Store Name"/>
    <button type="submit">Visit Store &rarr;</button>
      </form>
    )
  }
}

export default StorePicker;
