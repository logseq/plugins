import { NextPage } from 'next'
import { Description } from '@/components/Description'

const listFilesOfCurrentGraph: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Assets"
          name="listFilesOfCurrentGraph"
          comment=""
        />
      </div>
  )
}

export default listFilesOfCurrentGraph