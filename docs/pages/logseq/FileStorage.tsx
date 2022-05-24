import { NextPage } from 'next'
import { Description } from '@/components/Description'

const FileStorage: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="FileStorage"
          comment=""
        />
      </div>
  )
}

export default FileStorage