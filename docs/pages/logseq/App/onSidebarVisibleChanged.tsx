import { NextPage } from 'next'
import { Description } from '@/components/Description'

const onSidebarVisibleChanged: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="onSidebarVisibleChanged"
          comment=""
        />
      </div>
  )
}

export default onSidebarVisibleChanged