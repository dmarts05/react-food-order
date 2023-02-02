export default function Card(props) {
  return (
    <div
      className={`rounded-xl ${
        props.dark ? 'bg-zinc-800' : 'bg-white'
      } p-6 shadow-lg ${props.className}`}
    >
      {props.children}
    </div>
  );
}
