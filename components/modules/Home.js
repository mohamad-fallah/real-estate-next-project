import Link from 'next/link'
import React from 'react'

export default function Home({title, id, price, meterage, roomCount, img}) {
  return (
    <>
    <div className="card">
          <img src="img/gal-2.jpeg" alt="House 6" className="card__img" />
          <h5 className="card__title">{title}</h5>
          <svg className="card__like">
            <use href="img/sprite.svg#icon-heart-full"></use>
          </svg>
          <div className="card__details">
            <svg className="card__icon">
              <use href="img/sprite.svg#icon-map-pin"></use>
            </svg>
            <p className="card__text">مالدیو</p>

            <svg className="card__icon">
              <use href="img/sprite.svg#icon-profile-male"></use>
            </svg>
            <p className="card__text">{roomCount} اتاق</p>

            <svg className="card__icon">
              <use href={img}></use>
            </svg>
            <p className="card__text">{meterage} متر مربع</p>

            <svg className="card__icon">
              <use href="img/sprite.svg#icon-key"></use>
            </svg>
            <p className="card__text">{price} میلیون تومان</p>
          </div>

          <Link href={`/home/${id}`} className="btn btn-brown btn-card">
            مشاهده ملک
          </Link>
        </div>
    </>
  )
}
