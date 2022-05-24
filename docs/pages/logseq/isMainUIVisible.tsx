import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const isMainUIVisible: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="isMainUIVisible"
          comment=""
        />

       <Discuss
          ns="."
          name="isMainUIVisible"
       />
      </div>
  )
}

export default isMainUIVisible