import React from 'react'
import UsersList from '../components/UsersList'

const Users = () => {
  const USERS = [
    {
      id: '1',
      name: 'Pinazza',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.izismile.com%2Fimg%2Fimg3%2F20100428%2F640%2Fshe_makes_random_640_03.jpg&f=1&nofb=1',
      places: 4,
    },
  ]
  return <UsersList items={USERS} />
}

export default Users
