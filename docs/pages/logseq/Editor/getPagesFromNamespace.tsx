import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getPagesFromNamespace: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getPagesFromNamespace"
          comment="
"
        />

       <Discuss
          ns="Editor"
          name="getPagesFromNamespace"
       />
      </div>
  )
}

export default getPagesFromNamespace