import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const renamePage: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="renamePage"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="renamePage"
       />
      </div>
  )
}

export default renamePage