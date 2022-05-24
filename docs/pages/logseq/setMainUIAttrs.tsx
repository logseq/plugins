import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const setMainUIAttrs: NextPage = () => {
  return (
      <div className="main-page-content">
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