import { Button, ConfigProvider } from "antd"
import type { FC, ReactNode, CSSProperties } from "react"
import type { ButtonProps } from "antd"
import { useCallback, useMemo } from "react"

interface ColorButtonProps extends Omit<ButtonProps, "color" | "size"> {
  children: ReactNode
  color?: "primary" | "secondary" | "third"
  size?: "small" | "medium" | "large"
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const ColorButton: FC<ColorButtonProps> = ({ 
  children, 
  color = "primary", 
  size = "medium",
  type,
  className = "",
  style,
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  ...props 
}) => {
  // Configs - memoized to avoid recreating on every render
  const configs = useMemo(() => ({
    size: {
      small: { padding: "4px 16px", fontSize: "14px", height: "32px" },
      medium: { padding: "8px 24px", fontSize: "16px", height: "40px" },
      large: { padding: "12px 32px", fontSize: "18px", height: "48px" },
    },
    style: {
      primary: {
        background: "#1e3a5f", // Dark navy blue
        border: "none",
        borderRadius: "50px",
        color: "#ffffff",
        boxShadow: "0 2px 6px rgba(30, 58, 95, 0.25), 0 -1px 3px rgba(30, 58, 95, 0.15)",
        fontFamily: "'EB Garamond', serif",
        fontWeight: 400,
      },
      secondary: {
        background: "#2563eb", // Royal blue
        border: "none",
        borderRadius: "50px",
        color: "#ffffff",
        boxShadow: "0 2px 6px rgba(37, 99, 235, 0.25), 0 -1px 3px rgba(37, 99, 235, 0.15)",
        fontFamily: "'EB Garamond', serif",
        fontWeight: 400,
      },
      third: {
        background: "#fef3c7", // Pale cream
        border: "1px solid #1e3a5f",
        borderRadius: "50px",
        color: "#1e3a5f",
        fontWeight: 400,
        boxShadow: "0 2px 6px rgba(30, 58, 95, 0.08), 0 -1px 3px rgba(30, 58, 95, 0.04)",
        fontFamily: "'EB Garamond', serif",
      }
    },
    hover: {
      primary: { 
        background: "#1a2f4d",
        boxShadow: "0 4px 10px rgba(30, 58, 95, 0.35), 0 -2px 5px rgba(30, 58, 95, 0.25)"
      },
      secondary: { 
        background: "#1d4ed8",
        boxShadow: "0 4px 10px rgba(37, 99, 235, 0.35), 0 -2px 5px rgba(37, 99, 235, 0.25)"
      },
      third: { 
        background: "#fde68a",
        boxShadow: "0 4px 10px rgba(30, 58, 95, 0.12), 0 -2px 5px rgba(30, 58, 95, 0.06)"
      }
    },
    disabled: {
      primary: { background: "linear-gradient(to right, #9ca3af, #6b7280)", color: "#ffffff", opacity: 0.6, cursor: "not-allowed", boxShadow: "none" },
      secondary: { background: "linear-gradient(to right, #9ca3af, #6b7280)", color: "#ffffff", opacity: 0.6, cursor: "not-allowed", boxShadow: "none" },
      third: { background: "#f3f4f6", color: "#9ca3af", opacity: 0.6, cursor: "not-allowed", boxShadow: "none", border: "1px solid #e5e7eb" }
    }
  }), [])

  // Button style
  const buttonStyle: CSSProperties = {
    ...configs.style[color],
    ...(disabled ? configs.disabled[color] : {}),
    ...configs.size[size],
    ...style,
  }

  // Hover handlers
  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return
    const hover = configs.hover[color]
    e.currentTarget.style.background = hover.background
    e.currentTarget.style.boxShadow = hover.boxShadow
    props.onMouseEnter?.(e)
  }, [color, disabled, loading, configs.hover, props])

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return
    const normal = configs.style[color]
    e.currentTarget.style.background = normal.background as string
    e.currentTarget.style.boxShadow = normal.boxShadow as string
    props.onMouseLeave?.(e)
  }, [color, disabled, loading, configs.style, props])

  // Content với icons
  const content = (
    <>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </>
  )

  return (
    <ConfigProvider theme={{ token: { borderRadius: 50 } }}>
      <Button 
        {...props} 
        type={type || (color === "third" ? "default" : "primary")}
        size={size === "small" ? "small" : size === "large" ? "large" : "middle"}
        className={`transition-all duration-300 ${disabled ? "cursor-not-allowed" : ""} ${className}`.trim()}
        style={buttonStyle}
        disabled={disabled}
        loading={loading}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </Button>
    </ConfigProvider>
  )
}

export default ColorButton
