import React from 'react'

interface Props {
  sourceData: Source[]
}

export interface Source {
  text: string
  value: string
  children?: Source[]
}

const Tree: React.FC<Props> = (props) => {
  const {sourceData} = props
  const recurse = (item: Source[], level = 1) => {
    const margin = (level - 1) * 16 + 'px'
    return item.map(i => <div key={i.value}>
      <div style={{marginLeft: margin}}>{i.text}</div>
      {i.children && recurse(i.children, level + 1)}
    </div>)
  }
  return (
    <div>
      <h1>tree</h1>
      {recurse(sourceData)}
    </div>
  )
}

export default Tree