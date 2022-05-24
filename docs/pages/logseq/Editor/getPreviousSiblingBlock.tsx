import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getPreviousSiblingBlock: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getPreviousSiblingBlock"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="getPreviousSiblingBlock"
       />
      </div>
  )
}

export default getPreviousSiblingBlock