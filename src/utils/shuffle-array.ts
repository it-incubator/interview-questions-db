export const shuffleArray = <T>(arr: Array<T> | null): Array<T> => {
  if (!arr) return []

  const res = [...arr]

  for (let i = res.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))

    ;[res[j], res[i]] = [res[i], res[j]]
  }

  return res
}
