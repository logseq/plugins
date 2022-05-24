import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const hideMainUI: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="hideMainUI"
          comment="
"
        />

       <Discuss
          ns="."
          name="hideMainUI"
       />
      </div>
  )
}

export default hideMainUI