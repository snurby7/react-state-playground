import { observer } from 'mobx-react'
import React from 'react'
import { IRoasterSnapshotIn } from '../store'

interface IRoasterListProps {
  roasters: IRoasterSnapshotIn[]
}

export const RoasterList = observer(
  ({ roasters }: IRoasterListProps): JSX.Element => {
    return (
      <div>
        <h2>Roaster List</h2>
        {roasters.map((roaster) => {
          return (
            <div>
              {roaster.name} - {roaster.id}
            </div>
          )
        })}
      </div>
    )
  }
)
