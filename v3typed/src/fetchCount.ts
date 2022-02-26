interface FechCountCallback {
  (count: number): void
}

export default function fetchCount(cb: FechCountCallback) {
  cb(0)
}