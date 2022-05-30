import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const FileStorage: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="FileStorage"
          comment=""
        />

       <Discuss
          ns="."
          name="FileStorage"
       />
      </div>
  )
}

export default FileStorage