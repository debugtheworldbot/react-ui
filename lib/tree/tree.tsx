import React from 'react'

interface Props {
  sourceData: Source[]
}

interface Source {
  text: string
  value: string
  children?: Source[]
}

const Tree: React.FC<Props> = (props) => {
  const {sourceData} = props
  const recurse = (item: Source[]) => {
    return item.map(i => <div key={i.value}>
      <div>{i.text}</div>
      {i.children && recurse(i.children)}
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