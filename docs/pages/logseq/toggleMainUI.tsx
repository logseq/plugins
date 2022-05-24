import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const toggleMainUI: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="toggleMainUI"
          comment="
"
        />

       <Discuss
          ns="."
          name="toggleMainUI"
       />
      </div>
  )
}

export default toggleMainUI