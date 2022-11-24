import React from 'react'
import NavigationDot from './NavigationDot'
import Social from './Social'

//? HIGHER ORDER FUNCTION
const AppWrapp = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={` relative ${classNames}`}>
      <Social/>
      <div>
        <Component/>
      </div>
      <NavigationDot active={idName}/>
    </div>
  )
}

export default AppWrapp