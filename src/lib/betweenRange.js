export default function between(value, array) {
  const [min, max = null] = array
  if (max) return value >= min && value <= max
  return value >= min
}
