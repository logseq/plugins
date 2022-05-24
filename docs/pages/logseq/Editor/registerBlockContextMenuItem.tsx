import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const registerBlockContextMenuItem: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="registerBlockContextMenuItem"
          comment="
"
        />

       <Discuss
          ns="Editor"
          name="registerBlockContextMenuItem"
       />
      </div>
  )
}

export default registerBlockContextMenuItem