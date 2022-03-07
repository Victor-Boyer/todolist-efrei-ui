import { DefaultCard } from "../molecules/Card";

export const List = ({ items }) => {
  return (
    <DefaultCard>
      <div>
        Todos
        <ul>
          {items && items.map((item) => <li key={item.id}>{item.title}</li>)}
        </ul>
      </div>
    </DefaultCard>
  );
};
