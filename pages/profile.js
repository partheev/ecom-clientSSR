import React from 'react'
import { MainBar } from '../components/Profile/web/MainBar'
import { MainBarContent } from '../components/Profile/web/MainBarContent'
import { ProfileLayout } from '../components/Profile/web/ProfileLayout'
import { SideBar } from '../components/Profile/web/SideBar'
import { SideBarContent } from '../components/Profile/web/SideBarContent'
export default function profile() {
  return (
    <ProfileLayout>
      <SideBar>
        <SideBarContent />
      </SideBar>
      <MainBar>
        <MainBarContent />
      </MainBar>
    </ProfileLayout>
  )
}
