import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const setMainUIAttrs: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="."
          name="setMainUIAttrs"
         />

        <Description
          ns="."
          name="setMainUIAttrs"
          comment=""
        />

       <Discuss
          ns="."
          name="setMainUIAttrs"
       />
      </div>
  )
}

export default setMainUIAttrs