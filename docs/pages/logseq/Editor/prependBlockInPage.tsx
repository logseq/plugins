import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const prependBlockInPage: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="prependBlockInPage"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="prependBlockInPage"
       />
      </div>
  )
}

export default prependBlockInPage