import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const onSidebarVisibleChanged: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="onSidebarVisibleChanged"
          comment=""
        />

       <Discuss
          ns="App"
          name="onSidebarVisibleChanged"
       />
      </div>
  )
}

export default onSidebarVisibleChanged