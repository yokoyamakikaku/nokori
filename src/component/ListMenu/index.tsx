import { FC, ReactNode } from 'react'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import { Flex, Button, Divider, useTheme, Heading } from '@aws-amplify/ui-react'

export interface ListMenuProps {
  items: {
    label: ReactNode
    href: string
  }[]
}

const ListMenu: FC<ListMenuProps> = ({ items }) => {
  const theme = useTheme()

  return (
    <Flex direction="column" alignItems="stretch" gap='0'>
      {items.map((item, index) => (
        <Flex key={index} direction="column" alignItems="stretch" gap='0'>
          <Link href={item.href} passHref>
            <Button variation='link'
              width="100%"
              paddingBlock={theme.tokens.space.large}
              paddingInline={theme.tokens.space.large}>
              <Heading grow={1} level={3}>{item.label}</Heading>
              <FiArrowRight size={theme.tokens.fontSizes.xl.value} />
            </Button>
          </Link>
          <Divider />
        </Flex>
      ))}
    </Flex>
  )
}

export default ListMenu
