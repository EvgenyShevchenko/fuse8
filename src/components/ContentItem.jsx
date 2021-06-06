import React from "react";
import homeImg from "../assets/img/home1.png"
import classNames from 'classnames';

function ContentItem({id, title, address, type, price}) {
    const label = type.replace(/([a-z])([A-Z])/g, '$1 $2');
    const formatPrice = price.toLocaleString('en-GB', {style: 'currency', currency: 'GBP'})


    return (
        <a href={id}>
            <div className="content-item">
                <div className="content-item__img">
                    <img src={homeImg} alt="Home"/>
                    <div className={classNames(
                        'content-item__type',
                        {
                            "content-item__type--blue": type === 'IndependentLiving',
                            "content-item__type--orange": type === 'SupportAvailable'
                        }
                    )}>{label}</div>
                </div>
                <div className="content-text__wrapper">
                    <h2 className="content-item__title">{title}</h2>
                    <p className="content-item__address">{address}</p>
                    <p className="content-item__price-desc">
                        New Properties for Sale from
                        <span className="content-item__price">{formatPrice}</span>
                    </p>
                    <p className="content-item__shared">
                        Shared Ownership Available
                    </p>
                </div>
            </div>
        </a>
    )
}

export default ContentItem;
