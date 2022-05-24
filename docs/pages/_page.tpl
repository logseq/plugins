import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const {{name}}: NextPage = () => {
  return (
      <div className="main-page-content">
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