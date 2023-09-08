import PageContainer from '../PageContaienr'
import Breadcrumbs from './Breadcrumbs'
import ViewUser from './ViewUser'
import ViewUserMenu from './ViewUserMenu'

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
