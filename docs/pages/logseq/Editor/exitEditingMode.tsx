import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const exitEditingMode: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="exitEditingMode"
         />

        <Description
          ns="Editor"
          name="exitEditingMode"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="exitEditingMode"
       />
      </div>
  )
}

export default exitEditingMode