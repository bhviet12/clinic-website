import type { FC, ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
  className?: string
}

const Container: FC<ContainerProps> = ({ 
  children, 
  className = ""
}) => {
  return (
    <div 
      className={`max-w-[1526px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[149.5px] ${className.trim()}`}
    >
      {children}
    </div>
  )
}

export default Container
