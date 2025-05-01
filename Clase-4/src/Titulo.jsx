import React from 'react'

export function Titulo({color, titulo, size}) {

    
  return (
    <View>
      <Text style={{color: color}}>{titulo}</Text>
    </View>
  )
}
