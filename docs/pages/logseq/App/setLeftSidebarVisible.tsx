import { NextPage } from 'next'
import { Description } from '@/components/Description'

const setLeftSidebarVisible: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="setLeftSidebarVisible"
          comment=""
        />
      </div>
  )
}

export default setLeftSidebarVisible