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
  return (
    <div>
      tree
    </div>
  )
}

export default Tree