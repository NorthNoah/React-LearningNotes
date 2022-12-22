import NhContext from './context/theme-context'
function HomeBanner() {

    return <div>
        <span>HomeBanner</span>
        {
        <NhContext.Consumer>
            {
                value => {
                    return <h2>{value.name}</h2>
                }
            }
        </NhContext.Consumer>
        }
    </div>
}

export default HomeBanner