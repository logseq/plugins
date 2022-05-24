import { NextPage } from 'next'
import { Description } from '@/components/Description'

const setMainUIAttrs: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="setMainUIAttrs"
          comment=""
        />
      </div>
  )
}

export default setMainUIAttrs