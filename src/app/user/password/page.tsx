import PageContainer from '@/app/component/PageContaienr'
import Breadcrumbs from './component/Breadcrumbs'
import UpdatePassword from './component/UpdatePassword'

const PasswordSettingPage = () => {
  return (
    <PageContainer>
      <Breadcrumbs />
      <UpdatePassword />
    </PageContainer>
  )
}

export default PasswordSettingPage
