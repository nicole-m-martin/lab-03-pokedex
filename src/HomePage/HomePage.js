import React, { Component } from 'react'
import pika from '../img/poke-p.webp'
import style from '../HomePage/HomePage.module.css'
import enter from '../img/enter.png'

export default class HomePage extends Component {
  render() {
    return (
      <>
      <section className={style.mainSection}>
      <div className={style.imgBox}>
      <img className={style.pikaPic} alt="pika" src={pika} />
      </div>
      <div className={style.enterBox}>
      <img className={style.enter} alt="enter" src={enter} />
      </div>
    
      </section>
      </>
    )
  }
}
