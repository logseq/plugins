import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const removeBlockProperty: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="removeBlockProperty"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="removeBlockProperty"
       />
      </div>
  )
}

export default removeBlockProperty