import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const {{name}}: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="{{ns}}"
          name="{{name}}"
         />

        <Description
          ns="{{ns}}"
          name="{{name}}"
          comment="{{comment}}"
        />

       <Discuss
          ns="{{ns}}"
          name="{{name}}"
       />
      </div>
  )
}

export default {{name}}