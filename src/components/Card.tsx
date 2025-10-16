import type { GitHubData } from "../App";

type Props = {
  data: GitHubData;
};

function Card({ data }: Props) {
  return (
    <div>
      <p className="text-center mt-4">{data.name}</p>
    </div>
  );
}

export default Card;
