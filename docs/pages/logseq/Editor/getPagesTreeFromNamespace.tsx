import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getPagesTreeFromNamespace: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="getPagesTreeFromNamespace"
         />

        <Description
          ns="Editor"
          name="getPagesTreeFromNamespace"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="getPagesTreeFromNamespace"
       />
      </div>
  )
}

export default getPagesTreeFromNamespace