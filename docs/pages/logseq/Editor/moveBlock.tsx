import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const moveBlock: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="moveBlock"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="moveBlock"
       />
      </div>
  )
}

export default moveBlock