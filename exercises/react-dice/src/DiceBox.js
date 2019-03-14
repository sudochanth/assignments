import React, { Component } from 'react'

class DiceBox extends Component {
  constructor(){
    super()
    this.state = {
      die1: '',
      die2: '',
      die3: '',
      die4: '',
      die5: '',
      die6: ''
    }
  }

  getRand = () => {
    const die1 = Math.floor(Math.random() * 6 + 1);
    const die2 = Math.floor(Math.random() * 6 + 1);
    const die3 = Math.floor(Math.random() * 6 + 1);
    const die4 = Math.floor(Math.random() * 6 + 1);
    const die5 = Math.floor(Math.random() * 6 + 1);
    const die6 = Math.floor(Math.random() * 6 + 1);
    return this.setState({
      die1: die1,
      die2: die2,
      die3: die3,
      die4: die4,
      die5: die5,
      die6: die6
    })
  }
  render() {
    const { die1, die2, die3, die4, die5, die6 } = this.state;
    const styles = {
      flexDirection: 'row',
      border: 'solid 2px black',
      width: '25px',
      margin: '1%',
      padding: '5%',
      borderRadius: '5%'
    }
    return (
      <>
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={styles}>{die1}</div>
      <div style={styles}>{die2}</div>
      <div style={styles}>{die3}</div>
      <div style={styles}>{die4}</div>
      <div style={styles}>{die5}</div>
      <div style={styles}>{die6}</div>
      </div>
      <div style={{textAlign: 'center'}}>
      <button onClick={this.getRand}>Roll Dice</button>
      </div>
      </>
    )
  }
}

export default DiceBox
