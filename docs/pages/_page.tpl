import { NextPage } from 'next'
import { Description } from '@/components/Description'

const {{name}}: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="{{ns}}"
          name="{{name}}"
          comment="{{comment}}"
        />
      </div>
  )
}

export default {{name}}