import React, { Component } from 'react'
import pika from '../poke-p.webp'
import style from '../HomePage/HomePage.module.css'


export default class HomePage extends Component {
  render() {
    return (
      <>
      <section className={style.mainSection}>
      <div className={style.imgBox}>
      <img className={style.pikaPic} alt="pika" src={pika} />
      </div>
      </section>
      </>
    )
  }
}
