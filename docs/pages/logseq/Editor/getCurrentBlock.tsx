import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getCurrentBlock: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getCurrentBlock"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="getCurrentBlock"
       />
      </div>
  )
}

export default getCurrentBlock