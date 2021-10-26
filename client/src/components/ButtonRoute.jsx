import { withRouter } from 'react-router-dom'

const ButtonRoute = withRouter(({ history, ...props }) => (
  <button
    type='button'
    onClick={() => {
      history.push(props.buttonRoute)
    }}
  >
    {props.buttonLabel}
  </button>
))

export default ButtonRoute
