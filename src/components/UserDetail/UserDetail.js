import React from 'react'

function UserDetail({ userDetail = {} }) {
  const isUserDetailEmpty = Object.keys(userDetail).length === 0

  if (isUserDetailEmpty) return false
  return <div data-testid="user-detail-container-tid">test</div>
}

export default UserDetail
