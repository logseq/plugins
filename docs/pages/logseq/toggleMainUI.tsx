import { NextPage } from 'next'
import { Description } from '@/components/Description'

const toggleMainUI: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="toggleMainUI"
          comment="
"
        />
      </div>
  )
}

export default toggleMainUI