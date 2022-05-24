import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const setMainUIInlineStyle: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="setMainUIInlineStyle"
          comment="
"
        />

       <Discuss
          ns="."
          name="setMainUIInlineStyle"
       />
      </div>
  )
}

export default setMainUIInlineStyle