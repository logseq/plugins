import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const showMainUI: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="showMainUI"
          comment="
"
        />

       <Discuss
          ns="."
          name="showMainUI"
       />
      </div>
  )
}

export default showMainUI