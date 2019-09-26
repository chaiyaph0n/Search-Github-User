import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'

import UserList from './UserList'

describe('UserList - test', () => {
  const mockUserList = {
    total_count: 133307,
    incomplete_results: false,
    items: [
      {
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
      },
      {
        login: 'schacon',
        id: 70,
        node_id: 'MDQ6VXNlcjcw',
        avatar_url: 'https://avatars0.githubusercontent.com/u/70?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/schacon',
        html_url: 'https://github.com/schacon',
        followers_url: 'https://api.github.com/users/schacon/followers',
        following_url: 'https://api.github.com/users/schacon/following{/other_user}',
        gists_url: 'https://api.github.com/users/schacon/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/schacon/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/schacon/subscriptions',
        organizations_url: 'https://api.github.com/users/schacon/orgs',
        repos_url: 'https://api.github.com/users/schacon/repos',
        events_url: 'https://api.github.com/users/schacon/events{/privacy}',
        received_events_url: 'https://api.github.com/users/schacon/received_events',
        type: 'User',
        site_admin: false,
        score: 83.09916,
      },
    ],
  }

  afterEach(cleanup)

  it('should render nothing, when option list is empty', () => {
    const { container } = render(<UserList userList={{ items: [] }} />)
    expect(container.firstChild).toBeNull()
  })

  it('should render user list correctly', () => {
    const { getAllByTestId } = render(<UserList userList={mockUserList} />)
    expect(getAllByTestId(/user-option-wrapper-tid/).length).toBe(mockUserList.items.length)

    expect(getAllByTestId('user-image-tid')).not.toBeNull()
    expect(getAllByTestId('user-login-name-tid')).not.toBeNull()
  })
})
