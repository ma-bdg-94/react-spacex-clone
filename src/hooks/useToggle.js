import { useCallback, useState } from "react"

export const useToggleDrawer = (initState = false) => {
  const [state, setState] = useState(initState)

  const toggleDrawer = useCallback(() => setState(state => !state), [])

  return [state, toggleDrawer]
}