import React, { Component } from 'react'

class List extends Component {
  render() {
    const numbers = [3,4,5,6]
    const newNumbers = numbers.map(function(numbers){
        console.log(numbers)
        return  <li>{numbers}</li>
    })
    console.log(newNumbers)
    return (
      <div>
      <ul>{newNumbers}</ul>
      
        
      </div>
    )
  }
}

export default List;
