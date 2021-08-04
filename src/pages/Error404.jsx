import React from 'react'
import { useLocation } from 'react-router-dom'

function Error404() {
  const location = useLocation()
  return (
    <div>
      <h1>404</h1>
      <p>입력하신 주소({location.pathname})를 찾을 수 없습니다.</p>
    </div>
  )
}

export default Error404
