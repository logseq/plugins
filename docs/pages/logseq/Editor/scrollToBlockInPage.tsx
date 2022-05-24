import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const scrollToBlockInPage: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="scrollToBlockInPage"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="scrollToBlockInPage"
       />
      </div>
  )
}

export default scrollToBlockInPage