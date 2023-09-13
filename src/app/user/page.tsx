import PageContainer from '@/app/component/PageContaienr'
import Breadcrumbs from './component/Breadcrumbs'
import ViewUser from './component/ViewUser'
import ViewUserMenu from './component/ViewUserMenu'

const UserPage = () => {
  return (
    <PageContainer>
      <Breadcrumbs />
      <ViewUser />
      <ViewUserMenu />
    </PageContainer>
  )
}

export default UserPage
