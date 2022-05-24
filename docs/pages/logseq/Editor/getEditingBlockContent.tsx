import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getEditingBlockContent: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getEditingBlockContent"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="getEditingBlockContent"
       />
      </div>
  )
}

export default getEditingBlockContent