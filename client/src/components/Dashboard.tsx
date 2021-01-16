import Sidebar from './Sidebar';

interface Props {
  id: string
}

export default function Dashboard(props: Props) {
  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      <Sidebar id={props.id}/>
    </div>
  )
}
