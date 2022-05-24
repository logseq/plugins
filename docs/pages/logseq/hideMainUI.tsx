import { NextPage } from 'next'
import { Description } from '@/components/Description'

const hideMainUI: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="hideMainUI"
          comment="
"
        />
      </div>
  )
}

export default hideMainUI