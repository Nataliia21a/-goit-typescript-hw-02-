import css from "./LoadMoreBtn.module.css";

type Props = {
  onClick: () => void;
};

export default function LoadMoreBtn({ onClick }: Props) {
  return (
    <button type="button" onClick={onClick} className={css.loadMoreBtn}>
      Load More ...
    </button>
  );
}
