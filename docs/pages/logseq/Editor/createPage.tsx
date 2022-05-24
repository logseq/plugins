import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const createPage: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="createPage"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="createPage"
       />
      </div>
  )
}

export default createPage