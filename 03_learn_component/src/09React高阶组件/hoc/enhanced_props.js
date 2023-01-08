import React, { PureComponent } from 'react'

function enhancedUserInfo(OriginComponent) {
    
    class NewComponent extends PureComponent {
        constructor() {
            super()
            this.state = {
                userInfo: {
                    name: "coderwhy",
                    level: 99
                }
            }

        }
        render() {
            return (
                <OriginComponent {...this.state.userInfo}/>
            )
        }
    }
    return NewComponent
    
}
export default enhancedUserInfo