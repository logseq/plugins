import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const setBlockIcon: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="setBlockIcon"
         />

        <Description
          ns="Editor"
          name="setBlockIcon"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="setBlockIcon"
       />
      </div>
  )
}

export default setBlockIcon