import avater from "./avater.png";

export const Avater = ({ url }) => {
  return <img class="rounded-circle" src={url ? url : avater} alt="" />;
};
