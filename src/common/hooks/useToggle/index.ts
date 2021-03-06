import { useState, useCallback } from 'react'

function useToggle(defaultValue: boolean = false) {
	const [isOpen, setIsOpen] = useState(defaultValue)
	const toggle = useCallback(() => setIsOpen(!isOpen), [setIsOpen, isOpen])

	return { isOpen, toggle }
}

export default useToggle
