import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const registerBlockContextMenuItem: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="registerBlockContextMenuItem"
         />

        <Description
          ns="Editor"
          name="registerBlockContextMenuItem"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="registerBlockContextMenuItem"
       />
      </div>
  )
}

export default registerBlockContextMenuItem