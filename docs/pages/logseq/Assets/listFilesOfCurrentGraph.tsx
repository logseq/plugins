import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const listFilesOfCurrentGraph: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Assets"
          name="listFilesOfCurrentGraph"
          comment=""
        />

       <Discuss
          ns="Assets"
          name="listFilesOfCurrentGraph"
       />
      </div>
  )
}

export default listFilesOfCurrentGraph