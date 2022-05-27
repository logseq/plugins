import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const listFilesOfCurrentGraph: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Assets"
          name="listFilesOfCurrentGraph"
         />

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