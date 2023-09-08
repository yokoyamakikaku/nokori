'use client'

import { FC, ReactNode } from 'react'
import Link from 'next/link'
import {
  FiHome as HomeIcon,
  FiBox as BoxIcon
} from 'react-icons/fi'

import { useTheme, Button, Flex, View, Heading, Divider } from '@aws-amplify/ui-react'
import { IconBaseProps } from 'react-icons'
import { I18n } from 'aws-amplify'

interface NavigationLinkProps {
  label: string
  href: string
  icon?: ReactNode
  exact?: boolean
}

const NavigationLink:FC<NavigationLinkProps> = ({
  href,
  label,
  exact,
  icon
}) => {
  const theme = useTheme()
  return (
    <Link href={href} passHref>
      <Button width="100%" variation='link' justifyContent="flex-start" alignItems="center" gap={theme.tokens.space.small}>
        {icon} {label}
      </Button>
    </Link>
  )
}

const Navigation:FC = () => {
  const theme = useTheme()

  const iconProps:IconBaseProps = { size: theme.tokens.fontSizes.large.value }
  return (
    <Flex
      direction="column" gap="0"
      alignItems="stretch"
      paddingBlock={theme.tokens.space.medium}
      style={{
        borderRight: `solid ${theme.tokens.borderWidths.small} ${theme.tokens.colors.border.disabled}`
      }}>
      <View padding={theme.tokens.space.medium}>
        <Heading level={4}>ooo病院</Heading>
      </View>
      <NavigationLink label={I18n.get('home')} href="/" exact icon={<HomeIcon {...iconProps} />} />
      <NavigationLink label={I18n.get('pack')} href="/pack" icon={<BoxIcon {...iconProps} />} />
    </Flex>
  )
}

export default Navigation
