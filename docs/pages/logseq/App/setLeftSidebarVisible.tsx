import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const setLeftSidebarVisible: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="setLeftSidebarVisible"
          comment=""
        />

       <Discuss
          ns="App"
          name="setLeftSidebarVisible"
       />
      </div>
  )
}

export default setLeftSidebarVisible