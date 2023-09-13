'use client'

import { Flex,Loader } from '@aws-amplify/ui-react'

const Loading = () => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Loader />
    </Flex>
  )
}

export default Loading
