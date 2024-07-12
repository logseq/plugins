import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const setMainUIInlineStyle: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="."
          name="setMainUIInlineStyle"
         />

        <Description
          ns="."
          name="setMainUIInlineStyle"
          comment=""
        />

       <Discuss
          ns="."
          name="setMainUIInlineStyle"
       />
      </div>
  )
}

export default setMainUIInlineStyle