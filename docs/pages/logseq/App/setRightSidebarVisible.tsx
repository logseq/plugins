import { NextPage } from 'next'
import { Description } from '@/components/Description'

const setRightSidebarVisible: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="setRightSidebarVisible"
          comment=""
        />
      </div>
  )
}

export default setRightSidebarVisible