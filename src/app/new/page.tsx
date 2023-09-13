import PageContainer from '@/app/component/PageContaienr'
import Breadcrumbs from './Breadcrumbs'
import CreateOrganization from './CreateOrganization'

const NewOrganizationPage = () => {
  return (
    <PageContainer>
      <Breadcrumbs />
      <CreateOrganization />
    </PageContainer>
  )
}

export default NewOrganizationPage
