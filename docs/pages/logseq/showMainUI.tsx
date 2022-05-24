import { NextPage } from 'next'
import { Description } from '@/components/Description'

const showMainUI: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="showMainUI"
          comment="
"
        />
      </div>
  )
}

export default showMainUI