import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const editBlock: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="editBlock"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="editBlock"
       />
      </div>
  )
}

export default editBlock