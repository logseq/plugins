import { NextPage } from 'next'
import { Description } from '@/components/Description'

const scrollToBlockInPage: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="scrollToBlockInPage"
          comment=""
        />
      </div>
  )
}

export default scrollToBlockInPage