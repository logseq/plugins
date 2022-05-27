import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const setBlockCollapsed: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="setBlockCollapsed"
         />

        <Description
          ns="Editor"
          name="setBlockCollapsed"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="setBlockCollapsed"
       />
      </div>
  )
}

export default setBlockCollapsed