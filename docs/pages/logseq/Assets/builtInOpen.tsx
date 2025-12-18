import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const builtInOpen: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Assets"
          name="builtInOpen"
         />

        <Description
          ns="Assets"
          name="builtInOpen"
          comment=""
        />

       <Discuss
          ns="Assets"
          name="builtInOpen"
       />
      </div>
  )
}

export default builtInOpen