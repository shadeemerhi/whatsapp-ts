

interface Props {
  id: string
}

export default function Dashboard(props: Props) {
  return (
    <div>
      {props.id}
    </div>
  )
}
