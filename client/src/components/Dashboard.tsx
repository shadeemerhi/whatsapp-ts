import Sidebar from './Sidebar';

interface Props {
  id: string
}

export default function Dashboard(props: Props) {
  return (
    <Sidebar id={props.id}/>
  )
}
