import React from 'react'
import {Filtercolor} from '../../data/item'

export default function FilterColor() {
    return (
        <div className=''>{
            Filtercolor.map((val) => {
                return (
                    <div
                        key={val.id}
                        className={val.className}
                        style={{ backgroundColor: `${val.color}`, border: `${val.border}` }}>
                    </div>
                )
            })
        }

        </div>
    )
}
