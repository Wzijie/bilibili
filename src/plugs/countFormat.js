export default function countFormat(count) {
  return count >= 10000 ? `${(count / 10000).toFixed(1)}万` : count;
}
