import React, { useState } from 'react';
import Frac from './Frac';
import '../styles/Chunk.css'

const FILLED = "filled"
const SHADED = "shaded"
const EMPTY = "empty"

function Block({ type, border }) {
  return <div className={`block ${type}`} />
}

function Divider({ solid = false }) {
  return <div className={`divider ${solid && "solid"}`} />
}

export default function Chunk({ n, filled = 0, shaded = 0, label, divider, initClosed = false }) {
  if (filled + shaded > n) throw new Error(`${filled} + ${shaded} > ${n}`)

  const [closed, setClosed] = useState(initClosed)

  const dividerContainerStyle = {
    width: `${(filled + shaded) / n * 100}%`
  }
  const labelStyle = {
    left: `${filled / n * 50}%`
  }

  const toggleClosed = () => setClosed(p => !p)

  return (
    <div className="chunk">
      {[...Array(filled)].map((_, idx) => <Block type={FILLED} />)}
      {[...Array(shaded)].map((_, idx) => <Block type={SHADED} />)}
      {[...Array(n - filled - shaded)].map(() => <Block type={EMPTY}/>)}
      <div className="label" style={labelStyle}>
        <div className="number" onClick={toggleClosed}>
          { closed ? "" : <Frac a={label.a} b={label.b} /> }
        </div>
        {
          label.unit &&
          <div className="unit">
            {label.unit}
          </div>
        }
      </div>
      <div className="divider-container" style={dividerContainerStyle}>
        <Divider solid />
        { divider && [...Array(filled + shaded - 1)].map(() => <Divider />) }
        <Divider solid />
      </div>
    </div>
  )
}