import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const removeBlock: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="removeBlock"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="removeBlock"
       />
      </div>
  )
}

export default removeBlock