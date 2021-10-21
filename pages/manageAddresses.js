import { ProfileLayout } from '../components/Profile/web/ProfileLayout'
import { SideBar } from '../components/Profile/web/SideBar'
import { MainBar } from '../components/Profile/web/MainBar'
import { SideBarContent } from '../components/Profile/web/SideBarContent'
import { ManageAddresses } from '../components/ManageAddress'
export default function profile() {
  return (
    <ProfileLayout>
      <SideBar>
        <SideBarContent />
      </SideBar>
      <MainBar>
        <ManageAddresses />
      </MainBar>
    </ProfileLayout>
  )
}
