export default function container({children}) {
  return (
    <div className="max-w-3xl mx-auto py-8 space-y-8">
      {children}
    </div>
  )
}