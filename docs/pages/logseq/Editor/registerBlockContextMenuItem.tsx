import { NextPage } from 'next'
import { Description } from '@/components/Description'

const registerBlockContextMenuItem: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="registerBlockContextMenuItem"
          comment="
"
        />
      </div>
  )
}

export default registerBlockContextMenuItem