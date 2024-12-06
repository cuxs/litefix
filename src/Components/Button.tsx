import { FC, PropsWithChildren } from "react"

type ButtonProps={
  onClick: ()=>void
  type: 'solid' | 'transparent',
  icon?: string
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({onClick, children, type})=>{
  return (
    <>
    <button onClick={onClick} className="type">{children}</button>
    <style jsx>{
      `
      `     
      }</style>
    </>
  )
}