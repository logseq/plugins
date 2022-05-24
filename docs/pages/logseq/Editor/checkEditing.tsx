import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const checkEditing: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="checkEditing"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="checkEditing"
       />
      </div>
  )
}

export default checkEditing