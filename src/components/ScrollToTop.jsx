import React, { useState, useEffect } from 'react'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gray-600 text-white p-3 rounded-md shadow-lg hover:bg-orange-600 transition flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <MdKeyboardDoubleArrowUp size={24} />
        </button>
      )}
    </>
  )
}