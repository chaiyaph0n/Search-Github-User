import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'
import UserDetail from './UserDetail'

describe('UserDetail - test', () => {
  const mockUserDetail = {
    login: 'sc',
    id: 20676,
    node_id: 'MDQ6VXNlcjIwNjc2',
    avatar_url: 'https://avatars2.githubusercontent.com/u/20676?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/sc',
    html_url: 'https://github.com/sc',
    followers_url: 'https://api.github.com/users/sc/followers',
    following_url: 'https://api.github.com/users/sc/following{/other_user}',
    gists_url: 'https://api.github.com/users/sc/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/sc/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/sc/subscriptions',
    organizations_url: 'https://api.github.com/users/sc/orgs',
    repos_url: 'https://api.github.com/users/sc/repos',
    events_url: 'https://api.github.com/users/sc/events{/privacy}',
    received_events_url: 'https://api.github.com/users/sc/received_events',
    type: 'User',
    site_admin: false,
    score: 355.71912,
  }

  afterEach(cleanup)

  it(`should not render when "userDetail" prop is empty`, () => {
    const { container } = render(<UserDetail userDetail={{}} />)
    expect(container.querySelector('[data-testid="user-detail-container-tid"]')).toBeNull()
  })

  it('should render when "userDetail" props is not empty', () => {
    const { getByTestId } = render(<UserDetail userDetail={mockUserDetail} />)
    expect(getByTestId('user-detail-container-tid')).not.toBeNull()
  })
})
